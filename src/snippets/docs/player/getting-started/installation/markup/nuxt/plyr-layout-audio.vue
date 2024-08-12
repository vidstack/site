<template>
  <media-player .title="{TITLE}" .src="{SRC}">
    <ClientOnly>
      <media-provider></media-provider>
      <media-plyr-layout></media-plyr-layout>
    </ClientOnly>
  </media-player>
</template>
