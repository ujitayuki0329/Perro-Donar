<template>
  <div>
    <!-- <client-only> -->
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>出金申請</h1>
      </div>
      <div class="container">
        <div class="payment-wrap">
          <div class="mypage-wrap">
            <div class="account-information-title">
              <h2>口座情報</h2>
            </div>
            <div class="form-group">
              <p>銀行名</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>支店名</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>口座番号(7桁)</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>口座種別</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>口座名義カナ(全角)</p>
              <input type="text" id="dog_age-field" name="dog_age" class="form-control border-input" value="">
            </div>
          </div>
          <div class="next-button">
            <a href="/payment/pay/transfer_input/" class="btn btn-radius-solid" style="font-weight: bold;">次へ</a>
          </div>
        </div>
      </div>
    </div>
      
    <Footer />
    <Copylight />
    <!-- </client-only> -->
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/payment.css'

export default{}
</script>
