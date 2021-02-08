<template>
  <div class="text-white">
    <HeadText title="Portfolio" />
    <div class="z-10 flex flex-wrap lg:flex-nowrap w-full max-w-7xl mx-auto max-w-full mt-20">
      <div class="col-2 lg-12 margin-bottom relative">
        <div class="w-layout-grid c-grid-services">
          <nuxt-link
            class="bg-transparent relative overflow-hidden inline-block max-w-full rounded blur"
            :to="entry.link"
            v-for="(entry, i) in this.entries"
            :key="i"
          >
            <div class="c-grid-item__text is-dark z-10 flex hover:opacity-100">
              <div class="overflow-hidden">
                <div class="c-grid-item__title">{{ entry.title }}</div>
              </div>
              <div class="overflow-hidden">
                <div class="c-grid-item__categories">
                  {{ entry.description1 }}
                  <span class="text-xsmall is-thin">×</span>
                  {{ entry.description2 }}
                </div>
              </div>
            </div>
            <img
              class="c-grid-item__image"
              sizes="(max-width: 479px) 90vw, (max-width: 752px) 93vw, 700px"
              :src="entry.image"
              :alt="entry.alt"
            />
            <div
              class="absolute inset-0 hover:filter-grayscale hover:border hover:border-black hover:border-opacity-75 hover:shadow-inner hover:bg-black hover:opacity-75"
              style="mix-blend-mode: multiply"
            />
          </nuxt-link>
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
