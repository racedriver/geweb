<template>
  <div class="max-w-7xl mx-auto h-5/6 sm:flex sm:flex-wrap sm:place-items-center">
    <div class="w-full md:w-7/12 lg:w-5/12 xl:w-2/5 lg:ml-16 text-white bg-primary">
      <h1>
        <div class="text-4xl">{{ $t('FirstImpression.PreTitle') }}</div>
        <div class="text-6xl text-green-500">
          {{ $t('FirstImpression.Ex')
          }}<span class="text-white">{{ $t('FirstImpression.Split') }}</span
          >{{ $t('FirstImpression.AppleEngineers') }}
        </div>
        <div class="text-2xl">{{ $t('FirstImpression.SubTitle') }}</div>
        <div class="text-lg font-normal mb-8">
          {{ $t('FirstImpression.SubSubTitle') }}
        </div>
      </h1>

      <div class="flex items-center">
        <nuxt-link
          class="w-full bg-green-500 text-white text-center py-8 text-lg"
          to="/contact-us"
        >
          {{ $t('FirstImpression.Button') }}
        </nuxt-link>
      </div>
    </div>
    <div class="xl:h-8 w-full" />
  </div>
</template>

<script>
export default {
  name: 'FirstImpression',
}
</script>
