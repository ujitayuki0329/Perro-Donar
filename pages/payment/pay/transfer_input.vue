<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>振込申請金額を入力</h1>
      </div>
      <div class="container">
        <div class="payment-wrap">
          <div class="mypage-wrap">
            <div class="form-group">
              <p>振込可能額</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>振込申請金額</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>振込手数料</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>振込金額</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
          </div>
          <div>
            <p>※振込には2~3日程かかる場合がございます。</p>
          </div>
          <div class="check-button">
            <a href="#" class="btn btn-radius-solid" style="font-weight: bold;" @click="open_contact_modal">確認する</a>
          </div>
        </div>
      </div>
    </div>
    <Modal v-show="transfer_check_modal">
      <div class="form-wrapper">
        <div class="modal-button">
          <button type="button" class="close-button" data-dismiss="modal" aria-label="Close" @click="close_contact_modal">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>振込申請内容確認</h1>
        <div class="form-wrap">
          <div class="transfer-detail">
            <div class="transfer-detail-title">
              <h2>申請内容</h2>
            </div>
            <div class="transfer-detail-content">
              <p>振込申請可能額<span class="account-information">10,000円</span></p>
              <p>振込申請金額<span class="account-information">4,500円</span></p>
              <p>　振込手数料<span class="account-information">460円</span></p>
              <p>実際の振込金額<span class="account-information" style="color:#ff7d6e;">4,040円</span></p>
              <p>振込後の残高<span class="account-information">3,500円</span></p>
            </div>
            <div class="transfer-detail-title">
              <h2>振込先銀行口座</h2>
            </div>
            <div class="transfer-detail-content">
              <p>振込先銀行<span class="account-information">三井住友銀行</span></p>
              <p>支店名<span class="account-information">東京支店</span></p>
              <p>口座番号<span class="account-information">1234567</span></p>
              <p>口座種別<span class="account-information">普通</span></p>
              <p>口座名義<span class="account-information">テストタロウ</span></p>
            </div>
          </div>
          <div class="check-button">
            <a href="/payment/pay/complet" class="btn btn-radius-solid" style="font-weight: bold;">振込申請をする</a>
          </div>
        </div>
      </div>
    </Modal>
    <Footer />
    <Copylight />
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/payment.css'

export default {
  components: {
    Modal: () => import('~/components/Modal')
  },
  
  data() {
    return {
      transfer_check_modal: false,
    }
  },
  methods: {
    open_contact_modal() {
      this.transfer_check_modal = true
    },
    close_contact_modal() {
      this.transfer_check_modal = false
    },
  }
  
}
</script>
