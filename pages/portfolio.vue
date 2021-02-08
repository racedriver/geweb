<template>
  <div class="text-white">
    <HeadText title="Portfolio"/>
    <div class="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap w-full my-16">
      <div class="grid lg:grid-cols-3 gap-8">
        <div
          class="bg-transparent rounded backdrop-blur text-center"
          v-for="(entry, i) in this.entries"
          :key="i"
        >
          <nuxt-link
            class="b c-grid-item__text is-dark bg-black hidden hover:flex"
            :to="entry.link"
          >
            <div class="text-2xl font-semibold">{{ entry.title }}</div>
            <div class="text-gray-300 text-sm uppercase">
              {{ entry.description1 }}
              <span class="text-sm font-extralight">×</span>
              {{ entry.description2 }}
            </div>
          </nuxt-link>
<!--          <img-->
<!--            sizes="(max-width: 479px) 90vw, (max-width: 752px) 93vw, 700px"-->
<!--            :src="entry.image"-->
<!--            :alt="entry.alt"-->
<!--          />-->
          <div
            class="
            h-full
            w-full
            bg-black
            hover:block
            hover:filter-grayscale hover:border hover:border-black hover:border-opacity-75 hover:shadow-inner hover:bg-black hover:opacity-75"
            :style="'mix-blend-mode: multiply\;' + `background-image: url(${entry.image})`"
          >
            <div class="text-2xl font-semibold">{{ entry.title }}</div>
            <div class="text-gray-300 text-sm uppercase">
              {{ entry.description1 }}
              <span class="text-sm font-extralight">×</span>
              {{ entry.description2 }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    <script src="/js/jquery-3.4.1.min.js" type="text/javascript"></script>-->
    <!--    <script src="/js/webflow.js" type="text/javascript"></script>-->
    <!--    <script>-->
    <!--      $(document).ready(function () {-->
    <!--        let $grid = $('.is-filterable-grid')-->
    <!--        let $items = $grid.children('.card')-->
    <!--        let currentCat = 'all'-->
    <!--        let sidebar = []-->
    <!--        let sortItems = (a, b) => {-->
    <!--          let an = a.getAttribute('data-order')-->
    <!--          let bn = b.getAttribute('data-order')-->
    <!--          if (an > bn) {-->
    <!--            return 1-->
    <!--          }-->
    <!--          if (an < bn) {-->
    <!--            return -1-->
    <!--          }-->
    <!--          return 0-->
    <!--        }-->
    <!--        let filterItems = function () {-->
    <!--          let cat = this.getAttribute('data-category')-->
    <!--          let newSidebar = []-->
    <!--          $('.button&#45;&#45;is-active').toggleClass('button&#45;&#45;is-active')-->
    <!--          $(`.button[data-category=${cat}]`).toggleClass('button&#45;&#45;is-active')-->
    <!--          $grid-->
    <!--            .fadeOut('1', function () {-->
    <!--              sidebar.map((item) => $(item).appendTo($grid))-->
    <!--              if (cat === 'all') {-->
    <!--                $items.sort(sortItems).detach().appendTo($grid)-->
    <!--              } else {-->
    <!--                $(`.card:not([data-category=${cat}])`).each(function () {-->
    <!--                  newSidebar.push($(this).detach())-->
    <!--                })-->
    <!--              }-->
    <!--              sidebar = newSidebar-->
    <!--              currentCat = cat-->
    <!--            })-->
    <!--            .fadeIn('50')-->
    <!--        }-->
    <!--        // Handle the click on a category filter button-->
    <!--        $('.js-button-filter').click(filterItems)-->
    <!--      })-->
    <!--    </script>-->
  </div>
</template>

<script>
import data from '/static/data/portfolio'

export default {
  name: 'portfolio',
  data() {
    return data
  },
}
</script>
