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
          <div class="tab-wrap">
              <input id="TAB-01" type="radio" name="TAB" class="tab-switch" checked="checked" /><label class="tab-label" for="TAB-01">MY SPONSER</label>
              <div class="tab-content">
                  <div class="introduce">
                <h2>MY SPONSER</h2>
                <div>
                  <ul class="card-horizontal-list text-center">
                    <li>
                      <a href="/user_page/dog_detail/dog_detail/">
                        <img src="~/assets/img/test.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/dog_detail/dog_detail/">
                        <img src="~/assets/img/test6.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/dog_detail/dog_detail/">
                        <img src="~/assets/img/test3.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/dog_detail/dog_detail/">
                        <img src="~/assets/img/test7.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/dog_detail/dog_detail/">
                        <img src="~/assets/img/test4.jpg">
                        <div>
                          <h3>name</h3>
                          <p>dog bread</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/dog_detail/dog_detail/">
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
                <p>支援額総合計：10,000円</p>
                <a href="/payment/pay/payment_detail" class="btn btn-radius-solid" style="font-weight: bold; margin-bottom:20px">明細詳細</a>
              </div>
              </div>
              <input id="TAB-02" type="radio" name="TAB" class="tab-switch" /><label class="tab-label" for="TAB-02">YOUR SPONSER</label>
              <div class="tab-content">
                <div class="introduce">
                <h2>YOUR SPONSER</h2>
                <ul class="card-horizontal-list text-center">
                    <li>
                      <a href="/user_page/profile/profile/">
                        <img src="~/assets/img/avater.png">
                        <div class="your-sponser">
                          <h3>user_name</h3>
                          <p>一般会員</p>
                          <p>埼玉県</p>
                          <p>掲載数:5件</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/profile/profile/">
                        <img src="~/assets/img/avater.png">
                        <div class="your-sponser">
                          <h3>user_name</h3>
                          <p>一般会員</p>
                          <p>埼玉県</p>
                          <p>掲載数:5件</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/profile/profile/">
                        <img src="~/assets/img/avater.png">
                        <div class="your-sponser">
                          <h3>user_name</h3>
                          <p>一般会員</p>
                          <p>埼玉県</p>
                          <p>掲載数:5件</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/profile/profile/">
                        <img src="~/assets/img/avater.png">
                        <div class="your-sponser">
                          <h3>user_name</h3>
                          <p>一般会員</p>
                          <p>埼玉県</p>
                          <p>掲載数:5件</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/profile/profile/">
                        <img src="~/assets/img/avater.png">
                        <div class="your-sponser">
                          <h3>user_name</h3>
                          <p>一般会員</p>
                          <p>埼玉県</p>
                          <p>掲載数:5件</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/user_page/profile/profile/">
                        <img src="~/assets/img/avater.png">
                        <div class="your-sponser">
                          <h3>user_name</h3>
                          <p>一般会員</p>
                          <p>埼玉県</p>
                          <p>掲載数:5件</p>
                        </div>
                      </a>
                    </li>
                  </ul>
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
