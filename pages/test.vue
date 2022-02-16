<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>マイページテスト</h1>
      </div>
      <div class="profile-container">
        <!-- 左メニュー -->
        <div class="profile-menu">
          <div class="cp_navi">
            <div id="cp_sidenav" class="sidenav">
              <a href="#" id="home">マイページTOP</a>
              <a href="#" id="news">基本情報設定</a>
              <a href="#" id="contact">プロフィール編集</a>
              <a href="#" id="about">退会</a>
            </div>
          </div>
        </div>
        <!-- 右コンテンツ -->
        <div class="prolile-wrap">
          <div class="profile-information">
            <div class="profile-wrap-item">
              <h2><span>必須</span>ユーザーネーム</h2>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ujita yuki" value="">
            </div>
            <div class="profile-wrap-item">
              <h2><span>必須</span>メールアドレス</h2>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="test@test.com" value="">
            </div>
            <div class="profile-wrap-item">
              <h2><span>必須</span>パスワード</h2>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="test1234" value="">
            </div>
            <div class="profile-wrap-item">
              <h2>お名前</h2>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="氏田 裕樹" value="">
            </div>
            <div class="profile-wrap-item">
              <h2>電話番号</h2>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="09012345678" value="">
            </div>
            <div class="profile-wrap-item">
              <h2>住所</h2>
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
              <h2><span>必須</span>銀行名</h2>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="三井住友銀行" value="">
            </div>
            <div class="profile-wrap-item">
              <h2><span>必須</span>支店名</h2>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="東京支店" value="">
            </div>
            <div class="profile-wrap-item">
              <h2><span>必須</span>口座番号(7桁)</h2>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="1234567" value="">
            </div>
            <div class="profile-wrap-item">
              <h2><span>必須</span>口座種別</h2>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="普通" value="">
            </div>
            <div class="profile-wrap-item">
              <h2><span>必須</span>口座名義カナ(全角)</h2>
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
    </client-only>
  </div>
</template>

<style>
.profile-container .prolile-wrap h2{
  font-size: 13px;
  font-weight: bold;
}

.profile-container .prolile-wrap span{
  background-color: brown;
  color: white;
  font-size: 12px;
  padding: 5px;
  margin-right: 5px;
}

.profile-container{
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.prolile-wrap{
  width: 100%;
  margin-top: 20px;
  background-color: #ddd;
}

.profile-wrap-item{
  margin-bottom: 20px;
}

.border{
  border: 2px solid #ddd;
  margin: 100px;
}

.bank-information-title p{
  font-weight: bold;
  margin-bottom: 20px;
}

.cp_navi {
	position: relative;
	overflow: hidden;
	width: 180px;
	height:360px;
}
.cp_navi #cp_sidenav a {
	font-size: 10px;
	position: absolute;
	left: -95px;
	width: 110px;
	height: 54px;
	padding: 12px 15px;
	transition: 0.3s;
	text-decoration: none;
	color: #ffffff;
	border-radius: 0 5px 5px 0;
}
.cp_navi #cp_sidenav a:hover {
	left: -10px;
}
.cp_navi #home {
	top: 20px;
	background-color: #da3c41;
}
.cp_navi #news {
	top: 80px;
	background-color: #1b2538;
}
.cp_navi #contact {
	top: 140px;
	background-color: #2e9b72;
}
.cp_navi #about {
	top: 200px;
	background-color: #a62e7a;
}

</style>