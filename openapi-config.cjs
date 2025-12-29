const config = {
  schemaFile: 'https://raw.githubusercontent.com/immich-app/immich/refs/tags/v2.4.1/open-api/immich-openapi-specs.json',
  apiFile: './src/emptyApi.ts',
  apiImport: 'immichApi',
  outputFile: './src/immichApi.ts',
  exportName: 'enhancedImmichApi',
  hooks: true,
  tag: true,
  flattenArg: true,
}

module.exports = config