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
        <div class="profile-spmenu">
          <div class="sp_navi">
            <div id="sp_sidenav" class="sidenav">
              <ul class="topnav">
                <li><a href="/user_page/profile/mypage" id="home">マイページTOP</a></li>
                <li><a href="/user_page/profile/basic_information/" id="news">基本情報設定</a></li>
                <li><a class="active" href="/user_page/profile/profile_edit/" id="contact">プロフィール編集</a></li>
              </ul>
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
                <textarea name="introduce" class="m-form-textarea" placeholder="自己紹介文" v-model="introduce"></textarea>
                <div class="sns-form">
                  <p>Twitterアカウント</p>
                  <h5>https://twitter.com/ <input type="text" class="twitter-form" placeholder="twitterアカウント" v-model="twitter_link"></h5>
                  <p>YouTubeアカウント</p>
                  <h5>https://youtube.com/ <input type="text" class="twitter-form" placeholder="youtubeアカウント" v-model="youtube_link"></h5>
                </div>
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
          <div class="mt-2 basic_infomation_btn" >
            <a href="#">
            <button type="button" class="btn btn-outline-dark" @click="profile_edit_btn">保存</button>
            </a>
            <a href="/">
            <button type="button" class="btn btn-outline-danger">キャンセル</button>
            </a>
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
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default{
  data: () => {
    return {
      introduce: "",
      twitter_link: "",
      youtube_link: "",
    }
  },

  methods: {
    profile_edit_btn () {
      const db = getFirestore()
      const docRef = addDoc(collection(db, 'profile_edit'), {
        introduce: this.introduce,
        twitter_link: this.twitter_link,
        youtube_link: this.youtube_link,
      })
      .catch(function (error) {
        console.log('掲載できませんでした。')
        console.log({'code':error.code, 'message':error.message})
      })

      setTimeout(() => {
        let url = '/user_page/profile/profile'
        window.location.href = url
      }, 1000)
    }
  }
}
</script>

