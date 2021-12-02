<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>愛犬を掲載する</h1>
      </div>
      <div class="dog-setting-wrap">
        <div class="introduce-wrap">
          <div>
            <div class="form-group">
              <p>わんちゃんのお名前</p>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ポチ" value="">
            </div>
            <div class="form-group">
              <p>年齢</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" placeholder="2才" value="">
            </div>
            <div class="form-group">
              <p>性別</p>
              <input type="radio" name="sex" value="1" checked="checked">男の子
              <input type="radio" name="sex" value="2">女の子
            </div>
            <div class="form-group">
              <p>犬種</p>
              <input type="text" id="dog_breed-field" name="dog_breed" class="form-control border-input" placeholder="ボストンテリア" value="">
            </div>
            <div class="form-group">
              <p>画像</p>
              <input type="file" id="dog_pic" name="dog_pic" value="">
            </div>
          </div>
          <br>
          <div>
            <div class="form-group">
              <!-- <p>公開・非公開</p> -->
              <input type="radio" name="release" value="1" checked="checked">公開
              <input type="radio" name="release" value="2">非公開
            </div>
          </div>

            
            <br><br>
          

          <div class="nav-tabs-wrapper">
            <ul class="nav nav-pills" role="tablist">
              <li :class="{ clickBtn: tab === 1 }" @click="tab = 1">自己紹介</li>
              <li :class="{ clickBtn: tab === 2 }" @click="tab = 2">スポンサー様へ</li>
            </ul>
          </div>
          <div class="content">
            <div v-show="tab === 1" class="content-item">
              <textarea name="introduce" class="m-form-textarea" placeholder="自己紹介文"></textarea>
            </div>
            <div v-show="tab === 2" class="content-item">
              <textarea name="introduce" class="m-form-textarea" placeholder="スポンサー様へ"></textarea>
            </div>
          </div>
          

          <div class="mt-5">
            <a href="/user_page/my_dog/">
            <button type="button" class="btn btn-outline-dark">保存</button>
            </a>
            <a href="/">
            <button type="button" class="btn btn-outline-danger">キャンセル</button>
            </a>
          </div>

          <div class="mt-5">
            <p>プロフィール編集は<a href="/user_page/profile/profile_edit/">こちら</a>から</p>
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

export default{
  data: () => {
    return {
      tab: 1,
    }
  },
}
</script>
