<template>
  <div>
    <client-only>
    <Header />
    <div id="container"> 
      <div id="page_title">
        <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>愛犬を掲載する</h1>
      </div>
      <div class="dog-setting-wrap">
        <div class="introduce-wrap">
          <div>
            <div class="form-group">
              <p>わんちゃんのお名前</p>
              <input type="text" id="dog_name-field" name="dog_name" class="form-control border-input" placeholder="ポチ" value="">
            </div>
            <div class="form-group">
              <p>犬種</p>
              <input type="text" id="dog_breed-field" name="dog_breed" class="form-control border-input" placeholder="ボストンテリア" value="">
            </div>
            <div class="form-group">
              <p>年齢</p>
              <div class="cp_ipselect cp_sl01">
                <select required class="eria">
                  <option value="" hidden>指定なし</option>
                  <option value="0歳未満">0歳未満</option>
                  <option value="1歳">1歳</option>
                  <option value="2歳">2歳</option>
                  <option value="3歳">3歳</option>
                  <option value="4歳">4歳</option>
                  <option value="5歳">5歳</option>
                  <option value="6歳">6歳</option>
                  <option value="7歳">7歳</option>
                  <option value="8歳">8歳</option>
                  <option value="9歳">9歳</option>
                  <option value="10歳">10歳</option>
                  <option value="11歳">11歳</option>
                  <option value="12歳">12歳</option>
                  <option value="13歳">13歳</option>
                  <option value="14歳">14歳</option>
                  <option value="15歳">15歳</option>
                  <option value="16歳">16歳</option>
                  <option value="17歳">17歳</option>
                  <option value="18歳">18歳</option>
                  <option value="19歳">19歳</option>
                  <option value="20歳">20歳</option>
                  <option value="20歳以上">20歳以上</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <p>出身地</p>
              <div class="cp_ipselect cp_sl01">
                <select required class="eria">
                  <option value="" hidden>指定なし</option>
                  <option value="1">北海道</option>
                  <option value="2">青森県</option>
                  <option value="3">岩手県</option>
                  <option value="4">宮城県</option>
                  <option value="5">秋田県</option>
                  <option value="6">山形県</option>
                  <option value="7">福島県</option>
                  <option value="8">茨城県</option>
                  <option value="9">栃木県</option>
                  <option value="10">群馬県</option>
                  <option value="11">埼玉県</option>
                  <option value="12">千葉県</option>
                  <option value="13">東京都</option>
                  <option value="14">神奈川県</option>
                  <option value="15">新潟県</option>
                  <option value="16">富山県</option>
                  <option value="17">石川県</option>
                  <option value="18">福井県</option>
                  <option value="19">山梨県</option>
                  <option value="20">長野県</option>
                  <option value="21">岐阜県</option>
                  <option value="22">静岡県</option>
                  <option value="23">愛知県</option>
                  <option value="24">三重県</option>
                  <option value="25">滋賀県</option>
                  <option value="26">京都府</option>
                  <option value="27">大阪府</option>
                  <option value="28">兵庫県</option>
                  <option value="29">奈良県</option>
                  <option value="30">和歌山県</option>
                  <option value="31">鳥取県</option>
                  <option value="32">島根県</option>
                  <option value="33">岡山県</option>
                  <option value="34">広島県</option>
                  <option value="35">山口県</option>
                  <option value="36">徳島県</option>
                  <option value="37">香川県</option>
                  <option value="38">愛媛県</option>
                  <option value="39">高知県</option>
                  <option value="40">福岡県</option>
                  <option value="41">佐賀県</option>
                  <option value="42">長崎県</option>
                  <option value="43">熊本県</option>
                  <option value="44">大分県</option>
                  <option value="45">宮崎県</option>
                  <option value="46">鹿児島県</option>
                  <option value="47">沖縄県</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <p>生年月日</p>
              <input type="date" id="dog-birthday" name="birthday" class="form-control border-input" value="">
            </div>
            <div class="form-group">
              <p>性別</p>
              <input type="radio" name="sex" value="1" style="transform:scale(2.0); margin:10px;" checked="checked"><span style="font-size:12px;">男の子</span>
              <input type="radio" name="sex" value="2" style="transform:scale(2.0); margin:10px;"><span style="font-size:12px;">女の子</span>
            </div>
            <div class="form-group">
              <p>画像アップロード</p>
            </div>
            <div class="container">
              <UploadImages />
            </div>
          </div>
          <br>
          <div>
            <div class="form-group">
              <!-- <p>公開・非公開</p> -->
              <input type="radio" name="release" value="1" style="transform:scale(2.0); margin:10px;" checked="checked"><span style="font-size:12px;">公開</span>
              <input type="radio" name="release" value="2" style="transform:scale(2.0); margin:10px;"><span style="font-size:12px;">非公開</span>
            </div>
          </div>

            
            <br><br>
          

          <div class="nav-tabs-wrapper">
            <ul class="nav nav-pills" role="tablist">
              <li :class="{ clickBtn: tab === 1 }" @click="tab = 1">自己紹介</li>
              <li :class="{ clickBtn: tab === 2 }" @click="tab = 2">スポンサー様へ</li>
            </ul>
          </div>
          <div class="content">
            <div v-show="tab === 1" class="content-item">
              <textarea name="introduce" class="m-form-textarea" placeholder="自己紹介文"></textarea>
            </div>
            <div v-show="tab === 2" class="content-item">
              <textarea name="introduce" class="m-form-textarea" placeholder="スポンサー様へ"></textarea>
            </div>
          </div>
          

          <div class="mt-4">
            <a href="/user_page/my_dog/">
            <button type="button" class="btn btn-outline-dark" style="font-size:12px;">保存</button>
            </a>
            <a href="/">
            <button type="button" class="btn btn-outline-danger" style="font-size:12px;">キャンセル</button>
            </a>
          </div>

          <!-- <div class="mt-5">
            <p>プロフィール編集は<a href="/user_page/profile/profile_edit/">こちら</a>から</p>
          </div> -->
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
import '@/assets/css/user_page.css'

export default{
  data: () => {
    return {
      tab: 1,
    }
  },
}
</script>
