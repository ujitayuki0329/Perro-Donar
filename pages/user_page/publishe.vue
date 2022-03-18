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
              <input type="text" id="dog_name-field" class="form-control border-input" placeholder="ポチ" v-model="dog_name">
            </div>
            <div class="form-group">
              <p>犬種</p>
              <input type="text" id="dog_breed-field" name="dog_breed" class="form-control border-input" placeholder="ボストンテリア" value="" v-model="dog_bread">
            </div>
            <div class="form-group">
              <p>年齢</p>
              <div class="cp_ipselect cp_sl01">
                <select required class="eria" v-model="dog_age">
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
                <select required class="eria" v-model="dog_birthprace">
                  <option value="" hidden>指定なし</option>
                  <option value="北海道">北海道</option>
                  <option value="青森県">青森県</option>
                  <option value="岩手県">岩手県</option>
                  <option value="宮城県">宮城県</option>
                  <option value="秋田県">秋田県</option>
                  <option value="山形県">山形県</option>
                  <option value="福島県">福島県</option>
                  <option value="茨城県">茨城県</option>
                  <option value="栃木県">栃木県</option>
                  <option value="群馬県">群馬県</option>
                  <option value="埼玉県">埼玉県</option>
                  <option value="千葉県">千葉県</option>
                  <option value="東京都">東京都</option>
                  <option value="神奈川県">神奈川県</option>
                  <option value="新潟県">新潟県</option>
                  <option value="富山県">富山県</option>
                  <option value="石川県">石川県</option>
                  <option value="福井県">福井県</option>
                  <option value="山梨県">山梨県</option>
                  <option value="長野県">長野県</option>
                  <option value="岐阜県">岐阜県</option>
                  <option value="静岡県">静岡県</option>
                  <option value="愛知県">愛知県</option>
                  <option value="三重県">三重県</option>
                  <option value="滋賀県">滋賀県</option>
                  <option value="京都府">京都府</option>
                  <option value="大阪府">大阪府</option>
                  <option value="兵庫県">兵庫県</option>
                  <option value="奈良県">奈良県</option>
                  <option value="和歌山県">和歌山県</option>
                  <option value="鳥取県">鳥取県</option>
                  <option value="島根県">島根県</option>
                  <option value="岡山県">岡山県</option>
                  <option value="広島県">広島県</option>
                  <option value="山口県">山口県</option>
                  <option value="徳島県">徳島県</option>
                  <option value="香川県">香川県</option>
                  <option value="愛媛県">愛媛県</option>
                  <option value="高知県">高知県</option>
                  <option value="福岡県">福岡県</option>
                  <option value="佐賀県">佐賀県</option>
                  <option value="長崎県">長崎県</option>
                  <option value="熊本県">熊本県</option>
                  <option value="大分県">大分県</option>
                  <option value="宮崎県">宮崎県</option>
                  <option value="鹿児島県">鹿児島県</option>
                  <option value="沖縄県">沖縄県</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <p>生年月日</p>
              <input type="date" id="dog-birthday" name="birthday" class="form-control border-input" value="" v-model="dog_birthday">
            </div>
            <div class="form-group">
              <p>性別</p>
              <input type="radio" name="sex" value="1" style="transform:scale(2.0); margin:10px;" checked="checked" v-model="dog_sex"><span style="font-size:12px;">男の子</span>
              <input type="radio" name="sex" value="2" style="transform:scale(2.0); margin:10px;" v-model="dog_sex"><span style="font-size:12px;">女の子</span>
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
              <input type="radio" name="release" value="1" style="transform:scale(2.0); margin:10px;" checked="checked" v-model="status"><span style="font-size:12px;">公開</span>
              <input type="radio" name="release" value="2" style="transform:scale(2.0); margin:10px;" v-model="status"><span style="font-size:12px;">非公開</span>
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
              <textarea name="introduce" class="m-form-textarea" placeholder="自己紹介文" v-model="dog_introduce"></textarea>
            </div>
            <div v-show="tab === 2" class="content-item">
              <textarea name="introduce" class="m-form-textarea" placeholder="スポンサー様へ" v-model="dog_tosponser"></textarea>
            </div>
          </div>
          

          <div class="mt-4">
            <a href="#">
            <button type="button" class="btn btn-outline-dark" style="font-size:12px;" @click="dog_publish_btn">保存</button>
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
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default{
  data: () => {
    return {
      tab: 1,

      dog_name: "",
      dog_bread: "",
      dog_age: "",
      dog_birthprace: "",
      dog_birthday: "",
      dog_sex: "",
      dog_img: "",
      status: "",
      dog_introduce: "",
      dog_tosponser: "",
    }
  },
  methods: {
    dog_publish_btn(){
      const db = getFirestore()
      const docRef = addDoc(collection(db, 'publish'), {
        // id: user.uid,
        dog_name: this.dog_name,
        dog_bread: this.dog_bread,
        dog_age: this.dog_age,
        dog_birthprace: this.dog_birthprace,
        dog_birthday: this.dog_birthday,
        dog_sex: this.dog_sex,
        // dog_img: "",
        status: this.status,
        dog_introduce: this.dog_introduce,
        dog_tosponser: this.dog_tosponser,
        timpstamp: serverTimestamp(),
      })
      .catch(function (error) {
        console.log('掲載できませんでした。')
        console.log({'code':error.code, 'message':error.message})
      })

      setTimeout(() => {
        let url = '/user_page/my_dog/'
        window.location.href = url
      }, 1000)
    }
  }
}
</script>
