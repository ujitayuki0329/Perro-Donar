<template>
  <div>
    <cliant-only>
        <div>
          <!-- newわんちゃん -->
          <h1 class="slider_ttl"><span style="color:#ff7d6e;">NEW DOG</span></h1>
          <ul class="card-horizontal-list text-center">
            <li>
              <a href="/user_page/dog_detail/dog_detail/">
                <img src="~/assets/img/test.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user_page/dog_detail/dog_detail/">
                <img src="~/assets/img/test6.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user_page/dog_detail/dog_detail/">
                <img src="~/assets/img/test3.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user_page/dog_detail/dog_detail/">
                <img src="~/assets/img/test7.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user_page/dog_detail/dog_detail/">
                <img src="~/assets/img/test4.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/user_page/dog_detail/dog_detail/">
                <img src="~/assets/img/test5.jpg">
                <div>
                  <h3>name</h3>
                  <p>dog bread</p>
                </div>
              </a>
            </li>
          </ul>
          <a href="/list/new_dog" class="detail">もっと見る</a>
        </div>

        <!-- rannking -->
        <div>
          <h1 class="slider_ttl mt-5">ランキング</h1>
            <ul class="horizontal_scroll rank">
              <ul class="card-horizontal-list text-center">
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test1.png">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test2.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test3.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test4.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test5.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test6.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test7.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test5.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test6.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
              </ul>  
            </ul>
          <a href="/list/popular/" class="detail">もっと見る</a>
        </div>
        <div v-if="this.$store.getters['user'].login == true">
          <h1 class="slider_ttl mt-5">お気に入り</h1>
              <ul class="card-horizontal-list text-center">
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test1.png">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test2.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test3.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test4.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test5.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test6.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test7.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test5.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test6.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
              </ul>  
          <a href="/user_page/favorite/" class="detail">もっと見る</a>
        </div>
        <div v-if="this.$store.getters['user'].login == true">
          <h1 class="slider_ttl mt-5">スポンサー一覧</h1>
              <ul class="card-horizontal-list text-center">
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test1.png">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test2.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test3.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test4.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test5.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test6.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test7.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test5.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/user_page/dog_detail/dog_detail/">
                    <img src="~/assets/img/test6.jpg">
                    <div>
                      <h3>name</h3>
                      <p>dog bread</p>
                    </div>
                  </a>
                </li>
              </ul>  
          <a href="/user_page/sponser/" class="detail">もっと見る</a>
        </div>
    </cliant-only>
  </div>
</template>