<template>
  <div class="section is-hero">
    <h1 class="container">
      <div class="col on-dark lg-6 md-12 dark-box">
        <h1 class="size-h1">
          <div class="size-h2-title">{{ $t('FirstImpression.PreTitle') }}</div>
          <div class="size-h1-title" style="color: #30c47e">
            {{ $t('FirstImpression.Ex') }}<span style="color: #fff">{{ $t('FirstImpression.Split') }}</span>{{ $t('FirstImpression.AppleEngineers') }}
          </div>
          <div class="size-h2-title">{{ $t('FirstImpression.SubTitle') }}</div>
<!--          <div class="size-h2-title">High-tech Cloud Software</div>-->
          <div class="size-h4-title margin-bottom-quad">
            {{ $t('FirstImpression.SubSubTitle') }}
          </div>
        </h1>

        <div class="flexh-align-center xs-is-wrapping">
          <a
            class="button-primary animated w-inline-block"
            data-w-id="a73c96af-ffb4-8180-7dce-65d3db4801bd"
            href="/contact-us"
            style="padding: 30px 0px"
          >
            <div
              class="button-primary-text"
              style="
                -webkit-transform: translate3d(0, 0px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 1;
              "
            >
              {{ $t('FirstImpression.Button') }}
            </div>
            <div
              class="button-primary-text for-hover"
              style="
                opacity: 0;
                display: block;
                -webkit-transform: translate3d(0, 20px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 20px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 20px, 0) scale3d(1, 1, 1)
                  rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0)
                  rotateY(0) rotateZ(0) skew(0, 0);
              "
            >
              let&#x27;s go <span class="fa margin-left"></span>
            </div>
          </a>
        </div>
        <a
          class="cta-link is-white"
          href="portfolio"
          style="margin-top: 30px; font-size: 42px"
        >
          <span>{{ $t('FirstImpression.OurPortfolio') }}</span>
          <span class="fa c-cta1_arrow-hovered"></span>
          <span class="fa c-cta1__arrow-normal"></span>
        </a>
      </div>
      <!--        <div class="col lg-9"></div>-->
    </h1>
  </div>
</template>

<script>
export default {
  name: 'FirstImpression',
}
</script>

<style scoped></style>
