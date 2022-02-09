<template>
  <div>
    <client-only>
    <Header />
    
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>プロフィール</h1>
      </div>
      <div class="profile-container">
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
        <div class="follow"> <div class="icon-twitter"></div> Follow</div>
      </div>
    </div>
    <div class="profile-edit-link">
      <p>プロフィール編集は<a href="/user_page/profile/mypage">こちら</a>から</p>
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
