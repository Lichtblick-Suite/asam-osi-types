import { SchemaClasses } from "./schemaClasses";

const getSchemaKeys = <T extends Record<string, unknown>>(schema: T) => Object.keys(schema);

export const ASAM_OSI_SCHEMAS: Record<string, string[]> = Object.fromEntries(
  Object.entries(SchemaClasses).map(([name, Class]) => [name, getSchemaKeys(new Class())]),
);
