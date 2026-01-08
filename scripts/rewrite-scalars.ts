#!/usr/bin/env node

import { Project, Type, ts, TypeNode } from "ts-morph";
import * as path from "path";
import * as fs from "fs";

// ---------------------
// CLI args
// ---------------------
const [, , inputDir, outputDir] = process.argv;

if (!inputDir || !outputDir) {
  console.error("Usage: ts-node rewrite-scalars.ts <input-folder> <output-folder>");
  process.exit(1);
}

// ---------------------
// Helpers
// ---------------------

function normalizeTypeText(typeNode: TypeNode): string {
  if (typeNode.isKind(ts.SyntaxKind.UnionType)) {
    const unionNode = typeNode.asKindOrThrow(ts.SyntaxKind.UnionType);

    const filtered = unionNode
      .getTypeNodes()
      .map(t => t.getText())
      .filter((t): t is string => t !== "undefined");

    // Collapse single-member union
    if (filtered.length === 1) {
      return filtered[0]!;
    }

    return filtered.join(" | ");
  }

  return typeNode.getText();
}

function isScalarType(type: Type, enumNames: Set<string>): boolean {
  if (
    type.isString() ||
    type.isNumber() ||
    type.isBoolean() ||
    type.isEnum() ||
    type.isEnumLiteral()
  ) {
    return true;
  }

  const symbol = type.getSymbol();
  if (symbol && enumNames.has(symbol.getName())) {
    return true;
  }

  return false;
}

function isArrayType(type: Type, typeText: string): boolean {
  return (
    type.isArray() ||
    typeText.endsWith("[]") ||
    typeText.startsWith("Array<")
  );
}

// ---------------------
// Project setup
// ---------------------
const project = new Project({
  skipAddingFilesFromTsConfig: true,
});

project.addSourceFilesAtPaths(path.join(inputDir, "**/*.ts"));

// Collect enum names
const enumNames = new Set<string>();
for (const sf of project.getSourceFiles()) {
  sf.getEnums().forEach(e => enumNames.add(e.getName()));
}

// ---------------------
// Transform
// ---------------------
for (const sourceFile of project.getSourceFiles()) {
  sourceFile.getInterfaces().forEach(iface => {
    iface.getProperties().forEach(prop => {
      const typeNode = prop.getTypeNode();
      if (!typeNode) return;

      const type = prop.getType();
      const normalizedType = normalizeTypeText(typeNode);

      const isArray = isArrayType(type, normalizedType);
      const isScalar = isScalarType(type, enumNames);

      // REQUIRED:
      // - scalars
      // - enums
      // - arrays
      if (isScalar || isArray) {
        prop.setHasQuestionToken(false);
        prop.setType(normalizedType);
        return;
      }

      // OPTIONAL:
      // - nested / complex object types
      prop.setHasQuestionToken(true);
      prop.setType(normalizedType);
    });
  });

  // ---------------------
  // Format & write output
  // ---------------------
  sourceFile.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
  });

  const relativePath = path.relative(inputDir, sourceFile.getFilePath());
  const outPath = path.join(outputDir, relativePath);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, sourceFile.getFullText(), "utf8");
}

console.log("Type normalization complete.");
