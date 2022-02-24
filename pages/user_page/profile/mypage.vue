<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>マイページTOP</h1>
      </div>
      <div class="profile_container">
        <!-- 左メニュー -->
        <div class="profile-menu">
          <div class="cp_navi">
            <div id="cp_sidenav" class="sidenav">
              <a href="/user_page/profile/mypage" id="home">マイページTOP</a>
              <a href="/user_page/profile/basic_information/" id="news">基本情報設定</a>
              <a href="/user_page/profile/profile_edit/" id="contact">プロフィール編集</a>
              <a href="#" id="about">退会</a>
            </div>
          </div>
        </div>
        <div class="profile-spmenu">
          <div class="sp_navi">
            <div id="sp_sidenav" class="sidenav">
              <ul class="topnav">
                <li><a class="active"  href="/user_page/profile/mypage" id="home">マイページTOP</a></li>
                <li><a href="/user_page/profile/basic_information/" id="news">基本情報設定</a></li>
                <li><a href="/user_page/profile/profile_edit/" id="contact">プロフィール編集</a></li>
              </ul>
            </div>
          </div>
        </div>
        

        <!-- 右コンテンツ -->
          <div class="mypage-container">
            <header>
              <div class="bio">
                <img src="http://www.croop.cl/UI/twitter/images/up.jpg" alt="background" class="bg">
                <div class="desc">
                  <h3>@carlf</h3>
                  <p>Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.</p>
                </div>
              </div>
              <div class="avatarcontainer">
                <img src="~/assets/img/avater.png" alt="avatar" class="avatar">
                <div class="hover">
                    <div class="icon-twitter"></div>
                </div>
              </div>
            </header>
            <div class="content">
              <h1>キャンチョメ</h1>
              <p>一般会員</p>
              <p>自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。</p>
              <div class="data">
                <ul>
                  <li>
                    5
                    <span>掲載犬数</span>
                  </li>
                  <li>
                    150
                    <span>フォロー</span>
                  </li>
                  <li>
                    300
                    <span>フォロワー</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/user_page.css'

export default{}
</script>
