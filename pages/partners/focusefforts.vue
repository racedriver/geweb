<template>
  <div>
    <HeadText title="Partners / Focusefforts" />
    <div class="max-w-6xl mx-auto">
      <div
        class="grid grid-flow-col grid-rows-2 md:grid-rows-1 items-center justify-center my-8"
      >
        <img
          class="h-40 lg:h-64 grid-col-1 md:ml-6 mx-auto"
          src="/images/logo%20v4.1%20with%20white%20circle%20arrows%20only%2072ppi.png"
        />
        <svg
          class="text-red-600 h-20 lg:h-32 md:ml-12 lg:ml-16 grid-col-1 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <img
          class="h-40 col-span-2 col-start-1 row-start-2 md:col-span-1 md:row-start-auto lg:h-64"
          src="/images/partners/focus-efforts.png"
        />
      </div>
      <client-only>
        <iframe
          class="w-full bg-green-300 rounded-t-md"
          scrolling="no"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeEGLKAULrzQqZhpz7mK_nN9o7WDVSmN-AxP5YxpZtdHgdmWg/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          height="3100px"
        >
          Loading…
        </iframe>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'focusefforts',
}
</script>
