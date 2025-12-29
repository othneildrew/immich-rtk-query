import { immichApi as api } from "./emptyApi";
export const addTagTypes = [
    "Activities",
    "Authentication (admin)",
    "Maintenance (admin)",
    "Notifications (admin)",
    "Users (admin)",
    "Albums",
    "API keys",
    "Assets",
    "Deprecated",
    "Authentication",
    "Download",
    "Duplicates",
    "Faces",
    "Jobs",
    "Libraries",
    "Map",
    "Memories",
    "Notifications",
    "Partners",
    "People",
    "Plugins",
    "Queues",
    "Search",
    "Server",
    "Sessions",
    "Shared links",
    "Stacks",
    "Sync",
    "System config",
    "System metadata",
    "Tags",
    "Timeline",
    "Trash",
    "Users",
    "Views",
    "Workflows",
];
const injectedRtkApi = api
    .enhanceEndpoints({
    addTagTypes,
})
    .injectEndpoints({
    endpoints: (build) => ({
        getActivities: build.query({
            query: (queryArg) => ({
                url: `/activities`,
                params: {
                    albumId: queryArg.albumId,
                    assetId: queryArg.assetId,
                    level: queryArg.level,
                    type: queryArg["type"],
                    userId: queryArg.userId,
                },
            }),
            providesTags: ["Activities"],
        }),
        createActivity: build.mutation({
            query: (queryArg) => ({
                url: `/activities`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Activities"],
        }),
        getActivityStatistics: build.query({
            query: (queryArg) => ({
                url: `/activities/statistics`,
                params: {
                    albumId: queryArg.albumId,
                    assetId: queryArg.assetId,
                },
            }),
            providesTags: ["Activities"],
        }),
        deleteActivity: build.mutation({
            query: (queryArg) => ({
                url: `/activities/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Activities"],
        }),
        unlinkAllOAuthAccountsAdmin: build.mutation({
            query: () => ({ url: `/admin/auth/unlink-all`, method: "POST" }),
            invalidatesTags: ["Authentication (admin)"],
        }),
        setMaintenanceMode: build.mutation({
            query: (queryArg) => ({
                url: `/admin/maintenance`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Maintenance (admin)"],
        }),
        maintenanceLogin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/maintenance/login`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Maintenance (admin)"],
        }),
        createNotification: build.mutation({
            query: (queryArg) => ({
                url: `/admin/notifications`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Notifications (admin)"],
        }),
        getNotificationTemplateAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/notifications/templates/${queryArg.name}`,
                method: "POST",
                body: queryArg.templateDto,
            }),
            invalidatesTags: ["Notifications (admin)"],
        }),
        sendTestEmailAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/notifications/test-email`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Notifications (admin)"],
        }),
        searchUsersAdmin: build.query({
            query: (queryArg) => ({
                url: `/admin/users`,
                params: {
                    id: queryArg.id,
                    withDeleted: queryArg.withDeleted,
                },
            }),
            providesTags: ["Users (admin)"],
        }),
        createUserAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/users`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Users (admin)"],
        }),
        deleteUserAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/users/${queryArg.id}`,
                method: "DELETE",
                body: queryArg.userAdminDeleteDto,
            }),
            invalidatesTags: ["Users (admin)"],
        }),
        getUserAdmin: build.query({
            query: (queryArg) => ({ url: `/admin/users/${queryArg}` }),
            providesTags: ["Users (admin)"],
        }),
        updateUserAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/users/${queryArg.id}`,
                method: "PUT",
                body: queryArg.userAdminUpdateDto,
            }),
            invalidatesTags: ["Users (admin)"],
        }),
        getUserPreferencesAdmin: build.query({
            query: (queryArg) => ({ url: `/admin/users/${queryArg}/preferences` }),
            providesTags: ["Users (admin)"],
        }),
        updateUserPreferencesAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/users/${queryArg.id}/preferences`,
                method: "PUT",
                body: queryArg.userPreferencesUpdateDto,
            }),
            invalidatesTags: ["Users (admin)"],
        }),
        restoreUserAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/admin/users/${queryArg}/restore`,
                method: "POST",
            }),
            invalidatesTags: ["Users (admin)"],
        }),
        getUserSessionsAdmin: build.query({
            query: (queryArg) => ({ url: `/admin/users/${queryArg}/sessions` }),
            providesTags: ["Users (admin)"],
        }),
        getUserStatisticsAdmin: build.query({
            query: (queryArg) => ({
                url: `/admin/users/${queryArg.id}/statistics`,
                params: {
                    isFavorite: queryArg.isFavorite,
                    isTrashed: queryArg.isTrashed,
                    visibility: queryArg.visibility,
                },
            }),
            providesTags: ["Users (admin)"],
        }),
        getAllAlbums: build.query({
            query: (queryArg) => ({
                url: `/albums`,
                params: {
                    assetId: queryArg.assetId,
                    shared: queryArg.shared,
                },
            }),
            providesTags: ["Albums"],
        }),
        createAlbum: build.mutation({
            query: (queryArg) => ({
                url: `/albums`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Albums"],
        }),
        addAssetsToAlbums: build.mutation({
            query: (queryArg) => ({
                url: `/albums/assets`,
                method: "PUT",
                body: queryArg.albumsAddAssetsDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Albums"],
        }),
        getAlbumStatistics: build.query({
            query: () => ({ url: `/albums/statistics` }),
            providesTags: ["Albums"],
        }),
        deleteAlbum: build.mutation({
            query: (queryArg) => ({ url: `/albums/${queryArg}`, method: "DELETE" }),
            invalidatesTags: ["Albums"],
        }),
        getAlbumInfo: build.query({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}`,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                    withoutAssets: queryArg.withoutAssets,
                },
            }),
            providesTags: ["Albums"],
        }),
        updateAlbumInfo: build.mutation({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}`,
                method: "PATCH",
                body: queryArg.updateAlbumDto,
            }),
            invalidatesTags: ["Albums"],
        }),
        removeAssetFromAlbum: build.mutation({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}/assets`,
                method: "DELETE",
                body: queryArg.bulkIdsDto,
            }),
            invalidatesTags: ["Albums"],
        }),
        addAssetsToAlbum: build.mutation({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}/assets`,
                method: "PUT",
                body: queryArg.bulkIdsDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Albums"],
        }),
        removeUserFromAlbum: build.mutation({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}/user/${queryArg.userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Albums"],
        }),
        updateAlbumUser: build.mutation({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}/user/${queryArg.userId}`,
                method: "PUT",
                body: queryArg.updateAlbumUserDto,
            }),
            invalidatesTags: ["Albums"],
        }),
        addUsersToAlbum: build.mutation({
            query: (queryArg) => ({
                url: `/albums/${queryArg.id}/users`,
                method: "PUT",
                body: queryArg.addUsersDto,
            }),
            invalidatesTags: ["Albums"],
        }),
        getApiKeys: build.query({
            query: () => ({ url: `/api-keys` }),
            providesTags: ["API keys"],
        }),
        createApiKey: build.mutation({
            query: (queryArg) => ({
                url: `/api-keys`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["API keys"],
        }),
        getMyApiKey: build.query({
            query: () => ({ url: `/api-keys/me` }),
            providesTags: ["API keys"],
        }),
        deleteApiKey: build.mutation({
            query: (queryArg) => ({
                url: `/api-keys/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["API keys"],
        }),
        getApiKey: build.query({
            query: (queryArg) => ({ url: `/api-keys/${queryArg}` }),
            providesTags: ["API keys"],
        }),
        updateApiKey: build.mutation({
            query: (queryArg) => ({
                url: `/api-keys/${queryArg.id}`,
                method: "PUT",
                body: queryArg.apiKeyUpdateDto,
            }),
            invalidatesTags: ["API keys"],
        }),
        deleteAssets: build.mutation({
            query: (queryArg) => ({
                url: `/assets`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["Assets"],
        }),
        uploadAsset: build.mutation({
            query: (queryArg) => ({
                url: `/assets`,
                method: "POST",
                body: queryArg.assetMediaCreateDto,
                headers: {
                    "x-immich-checksum": queryArg["x-immich-checksum"],
                },
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Assets"],
        }),
        updateAssets: build.mutation({
            query: (queryArg) => ({
                url: `/assets`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Assets"],
        }),
        checkBulkUpload: build.mutation({
            query: (queryArg) => ({
                url: `/assets/bulk-upload-check`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Assets"],
        }),
        copyAsset: build.mutation({
            query: (queryArg) => ({
                url: `/assets/copy`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Assets"],
        }),
        getAllUserAssetsByDeviceId: build.query({
            query: (queryArg) => ({ url: `/assets/device/${queryArg}` }),
            providesTags: ["Assets", "Deprecated"],
        }),
        checkExistingAssets: build.mutation({
            query: (queryArg) => ({
                url: `/assets/exist`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Assets"],
        }),
        runAssetJobs: build.mutation({
            query: (queryArg) => ({
                url: `/assets/jobs`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Assets"],
        }),
        getRandom: build.query({
            query: (queryArg) => ({
                url: `/assets/random`,
                params: {
                    count: queryArg,
                },
            }),
            providesTags: ["Assets", "Deprecated"],
        }),
        getAssetStatistics: build.query({
            query: (queryArg) => ({
                url: `/assets/statistics`,
                params: {
                    isFavorite: queryArg.isFavorite,
                    isTrashed: queryArg.isTrashed,
                    visibility: queryArg.visibility,
                },
            }),
            providesTags: ["Assets"],
        }),
        getAssetInfo: build.query({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}`,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            providesTags: ["Assets"],
        }),
        updateAsset: build.mutation({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}`,
                method: "PUT",
                body: queryArg.updateAssetDto,
            }),
            invalidatesTags: ["Assets"],
        }),
        getAssetMetadata: build.query({
            query: (queryArg) => ({ url: `/assets/${queryArg}/metadata` }),
            providesTags: ["Assets"],
        }),
        updateAssetMetadata: build.mutation({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/metadata`,
                method: "PUT",
                body: queryArg.assetMetadataUpsertDto,
            }),
            invalidatesTags: ["Assets"],
        }),
        deleteAssetMetadata: build.mutation({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/metadata/${queryArg.key}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Assets"],
        }),
        getAssetMetadataByKey: build.query({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/metadata/${queryArg.key}`,
            }),
            providesTags: ["Assets"],
        }),
        getAssetOcr: build.query({
            query: (queryArg) => ({ url: `/assets/${queryArg}/ocr` }),
            providesTags: ["Assets"],
        }),
        downloadAsset: build.query({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/original`,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            providesTags: ["Assets"],
        }),
        replaceAsset: build.mutation({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/original`,
                method: "PUT",
                body: queryArg.assetMediaReplaceDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Assets", "Deprecated"],
        }),
        viewAsset: build.query({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/thumbnail`,
                params: {
                    key: queryArg.key,
                    size: queryArg.size,
                    slug: queryArg.slug,
                },
            }),
            providesTags: ["Assets"],
        }),
        playAssetVideo: build.query({
            query: (queryArg) => ({
                url: `/assets/${queryArg.id}/video/playback`,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            providesTags: ["Assets"],
        }),
        signUpAdmin: build.mutation({
            query: (queryArg) => ({
                url: `/auth/admin-sign-up`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        changePassword: build.mutation({
            query: (queryArg) => ({
                url: `/auth/change-password`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        login: build.mutation({
            query: (queryArg) => ({
                url: `/auth/login`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        logout: build.mutation({
            query: () => ({ url: `/auth/logout`, method: "POST" }),
            invalidatesTags: ["Authentication"],
        }),
        resetPinCode: build.mutation({
            query: (queryArg) => ({
                url: `/auth/pin-code`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        setupPinCode: build.mutation({
            query: (queryArg) => ({
                url: `/auth/pin-code`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        changePinCode: build.mutation({
            query: (queryArg) => ({
                url: `/auth/pin-code`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        lockAuthSession: build.mutation({
            query: () => ({ url: `/auth/session/lock`, method: "POST" }),
            invalidatesTags: ["Authentication"],
        }),
        unlockAuthSession: build.mutation({
            query: (queryArg) => ({
                url: `/auth/session/unlock`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        getAuthStatus: build.query({
            query: () => ({ url: `/auth/status` }),
            providesTags: ["Authentication"],
        }),
        validateAccessToken: build.mutation({
            query: () => ({ url: `/auth/validateToken`, method: "POST" }),
            invalidatesTags: ["Authentication"],
        }),
        downloadArchive: build.mutation({
            query: (queryArg) => ({
                url: `/download/archive`,
                method: "POST",
                body: queryArg.assetIdsDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Download"],
        }),
        getDownloadInfo: build.mutation({
            query: (queryArg) => ({
                url: `/download/info`,
                method: "POST",
                body: queryArg.downloadInfoDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Download"],
        }),
        deleteDuplicates: build.mutation({
            query: (queryArg) => ({
                url: `/duplicates`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["Duplicates"],
        }),
        getAssetDuplicates: build.query({
            query: () => ({ url: `/duplicates` }),
            providesTags: ["Duplicates"],
        }),
        deleteDuplicate: build.mutation({
            query: (queryArg) => ({
                url: `/duplicates/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Duplicates"],
        }),
        getFaces: build.query({
            query: (queryArg) => ({
                url: `/faces`,
                params: {
                    id: queryArg,
                },
            }),
            providesTags: ["Faces"],
        }),
        createFace: build.mutation({
            query: (queryArg) => ({
                url: `/faces`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Faces"],
        }),
        deleteFace: build.mutation({
            query: (queryArg) => ({
                url: `/faces/${queryArg.id}`,
                method: "DELETE",
                body: queryArg.assetFaceDeleteDto,
            }),
            invalidatesTags: ["Faces"],
        }),
        reassignFacesById: build.mutation({
            query: (queryArg) => ({
                url: `/faces/${queryArg.id}`,
                method: "PUT",
                body: queryArg.faceDto,
            }),
            invalidatesTags: ["Faces"],
        }),
        getQueuesLegacy: build.query({
            query: () => ({ url: `/jobs` }),
            providesTags: ["Jobs", "Deprecated"],
        }),
        createJob: build.mutation({
            query: (queryArg) => ({ url: `/jobs`, method: "POST", body: queryArg }),
            invalidatesTags: ["Jobs"],
        }),
        runQueueCommandLegacy: build.mutation({
            query: (queryArg) => ({
                url: `/jobs/${queryArg.name}`,
                method: "PUT",
                body: queryArg.queueCommandDto,
            }),
            invalidatesTags: ["Jobs", "Deprecated"],
        }),
        getAllLibraries: build.query({
            query: () => ({ url: `/libraries` }),
            providesTags: ["Libraries"],
        }),
        createLibrary: build.mutation({
            query: (queryArg) => ({
                url: `/libraries`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Libraries"],
        }),
        deleteLibrary: build.mutation({
            query: (queryArg) => ({
                url: `/libraries/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Libraries"],
        }),
        getLibrary: build.query({
            query: (queryArg) => ({ url: `/libraries/${queryArg}` }),
            providesTags: ["Libraries"],
        }),
        updateLibrary: build.mutation({
            query: (queryArg) => ({
                url: `/libraries/${queryArg.id}`,
                method: "PUT",
                body: queryArg.updateLibraryDto,
            }),
            invalidatesTags: ["Libraries"],
        }),
        scanLibrary: build.mutation({
            query: (queryArg) => ({
                url: `/libraries/${queryArg}/scan`,
                method: "POST",
            }),
            invalidatesTags: ["Libraries"],
        }),
        getLibraryStatistics: build.query({
            query: (queryArg) => ({ url: `/libraries/${queryArg}/statistics` }),
            providesTags: ["Libraries"],
        }),
        validate: build.mutation({
            query: (queryArg) => ({
                url: `/libraries/${queryArg.id}/validate`,
                method: "POST",
                body: queryArg.validateLibraryDto,
            }),
            invalidatesTags: ["Libraries"],
        }),
        getMapMarkers: build.query({
            query: (queryArg) => ({
                url: `/map/markers`,
                params: {
                    fileCreatedAfter: queryArg.fileCreatedAfter,
                    fileCreatedBefore: queryArg.fileCreatedBefore,
                    isArchived: queryArg.isArchived,
                    isFavorite: queryArg.isFavorite,
                    withPartners: queryArg.withPartners,
                    withSharedAlbums: queryArg.withSharedAlbums,
                },
            }),
            providesTags: ["Map"],
        }),
        reverseGeocode: build.query({
            query: (queryArg) => ({
                url: `/map/reverse-geocode`,
                params: {
                    lat: queryArg.lat,
                    lon: queryArg.lon,
                },
            }),
            providesTags: ["Map"],
        }),
        searchMemories: build.query({
            query: (queryArg) => ({
                url: `/memories`,
                params: {
                    for: queryArg["for"],
                    isSaved: queryArg.isSaved,
                    isTrashed: queryArg.isTrashed,
                    order: queryArg.order,
                    size: queryArg.size,
                    type: queryArg["type"],
                },
            }),
            providesTags: ["Memories"],
        }),
        createMemory: build.mutation({
            query: (queryArg) => ({
                url: `/memories`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Memories"],
        }),
        memoriesStatistics: build.query({
            query: (queryArg) => ({
                url: `/memories/statistics`,
                params: {
                    for: queryArg["for"],
                    isSaved: queryArg.isSaved,
                    isTrashed: queryArg.isTrashed,
                    order: queryArg.order,
                    size: queryArg.size,
                    type: queryArg["type"],
                },
            }),
            providesTags: ["Memories"],
        }),
        deleteMemory: build.mutation({
            query: (queryArg) => ({
                url: `/memories/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Memories"],
        }),
        getMemory: build.query({
            query: (queryArg) => ({ url: `/memories/${queryArg}` }),
            providesTags: ["Memories"],
        }),
        updateMemory: build.mutation({
            query: (queryArg) => ({
                url: `/memories/${queryArg.id}`,
                method: "PUT",
                body: queryArg.memoryUpdateDto,
            }),
            invalidatesTags: ["Memories"],
        }),
        removeMemoryAssets: build.mutation({
            query: (queryArg) => ({
                url: `/memories/${queryArg.id}/assets`,
                method: "DELETE",
                body: queryArg.bulkIdsDto,
            }),
            invalidatesTags: ["Memories"],
        }),
        addMemoryAssets: build.mutation({
            query: (queryArg) => ({
                url: `/memories/${queryArg.id}/assets`,
                method: "PUT",
                body: queryArg.bulkIdsDto,
            }),
            invalidatesTags: ["Memories"],
        }),
        deleteNotifications: build.mutation({
            query: (queryArg) => ({
                url: `/notifications`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["Notifications"],
        }),
        getNotifications: build.query({
            query: (queryArg) => ({
                url: `/notifications`,
                params: {
                    id: queryArg.id,
                    level: queryArg.level,
                    type: queryArg["type"],
                    unread: queryArg.unread,
                },
            }),
            providesTags: ["Notifications"],
        }),
        updateNotifications: build.mutation({
            query: (queryArg) => ({
                url: `/notifications`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Notifications"],
        }),
        deleteNotification: build.mutation({
            query: (queryArg) => ({
                url: `/notifications/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Notifications"],
        }),
        getNotification: build.query({
            query: (queryArg) => ({ url: `/notifications/${queryArg}` }),
            providesTags: ["Notifications"],
        }),
        updateNotification: build.mutation({
            query: (queryArg) => ({
                url: `/notifications/${queryArg.id}`,
                method: "PUT",
                body: queryArg.notificationUpdateDto,
            }),
            invalidatesTags: ["Notifications"],
        }),
        startOAuth: build.mutation({
            query: (queryArg) => ({
                url: `/oauth/authorize`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        finishOAuth: build.mutation({
            query: (queryArg) => ({
                url: `/oauth/callback`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        linkOAuthAccount: build.mutation({
            query: (queryArg) => ({
                url: `/oauth/link`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Authentication"],
        }),
        redirectOAuthToMobile: build.query({
            query: () => ({ url: `/oauth/mobile-redirect` }),
            providesTags: ["Authentication"],
        }),
        unlinkOAuthAccount: build.mutation({
            query: () => ({ url: `/oauth/unlink`, method: "POST" }),
            invalidatesTags: ["Authentication"],
        }),
        getPartners: build.query({
            query: (queryArg) => ({
                url: `/partners`,
                params: {
                    direction: queryArg,
                },
            }),
            providesTags: ["Partners"],
        }),
        createPartner: build.mutation({
            query: (queryArg) => ({
                url: `/partners`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Partners"],
        }),
        removePartner: build.mutation({
            query: (queryArg) => ({
                url: `/partners/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Partners"],
        }),
        createPartnerDeprecated: build.mutation({
            query: (queryArg) => ({ url: `/partners/${queryArg}`, method: "POST" }),
            invalidatesTags: ["Partners", "Deprecated"],
        }),
        updatePartner: build.mutation({
            query: (queryArg) => ({
                url: `/partners/${queryArg.id}`,
                method: "PUT",
                body: queryArg.partnerUpdateDto,
            }),
            invalidatesTags: ["Partners"],
        }),
        deletePeople: build.mutation({
            query: (queryArg) => ({
                url: `/people`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["People"],
        }),
        getAllPeople: build.query({
            query: (queryArg) => ({
                url: `/people`,
                params: {
                    closestAssetId: queryArg.closestAssetId,
                    closestPersonId: queryArg.closestPersonId,
                    page: queryArg.page,
                    size: queryArg.size,
                    withHidden: queryArg.withHidden,
                },
            }),
            providesTags: ["People"],
        }),
        createPerson: build.mutation({
            query: (queryArg) => ({
                url: `/people`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["People"],
        }),
        updatePeople: build.mutation({
            query: (queryArg) => ({
                url: `/people`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["People"],
        }),
        deletePerson: build.mutation({
            query: (queryArg) => ({
                url: `/people/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["People"],
        }),
        getPerson: build.query({
            query: (queryArg) => ({ url: `/people/${queryArg}` }),
            providesTags: ["People"],
        }),
        updatePerson: build.mutation({
            query: (queryArg) => ({
                url: `/people/${queryArg.id}`,
                method: "PUT",
                body: queryArg.personUpdateDto,
            }),
            invalidatesTags: ["People"],
        }),
        mergePerson: build.mutation({
            query: (queryArg) => ({
                url: `/people/${queryArg.id}/merge`,
                method: "POST",
                body: queryArg.mergePersonDto,
            }),
            invalidatesTags: ["People"],
        }),
        reassignFaces: build.mutation({
            query: (queryArg) => ({
                url: `/people/${queryArg.id}/reassign`,
                method: "PUT",
                body: queryArg.assetFaceUpdateDto,
            }),
            invalidatesTags: ["People"],
        }),
        getPersonStatistics: build.query({
            query: (queryArg) => ({ url: `/people/${queryArg}/statistics` }),
            providesTags: ["People"],
        }),
        getPersonThumbnail: build.query({
            query: (queryArg) => ({ url: `/people/${queryArg}/thumbnail` }),
            providesTags: ["People"],
        }),
        getPlugins: build.query({
            query: () => ({ url: `/plugins` }),
            providesTags: ["Plugins"],
        }),
        getPlugin: build.query({
            query: (queryArg) => ({ url: `/plugins/${queryArg}` }),
            providesTags: ["Plugins"],
        }),
        getQueues: build.query({
            query: () => ({ url: `/queues` }),
            providesTags: ["Queues"],
        }),
        getQueue: build.query({
            query: (queryArg) => ({ url: `/queues/${queryArg}` }),
            providesTags: ["Queues"],
        }),
        updateQueue: build.mutation({
            query: (queryArg) => ({
                url: `/queues/${queryArg.name}`,
                method: "PUT",
                body: queryArg.queueUpdateDto,
            }),
            invalidatesTags: ["Queues"],
        }),
        emptyQueue: build.mutation({
            query: (queryArg) => ({
                url: `/queues/${queryArg.name}/jobs`,
                method: "DELETE",
                body: queryArg.queueDeleteDto,
            }),
            invalidatesTags: ["Queues"],
        }),
        getQueueJobs: build.query({
            query: (queryArg) => ({
                url: `/queues/${queryArg.name}/jobs`,
                params: {
                    status: queryArg.status,
                },
            }),
            providesTags: ["Queues"],
        }),
        getAssetsByCity: build.query({
            query: () => ({ url: `/search/cities` }),
            providesTags: ["Search"],
        }),
        getExploreData: build.query({
            query: () => ({ url: `/search/explore` }),
            providesTags: ["Search"],
        }),
        searchLargeAssets: build.mutation({
            query: (queryArg) => ({
                url: `/search/large-assets`,
                method: "POST",
                params: {
                    albumIds: queryArg.albumIds,
                    city: queryArg.city,
                    country: queryArg.country,
                    createdAfter: queryArg.createdAfter,
                    createdBefore: queryArg.createdBefore,
                    deviceId: queryArg.deviceId,
                    isEncoded: queryArg.isEncoded,
                    isFavorite: queryArg.isFavorite,
                    isMotion: queryArg.isMotion,
                    isNotInAlbum: queryArg.isNotInAlbum,
                    isOffline: queryArg.isOffline,
                    lensModel: queryArg.lensModel,
                    libraryId: queryArg.libraryId,
                    make: queryArg.make,
                    minFileSize: queryArg.minFileSize,
                    model: queryArg.model,
                    ocr: queryArg.ocr,
                    personIds: queryArg.personIds,
                    rating: queryArg.rating,
                    size: queryArg.size,
                    state: queryArg.state,
                    tagIds: queryArg.tagIds,
                    takenAfter: queryArg.takenAfter,
                    takenBefore: queryArg.takenBefore,
                    trashedAfter: queryArg.trashedAfter,
                    trashedBefore: queryArg.trashedBefore,
                    type: queryArg["type"],
                    updatedAfter: queryArg.updatedAfter,
                    updatedBefore: queryArg.updatedBefore,
                    visibility: queryArg.visibility,
                    withDeleted: queryArg.withDeleted,
                    withExif: queryArg.withExif,
                },
            }),
            invalidatesTags: ["Search"],
        }),
        searchAssets: build.mutation({
            query: (queryArg) => ({
                url: `/search/metadata`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Search"],
        }),
        searchPerson: build.query({
            query: (queryArg) => ({
                url: `/search/person`,
                params: {
                    name: queryArg.name,
                    withHidden: queryArg.withHidden,
                },
            }),
            providesTags: ["Search"],
        }),
        searchPlaces: build.query({
            query: (queryArg) => ({
                url: `/search/places`,
                params: {
                    name: queryArg,
                },
            }),
            providesTags: ["Search"],
        }),
        searchRandom: build.mutation({
            query: (queryArg) => ({
                url: `/search/random`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Search"],
        }),
        searchSmart: build.mutation({
            query: (queryArg) => ({
                url: `/search/smart`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Search"],
        }),
        searchAssetStatistics: build.mutation({
            query: (queryArg) => ({
                url: `/search/statistics`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Search"],
        }),
        getSearchSuggestions: build.query({
            query: (queryArg) => ({
                url: `/search/suggestions`,
                params: {
                    country: queryArg.country,
                    includeNull: queryArg.includeNull,
                    lensModel: queryArg.lensModel,
                    make: queryArg.make,
                    model: queryArg.model,
                    state: queryArg.state,
                    type: queryArg["type"],
                },
            }),
            providesTags: ["Search"],
        }),
        getAboutInfo: build.query({
            query: () => ({ url: `/server/about` }),
            providesTags: ["Server"],
        }),
        getApkLinks: build.query({
            query: () => ({ url: `/server/apk-links` }),
            providesTags: ["Server"],
        }),
        getServerConfig: build.query({
            query: () => ({ url: `/server/config` }),
            providesTags: ["Server"],
        }),
        getServerFeatures: build.query({
            query: () => ({ url: `/server/features` }),
            providesTags: ["Server"],
        }),
        deleteServerLicense: build.mutation({
            query: () => ({ url: `/server/license`, method: "DELETE" }),
            invalidatesTags: ["Server"],
        }),
        getServerLicense: build.query({
            query: () => ({ url: `/server/license` }),
            providesTags: ["Server"],
        }),
        setServerLicense: build.mutation({
            query: (queryArg) => ({
                url: `/server/license`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Server"],
        }),
        getSupportedMediaTypes: build.query({
            query: () => ({ url: `/server/media-types` }),
            providesTags: ["Server"],
        }),
        pingServer: build.query({
            query: () => ({ url: `/server/ping` }),
            providesTags: ["Server"],
        }),
        getServerStatistics: build.query({
            query: () => ({ url: `/server/statistics` }),
            providesTags: ["Server"],
        }),
        getStorage: build.query({
            query: () => ({ url: `/server/storage` }),
            providesTags: ["Server"],
        }),
        getTheme: build.query({
            query: () => ({ url: `/server/theme` }),
            providesTags: ["Server"],
        }),
        getServerVersion: build.query({
            query: () => ({ url: `/server/version` }),
            providesTags: ["Server"],
        }),
        getVersionCheck: build.query({
            query: () => ({ url: `/server/version-check` }),
            providesTags: ["Server"],
        }),
        getVersionHistory: build.query({
            query: () => ({ url: `/server/version-history` }),
            providesTags: ["Server"],
        }),
        deleteAllSessions: build.mutation({
            query: () => ({ url: `/sessions`, method: "DELETE" }),
            invalidatesTags: ["Sessions"],
        }),
        getSessions: build.query({
            query: () => ({ url: `/sessions` }),
            providesTags: ["Sessions"],
        }),
        createSession: build.mutation({
            query: (queryArg) => ({
                url: `/sessions`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Sessions"],
        }),
        deleteSession: build.mutation({
            query: (queryArg) => ({
                url: `/sessions/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Sessions"],
        }),
        updateSession: build.mutation({
            query: (queryArg) => ({
                url: `/sessions/${queryArg.id}`,
                method: "PUT",
                body: queryArg.sessionUpdateDto,
            }),
            invalidatesTags: ["Sessions"],
        }),
        lockSession: build.mutation({
            query: (queryArg) => ({
                url: `/sessions/${queryArg}/lock`,
                method: "POST",
            }),
            invalidatesTags: ["Sessions"],
        }),
        getAllSharedLinks: build.query({
            query: (queryArg) => ({
                url: `/shared-links`,
                params: {
                    albumId: queryArg,
                },
            }),
            providesTags: ["Shared links"],
        }),
        createSharedLink: build.mutation({
            query: (queryArg) => ({
                url: `/shared-links`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Shared links"],
        }),
        getMySharedLink: build.query({
            query: (queryArg) => ({
                url: `/shared-links/me`,
                params: {
                    key: queryArg.key,
                    password: queryArg.password,
                    slug: queryArg.slug,
                    token: queryArg.token,
                },
            }),
            providesTags: ["Shared links"],
        }),
        removeSharedLink: build.mutation({
            query: (queryArg) => ({
                url: `/shared-links/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Shared links"],
        }),
        getSharedLinkById: build.query({
            query: (queryArg) => ({ url: `/shared-links/${queryArg}` }),
            providesTags: ["Shared links"],
        }),
        updateSharedLink: build.mutation({
            query: (queryArg) => ({
                url: `/shared-links/${queryArg.id}`,
                method: "PATCH",
                body: queryArg.sharedLinkEditDto,
            }),
            invalidatesTags: ["Shared links"],
        }),
        removeSharedLinkAssets: build.mutation({
            query: (queryArg) => ({
                url: `/shared-links/${queryArg.id}/assets`,
                method: "DELETE",
                body: queryArg.assetIdsDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Shared links"],
        }),
        addSharedLinkAssets: build.mutation({
            query: (queryArg) => ({
                url: `/shared-links/${queryArg.id}/assets`,
                method: "PUT",
                body: queryArg.assetIdsDto,
                params: {
                    key: queryArg.key,
                    slug: queryArg.slug,
                },
            }),
            invalidatesTags: ["Shared links"],
        }),
        deleteStacks: build.mutation({
            query: (queryArg) => ({
                url: `/stacks`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["Stacks"],
        }),
        searchStacks: build.query({
            query: (queryArg) => ({
                url: `/stacks`,
                params: {
                    primaryAssetId: queryArg,
                },
            }),
            providesTags: ["Stacks"],
        }),
        createStack: build.mutation({
            query: (queryArg) => ({
                url: `/stacks`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Stacks"],
        }),
        deleteStack: build.mutation({
            query: (queryArg) => ({ url: `/stacks/${queryArg}`, method: "DELETE" }),
            invalidatesTags: ["Stacks"],
        }),
        getStack: build.query({
            query: (queryArg) => ({ url: `/stacks/${queryArg}` }),
            providesTags: ["Stacks"],
        }),
        updateStack: build.mutation({
            query: (queryArg) => ({
                url: `/stacks/${queryArg.id}`,
                method: "PUT",
                body: queryArg.stackUpdateDto,
            }),
            invalidatesTags: ["Stacks"],
        }),
        removeAssetFromStack: build.mutation({
            query: (queryArg) => ({
                url: `/stacks/${queryArg.id}/assets/${queryArg.assetId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Stacks"],
        }),
        deleteSyncAck: build.mutation({
            query: (queryArg) => ({
                url: `/sync/ack`,
                method: "DELETE",
                body: queryArg,
            }),
            invalidatesTags: ["Sync"],
        }),
        getSyncAck: build.query({
            query: () => ({ url: `/sync/ack` }),
            providesTags: ["Sync"],
        }),
        sendSyncAck: build.mutation({
            query: (queryArg) => ({
                url: `/sync/ack`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Sync"],
        }),
        getDeltaSync: build.mutation({
            query: (queryArg) => ({
                url: `/sync/delta-sync`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Sync", "Deprecated"],
        }),
        getFullSyncForUser: build.mutation({
            query: (queryArg) => ({
                url: `/sync/full-sync`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Sync", "Deprecated"],
        }),
        getSyncStream: build.mutation({
            query: (queryArg) => ({
                url: `/sync/stream`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Sync"],
        }),
        getConfig: build.query({
            query: () => ({ url: `/system-config` }),
            providesTags: ["System config"],
        }),
        updateConfig: build.mutation({
            query: (queryArg) => ({
                url: `/system-config`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["System config"],
        }),
        getConfigDefaults: build.query({
            query: () => ({ url: `/system-config/defaults` }),
            providesTags: ["System config"],
        }),
        getStorageTemplateOptions: build.query({
            query: () => ({ url: `/system-config/storage-template-options` }),
            providesTags: ["System config"],
        }),
        getAdminOnboarding: build.query({
            query: () => ({ url: `/system-metadata/admin-onboarding` }),
            providesTags: ["System metadata"],
        }),
        updateAdminOnboarding: build.mutation({
            query: (queryArg) => ({
                url: `/system-metadata/admin-onboarding`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["System metadata"],
        }),
        getReverseGeocodingState: build.query({
            query: () => ({ url: `/system-metadata/reverse-geocoding-state` }),
            providesTags: ["System metadata"],
        }),
        getVersionCheckState: build.query({
            query: () => ({ url: `/system-metadata/version-check-state` }),
            providesTags: ["System metadata"],
        }),
        getAllTags: build.query({
            query: () => ({ url: `/tags` }),
            providesTags: ["Tags"],
        }),
        createTag: build.mutation({
            query: (queryArg) => ({ url: `/tags`, method: "POST", body: queryArg }),
            invalidatesTags: ["Tags"],
        }),
        upsertTags: build.mutation({
            query: (queryArg) => ({ url: `/tags`, method: "PUT", body: queryArg }),
            invalidatesTags: ["Tags"],
        }),
        bulkTagAssets: build.mutation({
            query: (queryArg) => ({
                url: `/tags/assets`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Tags"],
        }),
        deleteTag: build.mutation({
            query: (queryArg) => ({ url: `/tags/${queryArg}`, method: "DELETE" }),
            invalidatesTags: ["Tags"],
        }),
        getTagById: build.query({
            query: (queryArg) => ({ url: `/tags/${queryArg}` }),
            providesTags: ["Tags"],
        }),
        updateTag: build.mutation({
            query: (queryArg) => ({
                url: `/tags/${queryArg.id}`,
                method: "PUT",
                body: queryArg.tagUpdateDto,
            }),
            invalidatesTags: ["Tags"],
        }),
        untagAssets: build.mutation({
            query: (queryArg) => ({
                url: `/tags/${queryArg.id}/assets`,
                method: "DELETE",
                body: queryArg.bulkIdsDto,
            }),
            invalidatesTags: ["Tags"],
        }),
        tagAssets: build.mutation({
            query: (queryArg) => ({
                url: `/tags/${queryArg.id}/assets`,
                method: "PUT",
                body: queryArg.bulkIdsDto,
            }),
            invalidatesTags: ["Tags"],
        }),
        getTimeBucket: build.query({
            query: (queryArg) => ({
                url: `/timeline/bucket`,
                params: {
                    albumId: queryArg.albumId,
                    isFavorite: queryArg.isFavorite,
                    isTrashed: queryArg.isTrashed,
                    key: queryArg.key,
                    order: queryArg.order,
                    personId: queryArg.personId,
                    slug: queryArg.slug,
                    tagId: queryArg.tagId,
                    timeBucket: queryArg.timeBucket,
                    userId: queryArg.userId,
                    visibility: queryArg.visibility,
                    withCoordinates: queryArg.withCoordinates,
                    withPartners: queryArg.withPartners,
                    withStacked: queryArg.withStacked,
                },
            }),
            providesTags: ["Timeline"],
        }),
        getTimeBuckets: build.query({
            query: (queryArg) => ({
                url: `/timeline/buckets`,
                params: {
                    albumId: queryArg.albumId,
                    isFavorite: queryArg.isFavorite,
                    isTrashed: queryArg.isTrashed,
                    key: queryArg.key,
                    order: queryArg.order,
                    personId: queryArg.personId,
                    slug: queryArg.slug,
                    tagId: queryArg.tagId,
                    userId: queryArg.userId,
                    visibility: queryArg.visibility,
                    withCoordinates: queryArg.withCoordinates,
                    withPartners: queryArg.withPartners,
                    withStacked: queryArg.withStacked,
                },
            }),
            providesTags: ["Timeline"],
        }),
        emptyTrash: build.mutation({
            query: () => ({ url: `/trash/empty`, method: "POST" }),
            invalidatesTags: ["Trash"],
        }),
        restoreTrash: build.mutation({
            query: () => ({ url: `/trash/restore`, method: "POST" }),
            invalidatesTags: ["Trash"],
        }),
        restoreAssets: build.mutation({
            query: (queryArg) => ({
                url: `/trash/restore/assets`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Trash"],
        }),
        searchUsers: build.query({
            query: () => ({ url: `/users` }),
            providesTags: ["Users"],
        }),
        getMyUser: build.query({
            query: () => ({ url: `/users/me` }),
            providesTags: ["Users"],
        }),
        updateMyUser: build.mutation({
            query: (queryArg) => ({
                url: `/users/me`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Users"],
        }),
        deleteUserLicense: build.mutation({
            query: () => ({ url: `/users/me/license`, method: "DELETE" }),
            invalidatesTags: ["Users"],
        }),
        getUserLicense: build.query({
            query: () => ({ url: `/users/me/license` }),
            providesTags: ["Users"],
        }),
        setUserLicense: build.mutation({
            query: (queryArg) => ({
                url: `/users/me/license`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Users"],
        }),
        deleteUserOnboarding: build.mutation({
            query: () => ({ url: `/users/me/onboarding`, method: "DELETE" }),
            invalidatesTags: ["Users"],
        }),
        getUserOnboarding: build.query({
            query: () => ({ url: `/users/me/onboarding` }),
            providesTags: ["Users"],
        }),
        setUserOnboarding: build.mutation({
            query: (queryArg) => ({
                url: `/users/me/onboarding`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Users"],
        }),
        getMyPreferences: build.query({
            query: () => ({ url: `/users/me/preferences` }),
            providesTags: ["Users"],
        }),
        updateMyPreferences: build.mutation({
            query: (queryArg) => ({
                url: `/users/me/preferences`,
                method: "PUT",
                body: queryArg,
            }),
            invalidatesTags: ["Users"],
        }),
        deleteProfileImage: build.mutation({
            query: () => ({ url: `/users/profile-image`, method: "DELETE" }),
            invalidatesTags: ["Users"],
        }),
        createProfileImage: build.mutation({
            query: (queryArg) => ({
                url: `/users/profile-image`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Users"],
        }),
        getUser: build.query({
            query: (queryArg) => ({ url: `/users/${queryArg}` }),
            providesTags: ["Users"],
        }),
        getProfileImage: build.query({
            query: (queryArg) => ({ url: `/users/${queryArg}/profile-image` }),
            providesTags: ["Users"],
        }),
        getAssetsByOriginalPath: build.query({
            query: (queryArg) => ({
                url: `/view/folder`,
                params: {
                    path: queryArg,
                },
            }),
            providesTags: ["Views"],
        }),
        getUniqueOriginalPaths: build.query({
            query: () => ({ url: `/view/folder/unique-paths` }),
            providesTags: ["Views"],
        }),
        getWorkflows: build.query({
            query: () => ({ url: `/workflows` }),
            providesTags: ["Workflows"],
        }),
        createWorkflow: build.mutation({
            query: (queryArg) => ({
                url: `/workflows`,
                method: "POST",
                body: queryArg,
            }),
            invalidatesTags: ["Workflows"],
        }),
        deleteWorkflow: build.mutation({
            query: (queryArg) => ({
                url: `/workflows/${queryArg}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Workflows"],
        }),
        getWorkflow: build.query({
            query: (queryArg) => ({ url: `/workflows/${queryArg}` }),
            providesTags: ["Workflows"],
        }),
        updateWorkflow: build.mutation({
            query: (queryArg) => ({
                url: `/workflows/${queryArg.id}`,
                method: "PUT",
                body: queryArg.workflowUpdateDto,
            }),
            invalidatesTags: ["Workflows"],
        }),
    }),
    overrideExisting: false,
});
export { injectedRtkApi as enhancedImmichApi };
export const { useGetActivitiesQuery, useCreateActivityMutation, useGetActivityStatisticsQuery, useDeleteActivityMutation, useUnlinkAllOAuthAccountsAdminMutation, useSetMaintenanceModeMutation, useMaintenanceLoginMutation, useCreateNotificationMutation, useGetNotificationTemplateAdminMutation, useSendTestEmailAdminMutation, useSearchUsersAdminQuery, useCreateUserAdminMutation, useDeleteUserAdminMutation, useGetUserAdminQuery, useUpdateUserAdminMutation, useGetUserPreferencesAdminQuery, useUpdateUserPreferencesAdminMutation, useRestoreUserAdminMutation, useGetUserSessionsAdminQuery, useGetUserStatisticsAdminQuery, useGetAllAlbumsQuery, useCreateAlbumMutation, useAddAssetsToAlbumsMutation, useGetAlbumStatisticsQuery, useDeleteAlbumMutation, useGetAlbumInfoQuery, useUpdateAlbumInfoMutation, useRemoveAssetFromAlbumMutation, useAddAssetsToAlbumMutation, useRemoveUserFromAlbumMutation, useUpdateAlbumUserMutation, useAddUsersToAlbumMutation, useGetApiKeysQuery, useCreateApiKeyMutation, useGetMyApiKeyQuery, useDeleteApiKeyMutation, useGetApiKeyQuery, useUpdateApiKeyMutation, useDeleteAssetsMutation, useUploadAssetMutation, useUpdateAssetsMutation, useCheckBulkUploadMutation, useCopyAssetMutation, useGetAllUserAssetsByDeviceIdQuery, useCheckExistingAssetsMutation, useRunAssetJobsMutation, useGetRandomQuery, useGetAssetStatisticsQuery, useGetAssetInfoQuery, useUpdateAssetMutation, useGetAssetMetadataQuery, useUpdateAssetMetadataMutation, useDeleteAssetMetadataMutation, useGetAssetMetadataByKeyQuery, useGetAssetOcrQuery, useDownloadAssetQuery, useReplaceAssetMutation, useViewAssetQuery, usePlayAssetVideoQuery, useSignUpAdminMutation, useChangePasswordMutation, useLoginMutation, useLogoutMutation, useResetPinCodeMutation, useSetupPinCodeMutation, useChangePinCodeMutation, useLockAuthSessionMutation, useUnlockAuthSessionMutation, useGetAuthStatusQuery, useValidateAccessTokenMutation, useDownloadArchiveMutation, useGetDownloadInfoMutation, useDeleteDuplicatesMutation, useGetAssetDuplicatesQuery, useDeleteDuplicateMutation, useGetFacesQuery, useCreateFaceMutation, useDeleteFaceMutation, useReassignFacesByIdMutation, useGetQueuesLegacyQuery, useCreateJobMutation, useRunQueueCommandLegacyMutation, useGetAllLibrariesQuery, useCreateLibraryMutation, useDeleteLibraryMutation, useGetLibraryQuery, useUpdateLibraryMutation, useScanLibraryMutation, useGetLibraryStatisticsQuery, useValidateMutation, useGetMapMarkersQuery, useReverseGeocodeQuery, useSearchMemoriesQuery, useCreateMemoryMutation, useMemoriesStatisticsQuery, useDeleteMemoryMutation, useGetMemoryQuery, useUpdateMemoryMutation, useRemoveMemoryAssetsMutation, useAddMemoryAssetsMutation, useDeleteNotificationsMutation, useGetNotificationsQuery, useUpdateNotificationsMutation, useDeleteNotificationMutation, useGetNotificationQuery, useUpdateNotificationMutation, useStartOAuthMutation, useFinishOAuthMutation, useLinkOAuthAccountMutation, useRedirectOAuthToMobileQuery, useUnlinkOAuthAccountMutation, useGetPartnersQuery, useCreatePartnerMutation, useRemovePartnerMutation, useCreatePartnerDeprecatedMutation, useUpdatePartnerMutation, useDeletePeopleMutation, useGetAllPeopleQuery, useCreatePersonMutation, useUpdatePeopleMutation, useDeletePersonMutation, useGetPersonQuery, useUpdatePersonMutation, useMergePersonMutation, useReassignFacesMutation, useGetPersonStatisticsQuery, useGetPersonThumbnailQuery, useGetPluginsQuery, useGetPluginQuery, useGetQueuesQuery, useGetQueueQuery, useUpdateQueueMutation, useEmptyQueueMutation, useGetQueueJobsQuery, useGetAssetsByCityQuery, useGetExploreDataQuery, useSearchLargeAssetsMutation, useSearchAssetsMutation, useSearchPersonQuery, useSearchPlacesQuery, useSearchRandomMutation, useSearchSmartMutation, useSearchAssetStatisticsMutation, useGetSearchSuggestionsQuery, useGetAboutInfoQuery, useGetApkLinksQuery, useGetServerConfigQuery, useGetServerFeaturesQuery, useDeleteServerLicenseMutation, useGetServerLicenseQuery, useSetServerLicenseMutation, useGetSupportedMediaTypesQuery, usePingServerQuery, useGetServerStatisticsQuery, useGetStorageQuery, useGetThemeQuery, useGetServerVersionQuery, useGetVersionCheckQuery, useGetVersionHistoryQuery, useDeleteAllSessionsMutation, useGetSessionsQuery, useCreateSessionMutation, useDeleteSessionMutation, useUpdateSessionMutation, useLockSessionMutation, useGetAllSharedLinksQuery, useCreateSharedLinkMutation, useGetMySharedLinkQuery, useRemoveSharedLinkMutation, useGetSharedLinkByIdQuery, useUpdateSharedLinkMutation, useRemoveSharedLinkAssetsMutation, useAddSharedLinkAssetsMutation, useDeleteStacksMutation, useSearchStacksQuery, useCreateStackMutation, useDeleteStackMutation, useGetStackQuery, useUpdateStackMutation, useRemoveAssetFromStackMutation, useDeleteSyncAckMutation, useGetSyncAckQuery, useSendSyncAckMutation, useGetDeltaSyncMutation, useGetFullSyncForUserMutation, useGetSyncStreamMutation, useGetConfigQuery, useUpdateConfigMutation, useGetConfigDefaultsQuery, useGetStorageTemplateOptionsQuery, useGetAdminOnboardingQuery, useUpdateAdminOnboardingMutation, useGetReverseGeocodingStateQuery, useGetVersionCheckStateQuery, useGetAllTagsQuery, useCreateTagMutation, useUpsertTagsMutation, useBulkTagAssetsMutation, useDeleteTagMutation, useGetTagByIdQuery, useUpdateTagMutation, useUntagAssetsMutation, useTagAssetsMutation, useGetTimeBucketQuery, useGetTimeBucketsQuery, useEmptyTrashMutation, useRestoreTrashMutation, useRestoreAssetsMutation, useSearchUsersQuery, useGetMyUserQuery, useUpdateMyUserMutation, useDeleteUserLicenseMutation, useGetUserLicenseQuery, useSetUserLicenseMutation, useDeleteUserOnboardingMutation, useGetUserOnboardingQuery, useSetUserOnboardingMutation, useGetMyPreferencesQuery, useUpdateMyPreferencesMutation, useDeleteProfileImageMutation, useCreateProfileImageMutation, useGetUserQuery, useGetProfileImageQuery, useGetAssetsByOriginalPathQuery, useGetUniqueOriginalPathsQuery, useGetWorkflowsQuery, useCreateWorkflowMutation, useDeleteWorkflowMutation, useGetWorkflowQuery, useUpdateWorkflowMutation, } = injectedRtkApi;
