<template>
  <div class="h-5/6">
    <div class="w-full md:w-1/3 text-white dark-box">
      <h1 class="size-h1">
        <div class="text-4xl">{{ $t('FirstImpression.PreTitle') }}</div>
        <div class="text-6xl" style="color: #30c47e">
          {{ $t('FirstImpression.Ex') }}<span class="text-white">{{ $t('FirstImpression.Split') }}</span>{{ $t('FirstImpression.AppleEngineers') }}
        </div>
        <div class="text-2xl">{{ $t('FirstImpression.SubTitle') }}</div>
        <div class="text-lg font-normal mb-8">
          {{ $t('FirstImpression.SubSubTitle') }}
        </div>
      </h1>

      <div class="flex items-center xs-is-wrapping">
        <a
          class="button-primary animated w-inline-block"
          href="/contact-us"
          style="padding: 30px 0px"
        >
          <div class="button-primary-text text-sm">
            {{ $t('FirstImpression.Button') }}
          </div>
          <div
            class="button-primary-text for-hover"
          >
            let&#x27;s go <span class="fa margin-left"></span>
          </div>
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

<style scoped></style>
