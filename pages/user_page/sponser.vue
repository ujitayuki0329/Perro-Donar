<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>スポンサー一覧</h1>
      </div>
      <div class="container">
        <div class="sponser-wrap">
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-pills" role="tablist">
              <li :class="{ clickBtn: tab === 1 }" @click="tab = 1">MY SPONSER</li>
              <li :class="{ clickBtn: tab === 2 }" @click="tab = 2">YOUR SPONSER</li>
            </ul>
          </div>
          <div class="content">
            <div v-show="tab === 1" class="content-item">
              <div class="introduce">
                <h2>MY SPONSER</h2>
                <div>
                  <ul class="card-horizontal-list text-center">
                    <li>
                      <a href="/dog-detail">
                        <img src="~/assets/img/test.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test6.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test3.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br>
              <div class="total-place">
                <p>管理者：ujita yuki</p>
                <p>支援額総合計：10,000円</p>
                <a href="/payment/pay/payment_detail" class="btn btn-radius-solid" style="font-weight: bold; margin-bottom:20px">明細詳細</a>
              </div>
            </div>
            <div v-show="tab === 2" class="content-item">
              <div class="introduce">
                <h2>YOUR SPONSER</h2>
                <div>
                  <ul class="card-horizontal-list text-center">
                    <li>
                      <a href="/dog-detail">
                        <img src="~/assets/img/test.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test6.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test3.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test7.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test4.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/img/test5.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <br>
              <div class="total-place">
                <p>管理者：ujita yuki</p>
                <p>支援額合計：10,000円</p>
                <p>出金可能額：10,000円</p>
                <a href="/payment/pay/payment" class="btn btn-radius-solid" style="font-weight: bold; margin-bottom:20px;">出金申請</a>
              </div>
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
import '@/assets/css/list.css'
import '@/assets/css/user_page.css'


export default{
  data: () => {
    return {
      tab: 1,
    }
  },
}
</script>
