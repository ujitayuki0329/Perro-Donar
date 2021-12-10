<template>
  <div>
    <cliant-only>
      <div class="footer-bg">
        <div class="container pt-4 pt-md-5">
          <!-- .row -->
          <div id="footer-index" class="row pt-4">
            <ul class="col list-unstyled">
              <li class="footer-menu"><a href="#">MENU</a></li>
              <ul class="list-unstyled">
                <li><a href="/other/about">ぺろドナとは？</a></li>
                <li><a href="#" @click="open_contact_modal">お問い合わせ</a></li>
                <!-- <li><a href="#">お問い合わせ</a></li> -->
                <li><a href="/other/news">ペットニュース</a></li>
                <li><a href="/other/user_guide/">ご利用ガイド</a></li>
              </ul>
            </ul>
      
            <ul class="col list-unstyled">
              <li class="footer-menu"><a href="#">MENU</a></li>
              <ul class="list-unstyled">
                <li><a href="/user_page/publishe/">愛犬を掲載する</a></li>
                <li><a href="/user_page/profile/profile_edit">プロフィール編集</a></li>
                <li><a href="/user_page/favorite/">お気に入り</a></li>
                <li><a href="/user_page/sponser/">スポンサー一覧</a></li>
                <li><a href="/user_page/my_dog/">MY DOG一覧</a></li>
                <!-- <li><a href="#">SUBMENU</a></li> -->
              </ul>
            </ul>
      
            <ul class="col list-unstyled">
                <li class="footer-menu"><a href="#">MENU</a></li>
                <ul class="list-unstyled">
                  <li><a href="/other/terms_of_service/">利用規約</a></li>
                  <li><a href="/other/commercial/">特定商取引に基ずく表記</a></li>
                  <li><a href="/other/privacy_policy/">プライバシーポリシー</a></li>
                </ul>
            </ul>
          </div><!-- /.footer-index -->
      
          <div id="footer-logo" class="mt-2 mt-sm-4">
            <div class="text-center d-sm-flex align-items-sm-center">
              <a class="mr-4" href="#"><img src="~/assets/img/header.logo1.png" alt="ぺろドナ" height="50"></a>
              <p class="mb-0">好きなわんちゃんのスポンサーになろう</p>
            </div>
            <div class="sns-wrap">
              <div class="footer-sns">
                <a href="#" target="_blank" rel="nofollow" class="d-flex align-items-center"><img src="~/assets/img/facebook.png"
                    alt="Official Facebook Page"></a>
              </div>
              <div class="footer-sns">
                <a href="https://twitter.com/Perro_Donar" target="_blank" rel="nofollow" class="d-flex align-items-center"><img
                    src="~/assets/img/titter.png" alt="Official Twitter"></a>
              </div>
            </div>
            <div style="text-align:right">
              <img src="~/assets/img/dog-img/ボストンテリア.png" width="300" height="200" alt="ボストンテリア">
            </div>
          </div><!-- .row -->
        </div><!-- .container -->
      </div>
      <Modal v-show="contact_modal">
        <div class="form-wrapper">
          <div class="modal-button">
            <button type="button" class="close-button" data-dismiss="modal" aria-label="Close" @click="close_contact_modal">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1>お問い合わせ</h1>
          <div class="form-wrap">
            <form>      
              <input name="name" type="text" class="feedback-input" placeholder="お名前" />   
              <input name="email" type="text" class="feedback-input" placeholder="メールアドレス" />
              <textarea name="text" class="feedback-input" placeholder="お問合せ内容"></textarea>
              <div class="button-panel">
                <input type="submit" class="button" title="Sign In" value="送信">
              </div>
            </form>
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
  }
  
}
</script>