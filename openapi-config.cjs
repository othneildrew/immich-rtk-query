const config = {
  schemaFile: 'https://raw.githubusercontent.com/immich-app/immich/refs/tags/v3.0.1/open-api/immich-openapi-specs.json',
  apiFile: './src/emptyApi.ts',
  apiImport: 'immichApi',
  outputFile: './src/immichApi.ts',
  exportName: 'enhancedImmichApi',
  hooks: true,
  tag: true,
  flattenArg: true,
}

module.exports = config