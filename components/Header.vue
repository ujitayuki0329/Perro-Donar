<template>
  <div>
    <client-only>
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
            <div v-if="this.$store.getters['user'].login == false" class="header-nav-item">
              <a href="/auth/register/" class="header-button header-post">新規登録</a>
            </div>
            <div v-if="this.$store.getters['user'].login == false" class="header-nav-item">
              <a class="header-button header-login" @click="open_login_modal">ログイン</a>
            </div>
            <div v-if="this.$store.getters['user'].login == true" @click="click_dropdown" class="header-nav-item">
              <img src="https://placehold.jp/50x50.png" class="header-avatar" />
            </div>
          </nav>
        </div>
        <div v-show="show" class="menu-content">
          <div class="menu-content-wrap">
            <nav class="header-nav">
              <div class="header-nav-item" v-if="this.$store.getters['user'].login == false">
                <a href="/auth/register/" class="header-button header-post">新規登録</a>
              </div>
              <div class="header-nav-item" v-if="this.$store.getters['user'].login == false">
                <a class="header-button header-login" @click="open_login_modal">ログイン</a>
              </div>
              <div class="header-nav-item" v-if="this.$store.getters['user'].login == true">
              <img src="https://placehold.jp/50x50.png" class="header-avatar" />
            </div>
            </nav>
          </div>
          <ul v-if="this.$store.getters['user'].login == true" >
            <li>
                <a href="/user_page/profile/profile/"><i class="fas fa-user" style="font-size:12px;"></i>プロフィール</a>
            </li>
            <li>
                <a href="/user_page/favorite/"><i class="fas fa-heart" style="font-size:12px;"></i>お気に入り</a>
            </li>
            <li>
                <a href="/user_page/sponser/"><i class="fas fa-hands-helping" style="font-size:12px;"></i>スポンサー一覧</a>
            </li>
            <li>
                <a href="/user_page/my_dog/"><i class="fas fa-paw" style="font-size:12px;"></i>MyDog一覧</a>
            </li>
            <li @click="logout"> 
                <a href="#"><i class="fas fa-sign-out-alt" style="font-size:12px;"></i>ログアウト</a>
            </li>
          </ul>
        </div>
      </header>
      <nav id="nav-bar">
        <div v-if="this.$store.getters['user'].login == false" class="nav-bar-title">
          <h1>わんちゃん好きと愛犬をつなぐプラットフォーム！まずは無料の会員登録から</h1>
        </div>
        <div v-if="this.$store.getters['user'].login == true" class="nav-bar-title">
          <h1>{{ user_name }}さん ようこそPerro-Donarへ</h1>
        </div>
      </nav> 
      <Modal v-show="login_modal">
        <div class="form-wrapper">
          <div class="modal-button">
            <button type="button" class="close-button" data-dismiss="modal" aria-label="Close" @click="close_login_modal">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>ログイン</h1>
          <div class="form-wrap">
            <form>      
              <input name="email" type="text" class="feedback-input" placeholder="メールアドレス" v-model="email">
              <input name="password" type="text" class="feedback-input" placeholder="パスワード" v-model="password">   
              <div class="check-button" @click="login">
                <a href="#" class="btn btn-radius-solid" style="font-weight: bold;">ログイン</a>
              </div>
            </form>
          </div>
          <div class="login_footer">
            <p>新規会員登録がお済みでない方は <a href="/auth/register">こちら</a></p>
            <p>パスワードをお忘れの方は <a href="#">こちら</a></p>
          </div>
          <!-- <div class="google-sign-wrap" @click="signInWithGoogle">
            <div class="google-sign-contents">
              <img src="~/assets/img/google-btn.png" alt="">
            </div>
          </div> -->
        </div>
      </Modal>
    </client-only>
  </div>
</template>


<script>
// import Modal from './Modal.vue'
import '@/assets/css/style.css'
import Modal from './Modal'
import {getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,signOut} from "firebase/auth"
import { doc, getDoc,  getFirestore, query, where, collection,onSnapshot,getDocs } from 'firebase/firestore'

export default {
  components: {
    Modal
  },
  computed: {
    user () {
      return this.$store.getters['user']
    },
  },
  data() {
    return {
      user_name: [],

      name: "",
      email: "",
      password: "",
      login_modal: false,
      show: false,
    }
  },
  mounted(){
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      const uid = user.uid;
      
      const db = getFirestore();
      const myInfo = firebase.firestore().collection('users').doc(user.uid).get();
      const myTeam = myInfo.data().id;
      // 同一のteamであるuserにクエリ発行
      const datas = firebase.firestore().collection('users').where('uid', '==', myTeam);

      getDocs(datas).then((snap) => {
        console.log(snap.data())
        // const array = [];
        // console.log(snap.data());
        // array.push(snap.data().name)
        // this.user_name = array
      })
    }


    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     const db = getFirestore();
    //     const q = query(collection(db, 'users'), where('uid', '==', this.uid ))

    //     getDoc(q).then((snap) => {
    //       console.log(snap.data())
    //     })
    //   } else {
    //     console.log(error)
    //   }
    // });
  },

  methods: {
    open_login_modal() {
      this.login_modal = true
    },
    close_login_modal() {
      this.login_modal = false
    },
    click_dropdown() {
      this.show = !this.show
    },
    // signInWithGoogle(){
    //   const auth = getAuth()
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(auth, provider).then((result) => {
    //     this.$router.push({path:'/user_page/profile/profile_edit/'})
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // },
    login (email, password) {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>


