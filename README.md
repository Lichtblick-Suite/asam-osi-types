# ASAM OSI Types

[![License](https://img.shields.io/badge/license-MPL--2.0-brightgreen)](https://github.com/Lichtblick-Suite/asam-osi-types/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/Lichtblick-Suite/asam-osi-types)](https://github.com/Lichtblick-Suite/asam-osi-types/issues)
[![NPM Version](https://img.shields.io/npm/v/@lichtblick/asam-osi-types)](https://www.npmjs.com/package/@lichtblick/asam-osi-types)

**ASAM OSI Types** provides generated TypeScript definitions and schema descriptor binaries for the [Open Simulation Interface (OSI)](https://www.asam.net/standards/detail/osi/) specification.

---

## Features

- Generated TypeScript definitions from the official ASAM OSI protobuf schemas.
- Descriptor definition modules exported as `Uint8Array` constants for runtime schema use.
- Auto-generated package barrel (`index.ts`) that re-exports generated modules from one entry point.
- Reproducible code generation workflow using the packaged Buf CLI (no global `protoc` required).
- Aligned with upstream OSI schema updates through the repository generation pipeline.

---

## Installation

Install the package using yarn:

```bash
yarn add @lichtblick/asam-osi-types
```

---

## Build and Scripts

The repository uses Yarn scripts for generation and packaging:

### `yarn prepare`

Runs `scripts/generate-version-proto.ts` to prepare version-specific proto inputs.

### `yarn clean`

Removes generated outputs (`generated/` and `dist/`) and rewrites `index.ts` via `scripts/generate-index.ts` so the barrel stays valid after cleanup.

### `yarn generate`

Runs the full generation pipeline:

1. `yarn clean`
2. `yarn prepare`
3. `buf generate` (TypeScript protobuf types into `generated/types`)
4. `scripts/generate-schema-definitions.ts` (descriptor modules in `generated/type-descriptors`)
5. `scripts/generate-index.ts` (auto-generated package barrel `index.ts`)

### `yarn build`

Runs `yarn generate` and then builds CJS + ESM + declaration output to `dist/` using `tsup`.

### `yarn lint` / `yarn lint:ci`

Runs ESLint with repository rules (`lint` applies fixes, `lint:ci` does not).

### `yarn format`

Formats files with Prettier.

---

## Local Testing

To verify the package locally with `npm link`:

1. Build this package:

```bash
yarn build
```

2. Register the local package globally from this repository:

```bash
npm link
```

3. In a separate folder, create a test project and initialize it:

```bash
mkdir test-project
cd test-project
npm init -y
```

4. Link the package into that test project:

```bash
npm link @lichtblick/asam-osi-types
```

5. Import types in your test project:

```typescript
import * as types from "@lichtblick/asam-osi-types";
```

## Versioning

The versioning for the project is handeled automatically via the github actions CI/CD workflow, it will always reflect **the current version of the OSI repository**.

Local versioning can be applied to the project through the **package.json** file, but it will not be reflected in the npm package metadata since it is overwritten when publishing.

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

Please ensure all code adheres to the [Mozilla Public License 2.0](https://github.com/Lichtblick-Suite/asam-osi-types/blob/main/LICENSE) and follows the repository's coding standards.

---

## Related Projects

- [Open Simulation Interface (OSI)](https://www.asam.net/standards/detail/osi/)
- [Lichtblick](https://github.com/lichtblick-suite/lichtblick)
- [ASAM OSI Converter Lichtblick Extension](https://github.com/lichtblick-suite/asam-osi-converter)
- [ASAM Organization](https://www.asam.net/)

---

## License

This project is licensed under the **Mozilla Public License 2.0**. For more details, see the [LICENSE](https://github.com/Lichtblick-Suite/asam-osi-types/blob/main/LICENSE) file.
