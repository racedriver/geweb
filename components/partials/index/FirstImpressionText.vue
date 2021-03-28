<template>
  <div class="place-content-center self-center items-center">
    <h1>
      <div class="text-4xl ">{{ $t('FirstImpression.PreTitle') }}</div>
      <div class="text-6xl bg-gradient-primary text-gradient pb-1 ">
        {{$t('FirstImpression.Ex') }}<span class="text-white opacity-75">{{ $t('FirstImpression.Split') }}</span>{{ $t('FirstImpression.AppleEngineers') }}
      </div>
      <div class="text-2xl ">{{ $t('FirstImpression.SubTitle') }}</div>
    </h1>

    <div class="flex items-center mt-8">
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
</template>
