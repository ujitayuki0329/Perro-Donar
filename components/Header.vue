<template>
  <div>
    <cliant-only>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src="~/assets/img/header.logo.png" alt="ヘッダーロゴ" height="80"></a>
          <button class="navbar-toggler menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="collapse navbar-collapse sp-menu" id="navbarSupportedContent">
            <!-- <form class="d-flex">
              <input class="form-control me-2" type="search" aria-label="Search" placeholder="フリーワードを入力">　
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/user_page/publishe/"><i class="fas fa-paw icon"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/user_page/favorite"><i class="fas fa-heart icon"></i></a>
              </li>
            </ul>
            <div class="user-button">
            <div class="test">
              <a href="/auth/register/" class="btn btn-outline-danger">会員登録</a>
              <a href="#" class="btn btn-outline-info" @click="open_contact_modal">ログイン</a>
              <!-- <a href="#" class="btn btn-outline-danger" @click="open_register_modal">会員登録</a>
              <a href="#" class="btn btn-outline-info" @click="open_login_modal">ログイン</a> -->
            </div>
            </div>
          </div>
        </div>
      </nav>
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
        </div>
      </Modal>
    </cliant-only>
  </div>
</template>


<script>
// import Modal from './Modal.vue'
import Modal from './Modal'


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



