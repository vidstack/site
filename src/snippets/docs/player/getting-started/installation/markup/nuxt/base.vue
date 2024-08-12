<template>
  <media-player .title="{TITLE}" .src="{SRC}">
    <ClientOnly>
      <media-provider></media-provider>
    </ClientOnly>
  </media-player>
</template>
