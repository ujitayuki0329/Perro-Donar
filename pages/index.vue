<template>
  <div>
    <cliant-only>
      <div class="index_wrap">
        <Header/>
        <carousel
            :per-page="1"
            :autoplay="true"
            :loop="true"
            :pagination-padding="5"
            :autoplay-timeout="3000"
          >
          <slide class="carousel-wrap">
            <img class="carousel-img" src="~/assets/img/slide1.png" alt="スライド1">
          </slide>
          <slide class="carousel-wrap">
            <img class="carousel-img" src="~/assets/img/slide2.png" alt="スライド2">
          </slide>
          <!-- <slide class="carousel-wrap">
            <img class="carousel-img" src="~/assets/img/slide3.png" alt="スライド3">
          </slide> -->
        </carousel>
        <Slider />
        <Search />
        <Contents />
        <About />
        <Protection />
        <Advertisement />
        <Footer/>
        <Copylight/>
      </div>
    </cliant-only>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return{
      imageurls: [
        require('~/assets/img/slide1.png'),
        require('~/assets/img/slide2.png'),
        // require('~/assets/img/slide3.png'),
      ],
    }
  }
}
</script>
