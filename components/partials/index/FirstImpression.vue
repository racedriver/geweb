<template>
  <div class="mx-auto max-w-7xl h-5/6 sm:flex sm:flex-wrap sm:place-items-center" >
    <div class="py-16 px-12 w-full text-gray-50 sm:rounded md:w-7/12 lg:w-5/12 xl:w-2/5 lg:ml-16 bg--dark"
         style="cursor:url(https://cdn.custom-cursor.com/db/4250/32/arrow2460.png),url(https://cdn.custom-cursor.com/db/7248/32/starter-3d-effect-cursor-cursor.png), default!important">
      <h1>
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
          <span class="text-lg sm:text-xl md:text-2xl text-gray-50 font-bold group-hover:text-gradient group-hover:bg-gradient-secondary">
          {{ $t('FirstImpression.Button') }}
          </span>
        </nuxt-link>
      </div>
    </div>
    <div class="w-full xl:h-8"/>
  </div>
</template>

<script>
export default {
  name: 'FirstImpression',
}
</script>
