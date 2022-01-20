<template>
  <div>
    <!-- <client-only> -->
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>キャンチョメ</h1>
      </div>
      <div class="container">
        <div class="slider-wrap">
          <!-- スライダー-->
          <div class="swiper-container slider">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg" alt=""></div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
          </div>

          <div class="slider-thumbnail-wrap">
            <!-- サムネイル -->
            <div class="swiper-container slider-thumbnail">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg" alt=""></div>
                </div>
            </div>
          </div>
        </div>
        <div class="introduce-wrap">
          <div class="my_name">
            <table>
              <tr>
                <th>名前</th>
                <td>キャンチョメ ♀</td>
              </tr>
              <tr>
                <th>年齢</th>
                <td>6歳</td>
              </tr>
            </table>
            <div class="like mt-5 mb-5">
              <div class="like_btn">
                <i class="far fa-heart hart"></i>
              </div>
              <a href="" class="btn btn-radius-solid" style="font-weight: bold;">お気に入りに追加</a>
              <a href="/payment/settlement/settlement" class="btn btn-radius-solid" style="margin-left:10px; font-weight:bold; color:#ff7d6e;">スポンサーになる</a>
            </div>
          </div>
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs" role="tablist">
              <li :class="{ clickBtn: tab === 1 }" @click="tab = 1">自己紹介</li>
              <li :class="{ clickBtn: tab === 2 }" @click="tab = 2">スポンサー様へ</li>
              <br>
            </ul>
          </div>
          <div v-show="tab === 1" class="content-item">
            <div class="introduce">
              <h2>自己紹介</h2>
              <p class="introduce_content">初めまして。キャンチョメと申します！<br>毎日散歩に出かけており、楽しく生活しております。同じ犬種の方で、日程がもし合えば、散歩にでも一緒に出かけたいなと思います。
              </p>
            </div>
          </div>
          <div v-show="tab === 2" class="content-item">
            <div class="introduce">
              <h2>困りごと</h2>
              <p class="introduce_content">食いしん坊で困っております。おやつ代がとてもかかるので、どなたか私にご飯ください！笑</p>
            </div>
          </div>
          <div class="mt-5 text-center">
            <a href="/chat/chat" class="btn btn-radius-solid" style="font-weight: bold;">メッセージを送る</a>
          </div>
        </div>
      </div>
    </div>
      
    <Footer />
    <Copylight />
    <!-- </client-only> -->
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/user_page.css'

export default{
  data: () => {
    return {
      tab: 1,
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://unpkg.com/swiper/swiper-bundle.min.js'
        }
      ],
      link: [
        {
         rel: 'stylesheet',
         href: 'https://unpkg.com/swiper/swiper-bundle.min.css'
        }
      ]
    }
  },
  mounted() {
    //サムネイル
    var sliderThumbnail = new Swiper('.slider-thumbnail', {
      slidesPerView: 10,
    });

    //スライダー
    var slider = new Swiper('.slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: sliderThumbnail
      }
    });
  }
}
</script>
