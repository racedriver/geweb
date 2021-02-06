<template>
  <div class="h-5/6">
    <div class="w-full md:w-1/3 text-white dark-box">
      <h1>
        <div class="text-4xl">{{ $t('FirstImpression.PreTitle') }}</div>
        <div class="text-6xl text-green-500">
          {{ $t('FirstImpression.Ex') }}<span class="text-white">{{ $t('FirstImpression.Split') }}</span>{{ $t('FirstImpression.AppleEngineers') }}
        </div>
        <div class="text-2xl">{{ $t('FirstImpression.SubTitle') }}</div>
        <div class="text-lg font-normal mb-8">
          {{ $t('FirstImpression.SubSubTitle') }}
        </div>
      </h1>

      <div class="flex items-center">
        <a
          class="w-full bg-green-500 text-white text-center py-8 text-lg"
          href="/contact-us"
        >
            {{ $t('FirstImpression.Button') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstImpression',
}
</script>
