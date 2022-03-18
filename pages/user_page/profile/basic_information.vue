<template>
  <div>
    <client-only>
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
        <div class="profile-spmenu">
          <div class="sp_navi">
            <div id="sp_sidenav" class="sidenav">
              <ul class="topnav">
                <li><a href="/user_page/profile/mypage" id="home">マイページTOP</a></li>
                <li><a class="active" href="/user_page/profile/basic_information/" id="news">基本情報設定</a></li>
                <li><a href="/user_page/profile/profile_edit/" id="contact">プロフィール編集</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 右コンテンツ -->
        <div class="prolile-wrap">
          <div class="profile-information">
            <div class="bank-information-title">
              <p>＜個人情報＞</p>
            </div>
            <div class="profile-wrap-item">
              <h3>ユーザーネーム</h3>
              <input type="text" id="dog_name-field"  class="form-control border-input" placeholder="ujita yuki" readonly>
            </div>
            <div class="profile-wrap-item">
              <h3>メールアドレス</h3>
              <input type="text" id="dog_age-field" class="form-control border-input" placeholder="test@test.com" readonly>
            </div>
            <div class="profile-wrap-item">
              <h3>パスワード</h3>
              <input type="text" id="dog_name-field"  class="form-control border-input" placeholder="test1234" readonly>
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>お名前</h3>
              <input type="text" id="dog_name-field"  class="form-control border-input" placeholder="氏田 裕樹" v-model="full_name">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>電話番号</h3>
              <input type="text" id="dog_name-field"  class="form-control border-input" placeholder="09012345678" v-model="tell_phone">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>住所</h3>
              <input type="text" id="dog_name-field"  class="form-control border-input" placeholder="埼玉県さいたま市1-1-1" v-model="address">
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
              <input type="text" id="dog_age-field" class="form-control border-input" placeholder="三井住友銀行" v-model="bank_name"> 
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>支店名</h3>
              <input type="text" id="dog_age-field" class="form-control border-input" placeholder="東京支店" v-model="branch_name">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>口座番号(7桁)</h3>
              <input type="text" id="dog_age-field" class="form-control border-input" placeholder="1234567" v-model="account_number">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>口座種別</h3>
              <input type="text" id="dog_age-field" class="form-control border-input" placeholder="普通" v-model="account_type">
            </div>
            <div class="profile-wrap-item">
              <h3><span>必須</span>口座名義カナ(全角)</h3>
              <input type="text" id="dog_age-field" class="form-control border-input" placeholder="ウジタ ユウキ" v-model="account_name">
            </div>
            <br>
        
        <div class="mt-2 basic_infomation_btn" >
          <a href="#">
          <button type="button" class="btn btn-outline-dark" @click="basic_information_btn">保存</button>
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

<script>
import '@/assets/css/style.css'
import '@/assets/css/user_page.css'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default{
  data: () => {
    return {

      full_name: "",
      tell_phone: "",
      address: "",
      bank_name: "",
      branch_name: "",
      account_number: "",
      account_type: "",
      account_name: "",

    }

  },methods: {
    basic_information_btn () {
      const db = getFirestore()
      const docRef = addDoc(collection(db, 'basic_information'), {
        full_name: this.full_name,
        tell_phone: this.tell_phone,
        address: this.address,
        bank_name: this.bank_name,
        branch_name: this.branch_name,
        account_number: this.account_number,
        account_type: this.account_type,
        account_name: this.account_name,
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
