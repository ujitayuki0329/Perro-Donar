<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>振込完了</h1>
      </div>
      <div class="container">
        <div class="complet-wrap">
          <p>振込申請が完了しました。<br>登録済みのメールアドレスに返信しましたのでご確認ください。</p>
          <p><a href="/">TOP画面へ戻る</a></p>
        </div>
      </div>
    </div>
    </client-only>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/payment.css'

export default{}
</script>
