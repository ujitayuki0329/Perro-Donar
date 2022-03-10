<template>
  <div>
    <cliant-only>
      <div class="register_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>ユーザー登録</h1>
      </div>
      <div class="register_body">
        <div class="Form">
          <div class="Form-Item">
            <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>ユーザーネーム</p>
            <input type="text" class="Form-Item-Input" placeholder="例）ぺろドナで表示される名前" v-model="name">
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
            <input type="email" class="Form-Item-Input" placeholder="例）example@gmail.com" v-model="email">
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>パスワード</p>
            <input type="text" class="Form-Item-Input" placeholder="例）example1234" v-model="password">
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>パスワード(確認)</p>
            <input type="text" class="Form-Item-Input" placeholder="例）example1234">
          </div>
          <div class="register_btn" @click="register">
            <a href="#" class="btn btn-radius-solid" style="font-weight: bold;">登録する</a>  
          </div>
          <div class="register_footer">
              <p>すでに新規会員登録をお済ませの方は <a href="#" @click="open_contact_modal">こちら</a></p>
          </div>
        </div>
        <!-- <input type="submit" class="Form-Btn" value="登録する"> -->
      </div>
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
              <input name="email" type="text" class="feedback-input" placeholder="メールアドレス" v-model="email">
              <input name="password" type="text" class="feedback-input" placeholder="パスワード" v-model="password">   
              <div class="check-button" @click="login">
                <a href="#" class="btn btn-radius-solid" style="font-weight: bold;" @click="open_contact_modal">ログイン</a>
              </div>
            </form>
          </div>
          <div class="login_footer">
            <p>新規会員登録がお済みでない方は <a href="#" @click="close_contact_modal">こちら</a></p>
            <p>パスワードをお忘れの方は <a href="#">こちら</a></p>
          </div>
        </div>
      </Modal>
    </cliant-only>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import Modal from '~/components/Modal'


export default {
  components: {
    Modal
  },
  computed: {
    user () {
      return this.$store.getters['user']
    }
  },
  
  data() {
    return {
      name:'',
      email: '',
      password: '',
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
    login (email, password) {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    register () {
      this.$store.dispatch('register' , {name: this.name, email: this.email, password: this.password})
    }
  },
}
</script>