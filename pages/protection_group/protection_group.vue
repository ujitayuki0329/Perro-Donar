<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>愛護団体一覧</h1>
      </div>
      <div class="container">
        <div class="card-group">
          <div class="card">
            <img src="~/assets/img/dog-img/ボストンテリア.png">
            <a href="/dog-detail">
            <div class="card-body">
              <h5 class="card-title">〇〇ちゃん　♀</h5>
              <p class="card-text h6">性別：女の子埼玉県</p>
              <p class="card-text h6">出身地：埼玉県</p>
              <p class="card-text h6">生年月日：2020年11月23日</p>
              <p class="card-text h6">掲載日：2021年05月05日</p>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/dog-img/ボストンテリア.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">〇〇ちゃん　♀</h5>
              <p class="card-text h6">女の子｜埼玉県</p>
              <p class="card-text h6">掲載日2021年05月05日</p>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/dog-img/ボストンテリア.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">〇〇ちゃん　♀</h5>
              <p class="card-text h6">女の子｜埼玉県</p>
              <p class="card-text h6">掲載日2021年05月05日</p>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/dog-img/ボストンテリア.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">〇〇ちゃん　♀</h5>
              <p class="card-text h6">女の子｜埼玉県</p>
              <p class="card-text h6">掲載日2021年05月05日</p>
            </div>
            </a>
          </div>
          <div class="card">
            <img src="~/assets/img/dog-img/ボストンテリア.png">
            <a href="#">
            <div class="card-body">
              <h5 class="card-title">〇〇ちゃん　♀</h5>
              <p class="card-text h6">女の子｜埼玉県</p>
              <p class="card-text h6">掲載日2021年05月05日</p>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div class="nav-links">
          <a class="prev page-numbers" href="#">«</a><!-- 現在の前のページへのリンク -->
          <a class="page-numbers" href="#">1</a>
          <span class="page-numbers current">2</span><!-- 現在閲覧しているページ -->
          <a class="page-numbers" href="#">3</a>
          <span class="page-numbers dots">…</span>
          <a class="page-numbers" href="#">27</a>
          <a class="next page-numbers" href="#">»</a><!-- 現在の次のページへのリンク -->
      </div>
    </div>
      
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/list.css'

export default{}
</script>
