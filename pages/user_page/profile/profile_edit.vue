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
            <div class="profile_edit_header">
              <h3>1.プロフィール</h3>
              <div class="profile_edit_contents">
                <p>自己紹介文</p>
                <textarea name="introduce" class="m-form-textarea" placeholder="自己紹介文"></textarea>
                <p>Twitterアカウント</p>
                <h5>http://twitter.com/ <input type="text"  name="dog_breed" class="twitter-form" placeholder="twitterアカウント" value=""></h5>
                
              </div>
            </div>
            <div class="profile_edit_header">
              <h3>2.プロフィール写真</h3>
              <div class="profile_edit_contents">
                <p>ご使用のパソコンに保存された写真の中から掲載したい写真を指定して下さい。jpg/gif/pngファイルのアップが可能です。pdfファイルはアップできませんのでご注意ください。また、10MB以上の画像は登録できません。尚、画像の大きさは、自動的に規定サイズに縮小・リサイズされますので気にせずアップロードして下さい。</p>
                <div class="profile_upload">
                  <p>写真</p>
                  <div class="profile_img">
                    <img src="~/assets/img/avater.png" alt="avatar">
                  </div>
                  <div class="upload_btn">
                    <label class="profile_uploadlabel" for="file_photo">
                      ＋写真を選択
                      <input type="file" id="file_photo" style="display:none;">
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="profile_edit_header">
              <h3>3.カバー写真</h3>
              <div class="profile_edit_contents">
                <p>ご使用のパソコンに保存された写真の中から掲載したい写真を指定して下さい。jpg/gif/pngファイルのアップが可能です。pdfファイルはアップできませんのでご注意ください。また、10MB以上の画像は登録できません。尚、画像の大きさは、自動的に規定サイズに縮小・リサイズされますので気にせずアップロードして下さい。</p>
                <div class="profile_upload">
                  <p>写真</p>
                  <div class="profile_img">
                    <img src="~/assets/img/avater.png" alt="avatar">
                  </div>
                  <div class="upload_btn">
                    <label class="profile_uploadlabel" for="file_photo">
                      ＋写真を選択
                      <input type="file" id="file_photo" style="display:none;">
                    </label>
                  </div>
                </div>
              </div>
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

<style>
.profile-information{
  position: relative;
}
.profile_edit_header{
  background-color: #ddd;
  padding: 20px;
  margin-bottom: 20px;
}
.profile_edit_contents{
  padding: 10px;
}
.profile_edit_contents p{
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
}
.profile_edit_contents h5{
  font-size: 12px;
}
.twitter-form{
  border: 2px solid #ddd;
}
.twitter-form:focus{
  outline: none;
  border: 5px solid rgb(188, 205, 236);
}

.profile_upload{
  width: 50%;
  height: 250px;
  background-color: white;
}
.profile_upload p{
  text-align: center;
  padding: 10px;
}
.profile_img{
  width: 50%;
  height: 120px;
  margin: 0 auto;
  background-color: #ddd;
}
.profile_img img{
  width: 100%;
  height: 100%;
}
.upload_btn{
  text-align: center;
  margin-top: 20px;
}
/* label {
  width: 50%;
  color: white;  
  font-size: 10px;
  background-color: #ff7d6e;
  padding: 6px;
} */

.profile_uploadlabel{
  width: 50%;
  color: white;  
  font-size: 10px;
  background-color: #ff7d6e;
  padding: 6px;
}

</style>
