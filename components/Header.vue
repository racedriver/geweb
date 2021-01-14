<template>
  <div>
    <!--<div class="navigation-section position-absolute is-transparent">-->
    <div class="navigation-overlay"></div>
    <div class="navigation-and-offcanvas">
      <div class="col lg-2 no-margin-bottom-lg md-basis-auto">
        <a class="brand3 w-inline-block" href="/">
          <img alt="Skylines One" src="/images/logo%20v4.1%20arrows%20only.svg">
        </a>
      </div>
      <div class="col lg-8 no-margin-bottom md-basis-auto md-order-last">
        <nav class="navigation-menu flexh-justify-center position-relative">
          <a class="c-nav__link" href="/">Home</a>
          <a class="c-nav__link" href="about-us">About Us</a>
          <a class="c-nav__link" href="portfolio">Portfolio</a>
          <a class="c-nav__link" href="career">Career</a>
          <a class="c-nav__link" href="contact-us">Contact Us</a>
        </nav>
      </div>
      <a class="c-navbar-icon is-19px" href="#"></a>
    </div>
    <div class="mobile-navigation-bar margin-top">
      <a class="brand-2 w-inline-block" href="/">
        <img alt="" class="logo-image-2" height="100" src="/images/logo%20v4.1%20arrows%20only.svg">
      </a>

    </div>

    <!-- Mobile Menu -->

    <div id="mobile-navigation">

      <div class="menu">
        <nav class="menu__nav">
          <ul class="menu__list r-list">
            <li class="menu__group">
              <a class="menu__link r-link" href="/">Home</a>
            </li>
            <li class="menu__group">
              <a class="menu__link r-link" href="about-us.html">About Us</a>
            </li>
            <li class="menu__group">
              <a class="menu__link r-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="menu__group">
              <a class="menu__link r-link" href="career.html">Career</a>
            </li>
            <!--<li class="menu__group">
                <a href="blog.html" class="menu__link r-link">Blog</a>
            </li>-->
            <li class="menu__group">
              <a class="menu__link r-link" href="contact-us.html">Contact Us</a>
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
          'use strict';

          class Menu {
            constructor(settings) {
              this.menuNode = settings.menuNode;
              this.state = false;
              this.menuStateTextNode = settings.menuStateTextNode || this.menuNode.querySelector('.menu__screen-reader');
              this.menuOpenedText = settings.menuOpenedText || 'Open menu';
              this.menuClosedText = settings.menuClosedText || 'Close menu';
            }

            changeState(state) {
              return this.state = !state;
            }

            changeStateText(state, node) {
              let text = (state !== true) ? this.menuOpenedText : this.menuClosedText;

              node.textContent = text;
              return text;
            }

            toggleMenuState(className) {

              let state;

              if (typeof className !== 'string' || className.length === 0) {
                return console.log('you did not give the class for the toggleState function');
              }

              state = this.changeState(this.state);

              this.changeStateText(state, this.menuStateTextNode);
              this.menuNode.classList.toggle(className);

              return state;
            }
          }

          const jsMenuNode = document.querySelector('.menu');
          const demoMenu = new Menu({
            menuNode: jsMenuNode
          });

          function callMenuToggle(event) {
            demoMenu.toggleMenuState('menu_activated');
          }

          jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
        }

        mobileMenu();
      </script>

    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
