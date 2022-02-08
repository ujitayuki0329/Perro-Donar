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
          <div class="detail-tab-wrap">
              <input id="TAB-01" type="radio" name="TAB" class="detail-tab-switch" checked="checked" /><label class="detail-tab-label" for="TAB-01">自己紹介</label>
              <div class="detail-tab-content">
                  メロスは激怒した。必ず、かの邪智暴虐の王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。きょう未明メロスは村を出発し、野を越え山越え、十里はなれた此のシラクスの市にやって来た。メロスには父も、母も無い。女房も無い。十六の、内気な妹と二人暮しだ。この妹は、村の或る律気な一牧人を、近々、花婿として迎える事になっていた。結婚式も間近かなのである。メロスは、それゆえ、花嫁の衣裳やら祝宴の御馳走やらを買いに、はるばる市にやって来たのだ。
              </div>
              <input id="TAB-02" type="radio" name="TAB" class="detail-tab-switch" /><label class="detail-tab-label" for="TAB-02">スポンサー様へ</label>
              <div class="detail-tab-content">
                  先ず、その品々を買い集め、それから都の大路をぶらぶら歩いた。メロスには竹馬の友があった。セリヌンティウスである。今は此のシラクスの市で、石工をしている。その友を、これから訪ねてみるつもりなのだ。久しく逢わなかったのだから、訪ねて行くのが楽しみである。歩いているうちにメロスは、まちの様子を怪しく思った。ひっそりしている。
              </div>
              <input id="TAB-03" type="radio" name="TAB" class="detail-tab-switch" /><label class="detail-tab-label" for="TAB-03">チャット</label>
              <div class="detail-tab-content">
                  <InfiniteScroll/>
              </div>
          </div>
          <!-- <div class="nav-tabs-wrapper">
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
          </div> -->
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
