<template>
  <div>
    <cliant-only>
      <header class="header-3">
        <div class="header-inner">
          <div class="logo">
            <a href="/">
              <img src="~/assets/img/header.logo.png" alt="ヘッダーロゴ">
            </a>
          </div>
          <nav class="header-nav">
            <div class="header-nav-item">
              <form class="form2">
                <input type="search" class="form2-input" placeholder="search" />
                <button class="form2-button"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="header-nav-item">
              <a href="/auth/register/" class="header-button header-post">新規登録</a>
            </div>
            <div class="header-nav-item">
              <a class="header-button header-login" @click="open_contact_modal">ログイン</a>
            </div>
            <div class="header-nav-item">
              <img src="https://placehold.jp/50x50.png" class="header-avatar" />
            </div>
          </nav>
        </div>
      </header>
      <nav id="nav-bar">
        <div class="nav-bar-title">
          <h1>わんちゃん好きと愛犬をつなぐプラットフォーム！まずは無料の会員登録から</h1>
        </div>
      </nav> 
      <Modal v-show="contact_modal">
        <div class="form-wrapper">
          <div class="modal-button">
            <button type="button" class="close-button" data-dismiss="modal" aria-label="Close" @click="close_contact_modal">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>ログイン</h1>
          <div class="form-wrap">
            <form>      
              <input name="email" type="text" class="feedback-input" placeholder="メールアドレス" />
              <input name="password" type="text" class="feedback-input" placeholder="パスワード" />   
              <div class="check-button">
                <a href="#" class="btn btn-radius-solid" style="font-weight: bold;" @click="open_contact_modal">ログイン</a>
              </div>
            </form>
          </div>
          <div class="login_footer">
            <p>新規会員登録がお済みでない方は <a href="/auth/register">こちら</a></p>
            <p>パスワードをお忘れの方は <a href="#">こちら</a></p>
          </div>
          <div class="google-sign-wrap" @click="signInWithGoogle">
            <div class="google-sign-contents">
              <img src="~/assets/img/google-btn.png" alt="">
            </div>
          </div>
        </div>
      </Modal>
    </cliant-only>
  </div>
</template>


<script>
// import Modal from './Modal.vue'
import Modal from './Modal'
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"


export default {
  components: {
    Modal
  },
  
  data() {
    return {
      contact_modal: false,
    }
  },
  methods: {
    open_contact_modal() {
      this.contact_modal = true
    },
    close_contact_modal() {
      this.contact_modal = false
    },
    signInWithGoogle(){
      const auth = getAuth()
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        this.$router.push({path:'/user_page/profile/profile_edit/'})
      }).catch((error) => {
        console.log(error)
      })
    }
  },

  // mounted() {
  //   $(function(){
  //     $(".menu-btn").click(function(){
  //       $(".sp-menu").slideToggle(200);
  //     });
  //   });
  // } 
}
</script>

<style>
.header-3 {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
}

.header-nav {
  display: flex;
  align-items: center;
}

.header-nav-item {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.logo img {
  width: 120px;
  height: 50px;
}

.header-button {
  box-sizing: border-box;
  display: inline-block;
  padding: 0.5em 1.2em;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

.header-login {
  color: #999;
}

.header-post {
  font-weight: bold;
  color: #fff;
  background: #ff7d6e;
  border: 1px #ff7d6e solid;
  border-radius: 3px;
}

.header-avatar {
  width: 36px;
  height: 36px;
  cursor: pointer;
  border-radius: 50%;
}

.form2 {
  position: relative;
}

.form2-input {
  box-sizing: border-box;
  width: 140px;
  height: 28px;
  padding: 0 8px 0 30px;
  margin: 5px 0;
  font-size: 12px;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 5px;
  outline: 0;
  transition: 0.3s;
  -webkit-appearance: none;
}

.form2-input:focus {
  border: 1px solid #ff7d6e;
}

.form2-button {
  position: absolute;
  top: 0;
  left: 2px;
  box-sizing: content-box;
  width: 30px;
  height: 38px;
  padding: 0;
  font-size: 16px;
  vertical-align: vertical-align;
  pointer-events: none;
  background: inherit;
  border: 0;
  opacity: 0.54;
}

@media screen and (max-width: 480px) {
  .form2 {
    display: none;
  }
  .header-button{
    font-size: 9px;
  }
}
</style>



