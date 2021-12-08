<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>プロフィール</h1>
      </div>
      <div class="profile-wrap">
        <div class="profile-avater">
          <img src="~/~/assets/img/avater.png" alt="">
        </div>
        <div class="introduce-wrap">
          <div class="introduce-wrap-inner">
            <p>自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。</p>
          </div>
        </div>
        <div class="mb-5">
          <p><span style="font-weight:bold;">MY DOG一覧</span>は<a href="/user_page/my_dog/">こちら</a></p>
        </div>
      </div>
      <div class="mypage-wrap">
        <div class="form-group">
          <p>ユーザー名</p>
          <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>メールアドレス</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>郵便番号(ハイフンなし半角英数)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>住所</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>銀行名</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>支店名</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>口座番号(7桁)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>口座種別</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
        <div class="form-group">
          <p>口座名義カナ(全角)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
        </div>
          
        <br>
        
        <!-- <div class="mt-5">
          <a href="/welcome">
          <button type="button" class="btn btn-outline-dark">保存</button>
          </a>
          <a href="/welcome">
          <button type="button" class="btn btn-outline-danger">キャンセル</button>
          </a>
        </div> -->
        <div class="mt-5">
          <p>プロフィール編集は<a href="/user_page/profile/profile_edit">こちら</a>から</p>
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
