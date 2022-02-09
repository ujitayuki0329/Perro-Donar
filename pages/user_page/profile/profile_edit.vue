<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>プロフィール編集</h1>
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
        <!-- 右コンテンツ -->
        <div class="prolile-wrap">
          <div class="profile-information">
            
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
