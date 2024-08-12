<template>
  <media-player .title="{TITLE}" .src="{SRC}">
    <ClientOnly>
      <media-provider></media-provider>
      <media-audio-layout></media-audio-layout>
    </ClientOnly>
  </media-player>
</template>
