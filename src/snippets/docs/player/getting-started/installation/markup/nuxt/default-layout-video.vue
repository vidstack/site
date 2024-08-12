<template>
  <media-player .title="{TITLE}" .src="{SRC}">
    <ClientOnly>
      <media-provider></media-provider>
      <media-video-layout .thumbnails="{THUMBNAILS}"></media-video-layout>
    </ClientOnly>
  </media-player>
</template>
