# ASAM OSI Types

[![License](https://img.shields.io/badge/license-MPL--2.0-brightgreen)](https://github.com/Lichtblick-Suite/asam-osi-types/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/Lichtblick-Suite/asam-osi-types)](https://github.com/Lichtblick-Suite/asam-osi-types/issues)
[![NPM Version](https://img.shields.io/npm/v/asam-osi-types)](https://www.npmjs.com/package/asam-osi-types)

**ASAM OSI Types** provides TypeScript type definitions for the [Open Simulation Interface (OSI)](https://www.asam.net/standards/detail/osi/) specification. OSI facilitates the interoperability of simulation environments in automated driving and advanced driver-assistance systems (ADAS) development.

---

## Features

- Comprehensive TypeScript type definitions for the OSI specification.
- Simplifies development by enabling static type checking in TypeScript.
- Maintains compatibility with the official OSI schema versions.
- Designed for use in simulation and modeling projects involving OSI.

---

## Installation

Install the package using npm or yarn:

```bash
npm install asam-osi-types
```

or

```bash
yarn add asam-osi-types
```

---

## Build and Scripts

Here are the available commands and scripts for working with the project:

### Build

```bash
npm run build
```

or

```bash
yarn build
```

Compiles the TypeScript code into JavaScript. The compiled output is stored in the dist/ folder.

### Setup

```bash
npm run setup
```

or

```bash
yarn setup
```

Installs the OSI dependencies

### Generate

```bash
npm run generate
```

or

```bash
yarn generate
```

Generates **protobuf** files

### Lint

```bash
npm run lint
```

or

```bash
yarn lint
```

Lints the project using ESLint to enforce consistent code style.

### Test

```bash
npm run test
```

or

```bash
yarn test
```

Runs the test suite to ensure the code functions as expected.

### Clean

```bash
npm run clean
```

or

```bash
yarn clean
```

Removes the build output (dist/) and cleans up the workspace.

## Additional Commands

```bash
npm run format
```

or

```bash
yarn format
```

Formats the codebase using Prettier to maintain consistent styling.

## Usage

Here’s how to use the provided type definitions in a TypeScript project:

```typescript
import { OsiMessage } from "asam-osi-types";

// Example: Define an OSI Message
const message: OsiMessage = {
  header: {
    timestamp: {
      seconds: 1627500000,
      nanos: 123456789,
    },
    frame_id: "example-frame",
  },
  content: {
    exampleField: "value",
  },
};

console.log(message);
```

---

## API Documentation

### Main Types

- **`OsiMessage`**: Represents the base message format in OSI.
- **`Header`**: Metadata for OSI messages, including timestamps and IDs.
- **`Timestamp`**: Specifies time information.

For detailed type definitions, explore the source files in the `src` folder.

---

## Local Testing

To test the package locally, build the project and run the following command to create a symbolic link for the package

```bash
npm link
```

Create a local typescript test project with an index.ts file

```bash
mkdir test-project && cd $_ && touch index.ts
```

Initialize project

```bash
npm init -y
```

Link test project with the package

```bash
npm link asam-osi-types
```

Import types into the test-project

```typescript
import * as types from "asam-osi-types";
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
- [ASAM Organization](https://www.asam.net/)

---

## License

This project is licensed under the **Mozilla Public License 2.0**. For more details, see the [LICENSE](https://github.com/Lichtblick-Suite/asam-osi-types/blob/main/LICENSE) file.
