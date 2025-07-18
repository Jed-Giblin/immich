import {
  mdiAccountGroup,
  mdiAccountGroupOutline,
  mdiAndroid,
  mdiAppleIos,
  mdiArchiveOutline,
  mdiBash,
  mdiBookSearchOutline,
  mdiBookmark,
  mdiCakeVariant,
  mdiCameraBurst,
  mdiChartBoxMultipleOutline,
  mdiCheckAll,
  mdiCheckboxMarked,
  mdiCloudUploadOutline,
  mdiCollage,
  mdiContentDuplicate,
  mdiCrop,
  mdiDevices,
  mdiEmailOutline,
  mdiExpansionCard,
  mdiEyeOutline,
  mdiEyeRefreshOutline,
  mdiFaceMan,
  mdiFaceManOutline,
  mdiFile,
  mdiFileSearch,
  mdiFlash,
  mdiFolder,
  mdiFolderMultiple,
  mdiForum,
  mdiHandshakeOutline,
  mdiHeart,
  mdiHistory,
  mdiImage,
  mdiImageAlbum,
  mdiImageEdit,
  mdiImageMultipleOutline,
  mdiImageSearch,
  mdiKeyboardSettingsOutline,
  mdiLicense,
  mdiLockOutline,
  mdiMagnify,
  mdiMagnifyScan,
  mdiMap,
  mdiMaterialDesign,
  mdiMatrix,
  mdiMerge,
  mdiMonitor,
  mdiMotionPlayOutline,
  mdiPalette,
  mdiPanVertical,
  mdiPartyPopper,
  mdiPencil,
  mdiRaw,
  mdiRocketLaunch,
  mdiRotate360,
  mdiScaleBalance,
  mdiSecurity,
  mdiServer,
  mdiShare,
  mdiShareAll,
  mdiShareCircle,
  mdiStar,
  mdiStarOutline,
  mdiTableKey,
  mdiTag,
  mdiTagMultiple,
  mdiText,
  mdiThemeLightDark,
  mdiTrashCanOutline,
  mdiVectorCombine,
  mdiFolderSync,
  mdiFaceRecognition,
  mdiVideo,
  mdiWeb,
  mdiDatabaseOutline,
  mdiLinkEdit,
  mdiTagFaces,
  mdiMovieOpenPlayOutline,
  mdiCast,
} from '@mdi/js';
import Layout from '@theme/Layout';
import React from 'react';
import { Item, Timeline } from '../components/timeline';

const releases = {
  'v1.135.0': new Date(2025, 5, 18),
  'v1.133.0': new Date(2025, 4, 21),
  'v1.130.0': new Date(2025, 2, 25),
  'v1.127.0': new Date(2025, 1, 26),
  'v1.122.0': new Date(2024, 11, 5),
  'v1.120.0': new Date(2024, 10, 6),
  'v1.114.0': new Date(2024, 8, 6),
  'v1.113.0': new Date(2024, 7, 30),
  'v1.112.0': new Date(2024, 7, 14),
  'v1.111.0': new Date(2024, 6, 26),
  'v1.110.0': new Date(2024, 5, 11),
  'v1.109.0': new Date(2024, 6, 18),
  'v1.106.1': new Date(2024, 5, 11),
  'v1.104.0': new Date(2024, 4, 13),
  'v1.103.0': new Date(2024, 3, 29),
  'v1.102.0': new Date(2024, 3, 15),
  'v1.99.0': new Date(2024, 2, 20),
  'v1.98.0': new Date(2024, 2, 7),
  'v1.95.0': new Date(2024, 1, 20),
  'v1.94.0': new Date(2024, 0, 31),
  'v1.93.0': new Date(2024, 0, 19),
  'v1.91.0': new Date(2023, 11, 15),
  'v1.90.0': new Date(2023, 11, 7),
  'v1.88.0': new Date(2023, 10, 20),
  'v1.84.0': new Date(2023, 10, 1),
  'v1.83.0': new Date(2023, 9, 28),
  'v1.82.0': new Date(2023, 9, 17),
  'v1.79.0': new Date(2023, 8, 21),
  'v1.76.0': new Date(2023, 7, 29),
  'v1.75.0': new Date(2023, 7, 26),
  'v1.72.0': new Date(2023, 7, 6),
  'v1.71.0': new Date(2023, 6, 29),
  'v1.69.0': new Date(2023, 6, 23),
  'v1.68.0': new Date(2023, 6, 20),
  'v1.67.0': new Date(2023, 6, 14),
  'v1.66.0': new Date(2023, 6, 4),
  'v1.65.0': new Date(2023, 5, 30),
  'v1.63.0': new Date(2023, 5, 24),
  'v1.61.0': new Date(2023, 5, 16),
  'v1.58.0': new Date(2023, 4, 28),
  'v1.57.0': new Date(2023, 4, 23),
  'v1.56.0': new Date(2023, 4, 18),
  'v1.55.0': new Date(2023, 4, 9),
  'v1.54.0': new Date(2023, 3, 18),
  'v1.52.0': new Date(2023, 2, 29),
  'v1.51.0': new Date(2023, 2, 20),
  'v1.48.0': new Date(2023, 1, 21),
  'v1.47.0': new Date(2023, 1, 13),
  'v1.46.0': new Date(2023, 1, 9),
  'v1.43.0': new Date(2023, 1, 3),
  'v1.41.0': new Date(2023, 0, 10),
  'v1.39.0': new Date(2022, 11, 19),
  'v1.36.0': new Date(2022, 10, 20),
  'v1.33.1': new Date(2022, 9, 26),
  'v1.32.0': new Date(2022, 9, 14),
  'v1.27.0': new Date(2022, 8, 6),
  'v1.24.0': new Date(2022, 7, 19),
  'v1.10.0': new Date(2022, 4, 29),
  'v1.7.0': new Date(2022, 3, 24),
  'v1.3.0': new Date(2022, 2, 22),
  'v1.2.0': new Date(2022, 1, 8),
} as const;

const weirdTags = {
  'v1.41.0': 'v1.41.1_64-dev',
  'v1.39.0': 'v1.39.0_61-dev',
  'v1.36.0': 'v1.36.0_55-dev',
  'v1.33.1': 'v1.33.0_52-dev',
  'v1.32.0': 'v1.32.0_50-dev',
  'v1.27.0': 'v1.27.0_37-dev',
  'v1.24.0': 'v1.24.0_34-dev',
  'v1.10.0': 'v1.10.0_15-dev',
  'v1.7.0': 'v1.7.0_11-dev ',
  'v1.3.0': 'v1.3.0-dev ',
  'v1.2.0': 'v0.2-dev ',
};

const title = 'Roadmap';
const description = 'A list of future plans and goals, as well as past achievements and milestones.';

const withLanguage = (date: Date) => (language: string) => date.toLocaleDateString(language);

type Base = { icon: string; iconColor?: React.CSSProperties['color']; title: string; description: string };
const withRelease = ({
  icon,
  iconColor,
  title,
  description,
  release: version,
}: Base & { release: keyof typeof releases }) => {
  return {
    icon,
    iconColor: iconColor ?? 'gray',
    title,
    description,
    link: {
      url: `https://github.com/immich-app/immich/releases/tag/${weirdTags[version] ?? version}`,
      text: version,
    },
    getDateLabel: withLanguage(releases[version]),
  };
};

const roadmap: Item[] = [
  {
    done: false,
    icon: mdiFlash,
    iconColor: 'gold',
    title: 'Workflows',
    description: 'Automate tasks with workflows',
    getDateLabel: () => 'Planned for 2025',
  },
  {
    done: false,
    icon: mdiImageEdit,
    iconColor: 'rebeccapurple',
    title: 'Basic editor',
    description: 'Basic photo editing capabilities',
    getDateLabel: () => 'Planned for 2025',
  },
  {
    done: false,
    icon: mdiRocketLaunch,
    iconColor: 'indianred',
    title: 'Stable release',
    description: 'Immich goes stable',
    getDateLabel: () => 'Planned for 2025',
  },
  {
    done: false,
    icon: mdiCloudUploadOutline,
    iconColor: 'cornflowerblue',
    title: 'Better background backups',
    description: 'Rework background backups to be more reliable',
    getDateLabel: () => 'Planned for 2025',
  },
  {
    done: false,
    icon: mdiCameraBurst,
    iconColor: 'rebeccapurple',
    title: 'Auto stacking',
    description: 'Auto stack burst photos',
    getDateLabel: () => 'Planned for 2025',
  },
];

const milestones: Item[] = [
  {
    icon: mdiStar,
    iconColor: 'gold',
    title: '70,000 Stars',
    description: 'Reached 70K Stars on GitHub!',
    getDateLabel: withLanguage(new Date(2025, 6, 9)),
  },
  withRelease({
    icon: mdiTableKey,
    iconColor: 'gray',
    title: 'Fine grained access controls',
    description: 'Granular access controls for api keys',
    release: 'v1.135.0',
  }),
  withRelease({
    icon: mdiCast,
    iconColor: 'aqua',
    title: 'Google Cast (web and mobile)',
    description: 'Cast assets to Google Cast/Chromecast compatible devices',
    release: 'v1.135.0',
  }),
  withRelease({
    icon: mdiLockOutline,
    iconColor: 'sandybrown',
    title: 'Private/locked photos',
    description: 'Private assets with extra protections',
    release: 'v1.133.0',
  }),
  withRelease({
    icon: mdiFolderMultiple,
    iconColor: 'brown',
    title: 'Folders view in the mobile app',
    description: 'Browse your photos and videos in their folder structure inside the mobile app',
    release: 'v1.130.0',
  }),
  {
    icon: mdiStar,
    iconColor: 'gold',
    title: '60,000 Stars',
    description: 'Reached 60K Stars on GitHub!',
    getDateLabel: withLanguage(new Date(2025, 2, 4)),
  },
  withRelease({
    icon: mdiTagFaces,
    iconColor: 'teal',
    title: 'Manual face tagging',
    description:
      'Manually tag or remove faces in photos and videos, even when automatic detection misses or misidentifies them.',
    release: 'v1.127.0',
  }),
  withRelease({
    icon: mdiLinkEdit,
    iconColor: 'crimson',
    title: 'Automatic URL switching',
    description: 'The mobile app now supports automatic switching between different server URLs',
    release: 'v1.122.0',
  }),
  withRelease({
    icon: mdiMovieOpenPlayOutline,
    iconColor: 'darksalmon',
    title: 'Native video player',
    description: 'HDR videos are now fully supported using the Immich native video player',
    release: 'v1.122.0',
  }),
  withRelease({
    icon: mdiDatabaseOutline,
    iconColor: 'brown',
    title: 'Automatic database dumps',
    description: 'Database dumps are now integrated into the Immich server',
    release: 'v1.120.0',
  }),
  {
    icon: mdiStar,
    iconColor: 'gold',
    title: '50,000 Stars',
    description: 'Reached 50K Stars on GitHub!',
    getDateLabel: withLanguage(new Date(2024, 10, 1)),
  },
  withRelease({
    icon: mdiFaceRecognition,
    title: 'Metadata Face Import',
    description: 'Read face metadata in Digikam format during import',
    release: 'v1.114.0',
  }),
  withRelease({
    icon: mdiTagMultiple,
    iconColor: 'orange',
    title: 'Tags',
    description: 'Tag your photos and videos',
    release: 'v1.113.0',
  }),
  withRelease({
    icon: mdiFolderSync,
    iconColor: 'green',
    title: 'Album sync (mobile)',
    description: 'Sync or mirror an album from your phone to the Immich server',
    release: 'v1.113.0',
  }),
  withRelease({
    icon: mdiFolderMultiple,
    iconColor: 'brown',
    title: 'Folders view',
    description: 'Browse your photos and videos in their folder structure',
    release: 'v1.113.0',
  }),
  withRelease({
    icon: mdiPalette,
    title: 'Theming (mobile)',
    description: 'Pick a primary color for the mobile app',
    release: 'v1.112.0',
  }),
  withRelease({
    icon: mdiStarOutline,
    iconColor: 'gold',
    title: 'Star rating',
    description: 'Rate your photos and videos',
    release: 'v1.112.0',
  }),
  withRelease({
    icon: mdiCrop,
    iconColor: 'royalblue',
    title: 'Editor (mobile)',
    description: 'Crop and rotate on mobile',
    release: 'v1.111.0',
  }),
  withRelease({
    icon: mdiMap,
    iconColor: 'green',
    title: 'Deploy tiles.immich.cloud',
    description: 'Dedicated tile server for Immich',
    release: 'v1.111.0',
  }),
  {
    icon: mdiStar,
    iconColor: 'gold',
    title: '40,000 Stars',
    description: 'Reached 40K Stars on GitHub!',
    getDateLabel: withLanguage(new Date(2024, 6, 21)),
  },
  withRelease({
    icon: mdiShare,
    title: 'Deploy my.immich.app',
    description: 'Url router for immich links',
    release: 'v1.109.0',
  }),
  withRelease({
    icon: mdiLicense,
    iconColor: 'gold',
    title: 'Supporter Badge',
    description: 'The option to buy Immich to support its development!',
    release: 'v1.109.0',
  }),
  withRelease({
    icon: mdiHistory,
    title: 'Versioned documentation',
    description: 'View documentation as it was at the time of past releases',
    release: 'v1.106.1',
  }),
  withRelease({
    icon: mdiWeb,
    iconColor: 'royalblue',
    title: 'Web translations',
    description: 'Translate the web application to multiple languages',
    release: 'v1.106.1',
  }),
  withRelease({
    icon: mdiContentDuplicate,
    title: 'Similar image detection',
    description: "Detect duplicate assets that aren't exactly identical",
    release: 'v1.106.1',
  }),
  withRelease({
    icon: mdiVectorCombine,
    title: 'Container consolidation',
    description:
      'The microservices container can be run as a worker within the server image, allowing us to remove it from the default stack.',
    release: 'v1.106.1',
  }),
  withRelease({
    icon: mdiPencil,
    iconColor: 'saddlebrown',
    title: 'Read-write external libraries',
    description: 'Edit, update, and delete files in external libraries',
    release: 'v1.104.0',
  }),
  withRelease({
    icon: mdiEmailOutline,
    iconColor: 'crimson',
    title: 'Email notifications',
    description: 'Send emails for important events',
    release: 'v1.104.0',
  }),
  {
    icon: mdiHandshakeOutline,
    iconColor: 'magenta',
    title: 'Immich joins FUTO!',
    description: 'Joined Futo and Immich core team goes full-time',
    getDateLabel: withLanguage(new Date(2024, 4, 1)),
  },
  withRelease({
    icon: mdiEyeOutline,
    iconColor: 'darkslategray',
    title: 'Read-only albums',
    description: 'Share albums with other users as read-only',
    release: 'v1.103.0',
  }),
  withRelease({
    icon: mdiBookmark,
    iconColor: 'orangered',
    title: 'Permanent URLs (Web)',
    description: 'Assets on the web now have permanent URLs',
    release: 'v1.103.0',
  }),
  withRelease({
    icon: mdiStar,
    iconColor: 'gold',
    title: '30,000 Stars',
    description: 'Reached 30K Stars on GitHub!',
    release: 'v1.102.0',
  }),
  withRelease({
    icon: mdiChartBoxMultipleOutline,
    iconColor: 'mediumvioletred',
    title: 'OpenTelemetry metrics',
    description: 'OpenTelemetry metrics for local evaluation and advanced debugging',
    release: 'v1.99.0',
  }),
  withRelease({
    icon: 'immich',
    title: 'New logo',
    description: 'Immich got its new logo',
    release: 'v1.98.0',
  }),
  withRelease({
    icon: mdiMagnifyScan,
    title: 'Search enhancement with advanced filters',
    description: 'Advanced search with filters by date, location and more',
    release: 'v1.95.0',
  }),
  withRelease({
    icon: mdiScaleBalance,
    iconColor: 'gold',
    title: 'AGPL License',
    description: 'Immich switches to AGPLv3 license',
    release: 'v1.95.0',
  }),
  withRelease({
    icon: mdiEyeRefreshOutline,
    title: 'Library watching',
    description: 'Automatically import files in external libraries when the operating system detects changes.',
    release: 'v1.94.0',
  }),
  withRelease({
    icon: mdiExpansionCard,
    iconColor: 'green',
    title: 'GPU acceleration for machine-learning',
    description: 'Hardware acceleration support for Nvidia and Intel devices through CUDA and OpenVINO.',
    release: 'v1.94.0',
  }),
  withRelease({
    icon: mdiAccountGroupOutline,
    iconColor: 'gray',
    title: '250 unique contributors',
    description: '250 amazing people contributed to Immich',
    release: 'v1.93.0',
  }),
  withRelease({
    icon: mdiMatrix,
    title: 'Search improvement with pgvecto.rs',
    description: 'Moved the search from typesense to pgvecto.rs',
    release: 'v1.91.0',
  }),
  withRelease({
    icon: mdiPencil,
    iconColor: 'saddlebrown',
    title: 'Edit metadata',
    description: "Edit a photo or video's date, time, hours, timezone, and GPS information",
    release: 'v1.90.0',
  }),
  withRelease({
    icon: mdiVectorCombine,
    title: 'Container consolidation',
    description:
      'The serving of the web app is merged into the server image, allowing us to remove two containers from the stack.',
    release: 'v1.88.0',
  }),
  withRelease({
    icon: mdiBash,
    iconColor: 'gray',
    title: 'CLI v2',
    description: 'Version 2 of the Immich CLI is released, replacing the legacy v1 CLI.',
    release: 'v1.88.0',
  }),
  withRelease({
    icon: mdiForum,
    iconColor: 'dodgerblue',
    title: 'Activity',
    description: 'Comment a photo or a video in a shared album',
    release: 'v1.84.0',
  }),
  withRelease({
    icon: mdiStar,
    iconColor: 'gold',
    title: '20,000 Stars',
    description: 'Reached 20K Stars on GitHub!',
    release: 'v1.83.0',
  }),
  withRelease({
    icon: mdiCameraBurst,
    iconColor: 'rebeccapurple',
    title: 'Stack assets',
    description: 'Manual asset stacking for grouping and hiding related assets in the main timeline.',
    release: 'v1.83.0',
  }),
  withRelease({
    icon: mdiPalette,
    iconColor: 'magenta',
    title: 'Custom theme',
    description: 'Apply your custom CSS for modifying fonts, colors, and styles in the web application.',
    release: 'v1.83.0',
  }),
  withRelease({
    icon: mdiTrashCanOutline,
    iconColor: 'brown',
    title: 'Trash feature',
    description: 'Trash, restore from trash, and automatically empty the recycle bin after 30 days.',
    release: 'v1.82.0',
  }),
  withRelease({
    icon: mdiBookSearchOutline,
    title: 'External libraries',
    description: 'Automatically import media into Immich based on imports paths and ignore patterns.',
    release: 'v1.79.0',
  }),
  withRelease({
    icon: mdiMap,
    iconColor: 'darksalmon',
    title: 'Map view (mobile)',
    description: 'Heat map implementation in the mobile app.',
    release: 'v1.76.0',
  }),
  withRelease({
    icon: mdiFile,
    iconColor: 'lightblue',
    title: 'Configuration file',
    description: 'Auto-configure an Immich installation via a configuration file.',
    release: 'v1.75.0',
  }),
  withRelease({
    icon: mdiMonitor,
    iconColor: 'darkcyan',
    title: 'Slideshow mode (web)',
    description: 'Start a full-screen slideshow from an Album on the web.',
    release: 'v1.75.0',
  }),
  withRelease({
    icon: mdiServer,
    iconColor: 'lightskyblue',
    title: 'Hardware transcoding',
    description: 'Support hardware acceleration (QuickSync, VAAPI, and Nvidia) for video transcoding.',
    release: 'v1.72.0',
  }),
  withRelease({
    icon: mdiImageAlbum,
    iconColor: 'olivedrab',
    title: 'View albums via time buckets',
    description: 'Upgrade albums to use time buckets, an optimized virtual viewport.',
    release: 'v1.72.0',
  }),
  withRelease({
    icon: mdiImageAlbum,
    iconColor: 'olivedrab',
    title: 'Album description',
    description: 'Save an album description.',
    release: 'v1.72.0',
  }),
  withRelease({
    icon: mdiRotate360,
    title: '360° Photos (web)',
    description: 'View 360° Photos on the web.',
    release: 'v1.71.0',
  }),
  withRelease({
    icon: mdiMotionPlayOutline,
    title: 'Android motion photos',
    description: 'Add support for Android Motion Photos.',
    release: 'v1.69.0',
  }),
  withRelease({
    icon: mdiFaceManOutline,
    iconColor: 'mistyrose',
    title: 'Show/hide faces',
    description: 'Add the options to show or hide faces.',
    release: 'v1.68.0',
  }),
  withRelease({
    icon: mdiMerge,
    iconColor: 'forestgreen',
    title: 'Merge faces',
    description: 'Add the ability to merge multiple faces together.',
    release: 'v1.67.0',
  }),
  withRelease({
    icon: mdiImage,
    iconColor: 'rebeccapurple',
    title: 'Feature photo',
    description: 'Add the option to change the feature photo for a person.',
    release: 'v1.66.0',
  }),
  withRelease({
    icon: mdiKeyboardSettingsOutline,
    iconColor: 'darkslategray',
    title: 'Multi-select via SHIFT',
    description: 'Add the option to multi-select while holding SHIFT.',
    release: 'v1.66.0',
  }),
  withRelease({
    icon: mdiImageMultipleOutline,
    iconColor: 'rebeccapurple',
    title: 'Memories (mobile)',
    description: 'View "On this day..." memories in the mobile app.',
    release: 'v1.65.0',
  }),
  withRelease({
    icon: mdiFaceMan,
    iconColor: 'mistyrose',
    title: 'Facial recognition (mobile)',
    description: 'View detected faces in the mobile app.',
    release: 'v1.63.0',
  }),
  withRelease({
    icon: mdiImageMultipleOutline,
    iconColor: 'rebeccapurple',
    title: 'Memories (web)',
    description: 'View pictures taken in past years on this day on the web.',
    release: 'v1.61.0',
  }),
  withRelease({
    icon: mdiCollage,
    iconColor: 'deeppink',
    title: 'Justified layout (web)',
    description: 'Implement justified layout (collage) on the web.',
    release: 'v1.61.0',
  }),
  withRelease({
    icon: mdiRaw,
    title: 'RAW file formats',
    description: 'Support for RAW file formats.',
    release: 'v1.61.0',
  }),
  withRelease({
    icon: mdiShareAll,
    iconColor: 'darkturquoise',
    title: 'Partner sharing (mobile)',
    description: 'View shared partner photos in the mobile app.',
    release: 'v1.58.0',
  }),
  withRelease({
    icon: mdiFile,
    iconColor: 'lightblue',
    title: 'XMP sidecar',
    description: 'Attach XMP sidecar files to assets.',
    release: 'v1.58.0',
  }),
  withRelease({
    icon: mdiFolder,
    iconColor: 'brown',
    title: 'Custom storage label',
    description: 'Replace the user UUID in the storage template with a custom label.',
    release: 'v1.57.0',
  }),
  withRelease({
    icon: mdiShareCircle,
    title: 'Partner sharing',
    description: 'Share your entire collection with another user.',
    release: 'v1.56.0',
  }),
  withRelease({
    icon: mdiFaceMan,
    iconColor: 'mistyrose',
    title: 'Facial recognition',
    description: 'Detect faces in pictures and cluster them together as people, which can be named.',
    release: 'v1.56.0',
  }),
  withRelease({
    icon: mdiMap,
    iconColor: 'darksalmon',
    title: 'Map view (web)',
    description: 'View a global map, with clusters of photos based on corresponding GPS data.',
    release: 'v1.55.0',
  }),
  withRelease({
    icon: mdiDevices,
    iconColor: 'slategray',
    title: 'Manage auth devices',
    description: 'Manage logged-in devices and revoke access from User Settings.',
    release: 'v1.55.0',
  }),
  withRelease({
    icon: mdiStar,
    iconColor: 'gold',
    title: '10,000 Stars',
    description: 'Reached 10K stars on GitHub!',
    release: 'v1.54.0',
  }),
  withRelease({
    icon: mdiText,
    title: 'Asset descriptions',
    description: 'Save an asset description',
    release: 'v1.54.0',
  }),
  withRelease({
    icon: mdiArchiveOutline,
    title: 'Archiving',
    description: 'Remove assets from the main timeline by archiving them.',
    release: 'v1.54.0',
  }),
  withRelease({
    icon: mdiDevices,
    iconColor: 'slategray',
    title: 'Responsive web app',
    description: 'Optimize the web app for small screen.',
    release: 'v1.54.0',
  }),
  withRelease({
    icon: mdiFileSearch,
    iconColor: 'brown',
    title: 'Search by metadata',
    description: 'Search images by filename, description, tagged people, make, model, and other metadata.',
    release: 'v1.52.0',
  }),
  withRelease({
    icon: mdiImageSearch,
    iconColor: 'rebeccapurple',
    title: 'CLIP search',
    description: 'Search images with free-form text like "Sunset at the beach".',
    release: 'v1.51.0',
  }),
  withRelease({
    icon: mdiMagnify,
    iconColor: 'lightblue',
    title: 'Explore page',
    description: 'View tagged places, object, and people.',
    release: 'v1.51.0',
  }),
  withRelease({
    icon: mdiAppleIos,
    title: 'iOS background uploads',
    description: 'Automatically backup pictures in the background on iOS.',
    release: 'v1.48.0',
  }),
  withRelease({
    icon: mdiMotionPlayOutline,
    title: 'Auto-Link live photos',
    description: 'Automatically link live photos, even when uploaded as separate files.',
    release: 'v1.48.0',
  }),
  withRelease({
    icon: mdiMaterialDesign,
    iconColor: 'blue',
    title: 'Material design 3 (mobile)',
    description: 'Upgrade the mobile app to Material Design 3.',
    release: 'v1.47.0',
  }),
  withRelease({
    icon: mdiHeart,
    iconColor: 'red',
    title: 'Favorites (mobile)',
    description: 'Show favorites on the mobile app.',
    release: 'v1.46.0',
  }),
  withRelease({
    icon: mdiCakeVariant,
    iconColor: 'deeppink',
    title: 'Immich turns 1',
    description: 'Immich is officially one year old.',
    release: 'v1.43.0',
  }),
  withRelease({
    icon: mdiHeart,
    iconColor: 'red',
    title: 'Favorites page (web)',
    description: 'Favorite and view favorites on the web.',
    release: 'v1.43.0',
  }),
  withRelease({
    icon: mdiShareCircle,
    title: 'Public share links',
    description: 'Share photos and albums publicly via a shared link.',
    release: 'v1.41.0',
  }),
  withRelease({
    icon: mdiFolder,
    iconColor: 'lightblue',
    title: 'User-defined storage structure',
    description: 'Support custom storage structures.',
    release: 'v1.39.0',
  }),
  withRelease({
    icon: mdiMotionPlayOutline,
    title: 'iOS live photos',
    description: 'Backup and display iOS Live Photos.',
    release: 'v1.36.0',
  }),
  withRelease({
    icon: mdiSecurity,
    iconColor: 'green',
    title: 'OAuth integration',
    description: 'Support OAuth2 and OIDC capable identity providers.',
    release: 'v1.36.0',
  }),
  withRelease({
    icon: mdiWeb,
    iconColor: 'royalblue',
    title: 'Documentation site',
    description: 'Release an official documentation website.',
    release: 'v1.33.1',
  }),
  withRelease({
    icon: mdiThemeLightDark,
    iconColor: 'slategray',
    title: 'Dark mode (web)',
    description: 'Dark mode on the web.',
    release: 'v1.32.0',
  }),
  withRelease({
    icon: mdiPanVertical,
    title: 'Virtual scrollbar (web)',
    description: 'View the main timeline with a virtual scrollbar, allowing to jump to any point in time, instantly.',
    release: 'v1.27.0',
  }),
  withRelease({
    icon: mdiCheckAll,
    iconColor: 'green',
    title: 'Checksum duplication check',
    description: 'Enforce per user sha1 checksum uniqueness.',
    release: 'v1.27.0',
  }),
  withRelease({
    icon: mdiAndroid,
    iconColor: 'greenyellow',
    title: 'Android background backup',
    description: 'Automatic backup in the background on Android.',
    release: 'v1.24.0',
  }),
  withRelease({
    icon: mdiAccountGroup,
    iconColor: 'gray',
    title: 'Admin portal',
    description: 'Manage users and admin settings from the web.',
    release: 'v1.10.0',
  }),
  withRelease({
    icon: mdiShareCircle,
    title: 'Album sharing',
    description: 'Share albums with other users.',
    release: 'v1.7.0',
  }),
  withRelease({
    icon: mdiTag,
    iconColor: 'coral',
    title: 'Image tagging',
    description: 'Tag images with custom values.',
    release: 'v1.7.0',
  }),
  withRelease({
    icon: mdiImage,
    iconColor: 'rebeccapurple',
    title: 'View exif',
    description: 'View metadata about assets.',
    release: 'v1.3.0',
  }),
  withRelease({
    icon: mdiCheckboxMarked,
    iconColor: 'green',
    title: 'Multi select',
    description: 'Select and execute actions on multiple assets at the same time.',
    release: 'v1.2.0',
  }),
  withRelease({
    icon: mdiVideo,
    iconColor: 'slategray',
    title: 'Video player',
    description: 'Play videos in the web and on mobile.',
    release: 'v1.2.0',
  }),
  {
    icon: mdiPartyPopper,
    iconColor: 'deeppink',
    title: 'First commit',
    description: 'First commit on GitHub, Immich is born.',
    getDateLabel: withLanguage(new Date(2022, 1, 3)),
  },
];

export default function MilestonePage(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <section className="my-8">
        <h1 className="md:text-6xl text-center mb-10 text-immich-primary dark:text-immich-dark-primary px-2">
          {title}
        </h1>
        <p className="text-center text-xl px-2">{description}</p>
        <div className="flex justify-around mt-8 w-full max-w-full">
          <Timeline items={[...roadmap, ...milestones]} />
        </div>
      </section>
    </Layout>
  );
}
