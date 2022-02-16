<template>
  <div>
    <!-- <client-only> -->
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>チャットルーム</h1>
      </div>
      <div class="container">
        <div class="chat-wrap">
          <div class="chat-content"> 
            
          </div>
          <div class="chat-send-container">
            <input type="text" class="chat-send-container-inner">
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
import '@/assets/css/chat.css'

export default{}
</script>
