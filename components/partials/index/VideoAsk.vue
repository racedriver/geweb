<template>
  <div class="aspect-h-16 aspect-w-10">
    <iframe class="rounded-lg" :src="'https://www.videoask.com/'+id"
            allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
            width="100%"
            height="100%"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: String
  }
}
</script>
