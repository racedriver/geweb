<!--suppress HtmlRequiredAltAttribute -->
<template>
  <div :class="(entry.special ? 'bg-primary ' : ' ')">
    <div :class="'max-w-7xl xl:mx-auto px-4 sm:px-12 lg:px-16 py-16 ' +
              'grid md:grid-flow-col gap-8 xl:rounded ' +
              (entry.revert ? 'bg-transparent ' : 'bg-primary ')+
              (entry.special ? '' : 'md:gap-16 ')+
              'lg:gap-24 '">
      <div :class="'flex relative items-center md:cols-span-2 justify-around sm:justify-between '+
      (entry.revert ? ' flex-row-reverse ' : ' ' )">
        <div
          :class="'font-black text-9xl sm:text-10xl text-gradient ' +
           (entry.revert ?
           'bg-gradient-secondary flex ' :
           'bg-gradient-primary')
          ">
          {{ entry.id.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false,}) }}
        </div>
        <img
          :src="entry.image"
          :class="'w-auto max-h-32 ' +
         (entry.revert  ? 'md:right-2/3 ' : 'md:left-2/3 ')+
         (entry.special ? 'md:hidden lg:block lg:pl-16' : 'md:absolute md:-bottom-24 ')"
        />
      </div>
      <div :class="'self-center md:cols-span-1 w-80 lg:w-96 xl:w-7/12 ' +
     (entry.revert  ? 'text-gray-100 col-start-1 lg:justify-self-end ' : 'text-primary ') +
     (entry.special ? ' ' : ' ')">
        <h3 class="text-4xl ">{{ entry.title }}</h3>
        <div :class="'text-lg  '+
             (entry.special ? ' ' : 'xl:w-4/5 ')">
          {{ entry.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurProcessEntity',
  props: {
    entry: {
      id: Number,
      image: String,
      title: String,
      text: String,
      special: Boolean,
      revert: Boolean,
    },
  },
}
</script>
