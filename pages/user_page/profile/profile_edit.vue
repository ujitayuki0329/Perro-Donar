<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>プロフィール編集</h1>
      </div>
      <div class="mypage-wrap">
        <div class="form-group">
          <p>ユーザー名</p>
          <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ujita yuki" value="">
        </div>
        <div class="form-group">
          <p>メールアドレス</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="test@test.com" value="">
        </div>
        <div class="form-group">
          <p>郵便番号(ハイフンなし半角英数)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="1234567" value="">
        </div>
        <div class="form-group">
          <p>住所</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="東京都千代田区1-1-1" value="">
        </div>
        <div class="form-group">
          <p>銀行名</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="三井住友銀行" value="">
        </div>
        <div class="form-group">
          <p>支店名</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="東京支店" value="">
        </div>
        <div class="form-group">
          <p>口座番号(7桁)</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="1234567" value="">
        </div>
        <div class="form-group">
          <p>口座種別</p>
          <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="普通" value="">
        </div>
        <div class="form-group">
          <p>口座名義カナ(全角)</p>
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
        <div class="mt-5">
          <p>愛犬を掲載するは<a href="/user_page/publishe/">こちら</a>から</p>
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
