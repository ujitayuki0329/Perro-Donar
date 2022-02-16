<template>
  <div>
    <!-- <client-only> -->
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>基本情報設定</h1>
      </div>
      <div class="profile_container">
        <!-- 左メニュー -->
        <div class="profile-menu">
          <div class="cp_navi">
            <div id="cp_sidenav" class="sidenav">
              <a href="/user_page/profile/mypage/" id="home">マイページTOP</a>
              <a href="/user_page/profile/basic_information/" id="news">基本情報設定</a>
              <a href="/user_page/profile/profile_edit/" id="contact">プロフィール編集</a>
              <a href="#" id="about">退会</a>
            </div>
          </div>
        </div>
        <!-- 右コンテンツ -->
        <div class="prolile-wrap">
          <div class="profile-information">
            <div class="profile-wrap-item">
              <h3><span>必須</span>ユーザーネーム</h3>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ujita yuki" value="">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>メールアドレス</h3>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="test@test.com" value="">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>パスワード</h3>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="test1234" value="">
            </div>
            <div class="profile-wrap-item">
              <h3>お名前</h3>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="氏田 裕樹" value="">
            </div>
            <div class="profile-wrap-item">
              <h3>電話番号</h3>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="09012345678" value="">
            </div>
            <div class="profile-wrap-item">
              <h3>住所</h3>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="埼玉県さいたま市1-1-1" value="">
            </div>
          </div>
          <div class="border"></div>
          <!-- 銀行情報 -->
          <div class="bank-information">
            <div class="bank-information-title">
              <p>＜銀行情報＞</p>
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>銀行名</h3>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="三井住友銀行" value="">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>支店名</h3>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="東京支店" value="">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>口座番号(7桁)</h3>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="1234567" value="">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>口座種別</h3>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="普通" value="">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>口座名義カナ(全角)</h3>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="ウジタ ユウキ" value="">
            </div>
            <br>
        
        <div class="mt-5">
          <a href="/user_page/profile/profile">
          <button type="button" class="btn btn-outline-dark">保存</button>
          </a>
          <a href="/">
          <button type="button" class="btn btn-outline-danger">キャンセル</button>
          </a>
        </div>
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

export default{}
</script>
