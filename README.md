<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: Unlicense][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Immich RTK Query</h3>

  <p align="center">
    A type-safe RTK Query API client for the Immich photo management platform
    <br />
    <a href="#usage"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/immich-rtk-query/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/immich-rtk-query/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Immich RTK Query is a fully type-safe API client for [Immich](https://immich.app/), the open-source photo and video management platform. This package provides auto-generated TypeScript types and React Query hooks for all Immich API endpoints, making it easy to integrate Immich into your React applications with full type safety and excellent developer experience.

### Key Features

* 🔒 **Fully Type-Safe** - Auto-generated TypeScript types from Immich's OpenAPI specification
* ⚡ **React Query Hooks** - Use `useGetAssetsQuery`, `useUploadAssetMutation`, and more
* 🔄 **Automatic Caching** - Powered by RTK Query for optimal performance
* 📦 **Tree-Shakeable** - Import only what you need
* 🎯 **Always Up-to-Date** - Generated from official Immich API specs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]
[![Redux][Redux]][Redux-url]
[![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This package requires the following peer dependencies:
* React 18.0.0 or higher
* React Redux 8.0.0 or higher
* Redux Toolkit 2.11.2 or higher

### Installation

Install the package via npm:

```bash
npm install immich-rtk-query
```

Or using yarn:

```bash
yarn add immich-rtk-query
```

Or using pnpm:

```bash
pnpm add immich-rtk-query
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### 1. Configure Your Redux Store

First, add the Immich API to your Redux store:

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { immichApi } from 'immich-rtk-query'

export const store = configureStore({
  reducer: {
    [immichApi.reducerPath]: immichApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(immichApi.middleware),
})
```

### 2. Configure the Base URL and Authentication

You can configure the Immich API base URL and add authentication by creating a custom base query:

```typescript
import { immichApi } from 'immich-rtk-query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Create a custom base query with your Immich instance URL and auth
const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: 'https://your-immich-instance.com/api',
  prepareHeaders: (headers) => {
    // Add authentication
    const apiKey = localStorage.getItem('immich-api-key')
    if (apiKey) {
      headers.set('x-api-key', apiKey)
    }
    return headers
  },
})

// Enhance the API with your custom base query
const customizedApi = immichApi.enhanceEndpoints({
  endpoints: {
    // You can customize specific endpoints here if needed
  },
})

// Update your store to use the customized API
export const store = configureStore({
  reducer: {
    [customizedApi.reducerPath]: customizedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customizedApi.middleware),
})
```

**Note:** The base API uses `baseUrl: '/'` by default. You'll need to either:
- Configure your app's proxy to forward requests to your Immich instance, or
- Create a custom API instance with the full Immich URL as shown above

### 3. Use the Hooks in Your Components

```typescript
import {
  useGetAllAssetsQuery,
  useUploadAssetMutation,
  useCreateAlbumMutation,
} from 'immich-rtk-query'

function MyPhotosComponent() {
  // Fetch assets with automatic caching and refetching
  const { data: assets, isLoading, error } = useGetAllAssetsQuery({
    take: 100,
  })

  // Mutations for creating/updating data
  const [uploadAsset, { isLoading: isUploading }] = useUploadAssetMutation()
  const [createAlbum] = useCreateAlbumMutation()

  const handleUpload = async (file: File) => {
    try {
      await uploadAsset({
        assetData: file,
        // ... other upload parameters
      }).unwrap()
    } catch (err) {
      console.error('Upload failed:', err)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading assets</div>

  return (
    <div>
      {assets?.map((asset) => (
        <img key={asset.id} src={asset.thumbnailUrl} alt={asset.originalFileName} />
      ))}
    </div>
  )
}
```

### 4. Advanced: Custom Endpoints

You can inject custom endpoints into the API:

```typescript
import { immichApi } from 'immich-rtk-query'

const extendedApi = immichApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCustomData: builder.query({
      query: () => '/custom-endpoint',
    }),
  }),
})

export const { useGetMyCustomDataQuery } = extendedApi
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Auto-generate TypeScript types from Immich OpenAPI spec
- [x] Generate React Query hooks
- [x] Support for all Immich API endpoints
- [ ] Add usage examples repository
- [ ] Add integration tests
- [ ] Support for custom transformers
- [ ] Automatic updates when Immich API changes

See the [open issues](https://github.com/othneildrew/immich-rtk-query/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development

To regenerate the API types from the latest Immich OpenAPI specification:

```bash
npm run generate
```

To build the package:

```bash
npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

This is free and unencumbered software released into the public domain. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Othneil Drew - [LinkedIn](https://linkedin.com/in/othneildrew)

Project Link: [https://github.com/othneildrew/immich-rtk-query](https://github.com/othneildrew/immich-rtk-query)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Immich](https://immich.app/) - The amazing open-source photo management platform
* [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Powerful data fetching and caching
* [RTK Query Codegen](https://redux-toolkit.js.org/rtk-query/usage/code-generation) - OpenAPI code generation for RTK Query
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template) - README template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/immich-rtk-query.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/immich-rtk-query/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/immich-rtk-query.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/immich-rtk-query/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/immich-rtk-query.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/immich-rtk-query/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/immich-rtk-query.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/immich-rtk-query/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/immich-rtk-query.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/immich-rtk-query/blob/master/LICENSE
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
