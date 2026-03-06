// scripts/generate-osi-version-proto.ts
import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";

type VersionInfo = {
  major: number;
  minor: number;
  patch: number;
  suffix?: string;
};

function parseVersionFile(contents: string): VersionInfo {
  // The VERSION file is lines like:
  // VERSION_MAJOR=3
  // VERSION_MINOR=7
  // VERSION_PATCH=1
  // VERSION_SUFFIX=-rc1   (optional)
  const kv = new Map<string, string>();

  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const idx = line.indexOf("=");
    if (idx === -1) {
      continue;
    }

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    kv.set(key, value);
  }

  const majorStr = kv.get("VERSION_MAJOR");
  const minorStr = kv.get("VERSION_MINOR");
  const patchStr = kv.get("VERSION_PATCH");

  if (majorStr == null || minorStr == null || patchStr == null) {
    throw new Error(
      `Missing required version keys. Need VERSION_MAJOR, VERSION_MINOR, VERSION_PATCH. Got: ${[
        ...kv.keys(),
      ].join(", ")}`,
    );
  }

  const major = Number.parseInt(majorStr, 10);
  const minor = Number.parseInt(minorStr, 10);
  const patch = Number.parseInt(patchStr, 10);

  if ([major, minor, patch].some((n) => Number.isNaN(n))) {
    throw new Error(
      `Invalid version numbers in VERSION file: major=${majorStr}, minor=${minorStr}, patch=${patchStr}`,
    );
  }

  const suffix = kv.get("VERSION_SUFFIX")?.trim();
  return { major, minor, patch, suffix: suffix === "" ? undefined : suffix };
}

function renderOsiVersionProto(template: string, v: VersionInfo): string {
  // Mirrors the python replace() calls:
  return template
    .replace("@VERSION_MAJOR@", String(v.major))
    .replace("@VERSION_MINOR@", String(v.minor))
    .replace("@VERSION_PATCH@", String(v.patch));
  // Note: python does NOT replace @VERSION_SUFFIX@ inside the proto template.
}

async function main() {
  const osiDir = path.resolve(process.cwd(), "open-simulation-interface");

  const versionPath = path.join(osiDir, "VERSION");
  const templatePath = path.join(osiDir, "osi_version.proto.in");
  const outPath = path.join(osiDir, "osi_version.proto");

  console.log("[generate-version-proto] Starting version proto generation");
  console.log(
    `[generate-version-proto] Reading ${path.relative(process.cwd(), versionPath)} and ${path.relative(process.cwd(), templatePath)}`,
  );
  const versionText = await readFile(versionPath, "utf8");
  const templateText = await readFile(templatePath, "utf8");

  const v = parseVersionFile(versionText);
  console.log(
    `[generate-version-proto] Parsed version ${v.major}.${v.minor}.${v.patch}${v.suffix ?? ""}`,
  );
  const rendered = renderOsiVersionProto(templateText, v);

  console.log(`[generate-version-proto] Writing ${path.relative(process.cwd(), outPath)}`);
  await writeFile(outPath, rendered, "utf8");

  // Optional: log the configured version for visibility
  const suffix = v.suffix ?? "";
  console.log(
    `[generate-version-proto] Wrote ${path.relative(process.cwd(), outPath)} (version ${v.major}.${v.minor}.${v.patch}${suffix})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
