<template>
  <div id="mobile-navigation">
    <div class="mobile-navigation-bar margin-top margin-bottom-double">
      <a class="brand-2 w-inline-block" href="/">
        <img
          alt=""
          class="logo-image-2"
          height="100"
          src="/images/logo%20v4.1%20arrows%20only.svg"
        />
      </a>
    </div>
    <div class="menu color-white">
      <nav class="menu__nav">
        <ul class="menu__list r-list">
          <li v-for="site in sites" class="menu__group">
            <a :href="site.link" class="menu__link r-link">{{ site.name }}</a>
          </li>
        </ul>
      </nav>
      <button class="menu__toggle r-button" type="button">
        <span class="menu__hamburger m-hamburger">
          <span class="m-hamburger__label">
            <span class="menu__screen-reader screen-reader">Open menu</span>
          </span>
        </span>
      </button>
    </div>

    <script type="module">
      export function mobileMenu() {
        'use strict'

        class Menu {
          constructor(settings) {
            this.menuNode = settings.menuNode
            this.state = false
            this.menuStateTextNode =
              settings.menuStateTextNode ||
              this.menuNode.querySelector('.menu__screen-reader')
            this.menuOpenedText = settings.menuOpenedText || 'Open menu'
            this.menuClosedText = settings.menuClosedText || 'Close menu'
          }

          changeState(state) {
            return (this.state = !state)
          }

          changeStateText(state, node) {
            let text =
              state !== true ? this.menuOpenedText : this.menuClosedText

            node.textContent = text
            return text
          }

          toggleMenuState(className) {
            let state

            if (typeof className !== 'string' || className.length === 0) {
              return console.log(
                'you did not give the class for the toggleState function'
              )
            }

            state = this.changeState(this.state)

            this.changeStateText(state, this.menuStateTextNode)
            this.menuNode.classList.toggle(className)

            return state
          }
        }

        const jsMenuNode = document.querySelector('.menu')
        const demoMenu = new Menu({
          menuNode: jsMenuNode,
        })

        function callMenuToggle(event) {
          demoMenu.toggleMenuState('menu_activated')
        }

        jsMenuNode
          .querySelector('.menu__toggle')
          .addEventListener('click', callMenuToggle)
      }

      mobileMenu()
    </script>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',
  props: {
    sites: {
      name: String,
      link: String,
    },
  },
}
</script>

<style scoped></style>
