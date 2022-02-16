<template>
  <div>
    <!-- <client-only> -->
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>明細詳細</h1>
      </div>
      <div class="container">
        <div class="carender">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>月を選択する</option>
            <option value="1">1月</option>
            <option value="2">2月</option>
            <option value="3">3月</option>
            <option value="4">4月</option>
            <option value="5">5月</option>
            <option value="6">6月</option>
            <option value="7">7月</option>
            <option value="8">8月</option>
            <option value="9">9月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">12月</option>
          </select>
        </div>
        <div class="payment-detail">
          <div class="payment-detail-inner">
            <h1>12月分</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">〇〇さん</th>
                  <td>キャンチョメ</td>
                  <td>2500円</td>
                  <td>2021/12/12</td>
                </tr>
                <tr>
                  <th scope="row">〇〇さん</th>
                  <td>キャンチョメ</td>
                  <td>2500円</td>
                  <td>2021/12/12</td>
                </tr>
                <tr>
                  <th scope="row">〇〇さん</th>
                  <td>キャンチョメ</td>
                  <td>2500円</td>
                  <td>2021/12/12</td>
                </tr>
              </tbody>
            </table>
            <div class="total-price">
              <p>合計　7500円</p>
            </div>
          </div>
        </div>
        <div class="print-btn">
          <a href="#" class="btn btn-radius-solid" style="font-weight: bold;">印刷する</a>
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
