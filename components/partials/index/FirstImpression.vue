<template>
  <section class="md:h-5/6 ">

    <div class="grid-cols-1 md:w-2/3 place-content-center  self-center items-center">

      <h1 class="place-content-center self-center items-center">
        <div class="text-4xl ">{{ $t('FirstImpression.PreTitle') }}</div>
        <div class="text-6xl bg-gradient-primary text-gradient pb-1 ">{{
            $t('FirstImpression.Ex')
          }}<span class="text-white opacity-75">{{ $t('FirstImpression.Split') }}</span
          >{{ $t('FirstImpression.AppleEngineers') }}
        </div>
        <div class="text-2xl ">{{ $t('FirstImpression.SubTitle') }}</div>
        <div class="mb-8 text-lg font-normal text-gray-300 ">
          {{ $t('FirstImpression.SubSubTitle') }}
        </div>
      </h1>

      <div class="flex items-center">
        <nuxt-link
          class="group py-8 w-full text-center text-white bg-green-500 rounded
            outline-white hover:no-underline hover:bg-black
           "
          to="/contact-us"
          style="cursor:url(https://cdn.custom-cursor.com/db/pointer/32/Kick_Me_Pointer.png) , pointer!important"
        >
          <span class="text-lg sm:text-xl md:text-2xl text-gray-50 font-bold group-hover:text-gradient-secondary">
          {{ $t('FirstImpression.Button') }}
          </span>
        </nuxt-link>
      </div>
    </div>

    <div class="grid-cols-1 aspect-h-16 aspect-w-10 mt-12 md:mt-0 md:-ml-10">
      <iframe class="rounded-lg" src="https://www.videoask.com/f641hztym"
              allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
              width="100%"
              height="100%"
      />
    </div>
  </section>

</template>

<script>
export default {
  name: 'FirstImpression',
}
</script>
