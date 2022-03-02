<template>
  <div>
    <cliant-only>
      <Header />
      <div id="container"> 
        <div id="page_title">
          <h1><i class="fas fa-paw icon" style="color:#ff7d6e;"></i>検索</h1>
        </div>
        <div class="serch-container">
          <div class="search-title">
            <h1>キーワード</h1>
          </div>
          <div class="freeword-box">
            <input type="text" placeholder="キーワードを入力してください。" class="form-control">
          </div>
          <div class="search-title">
            <h1>会員種別</h1>
          </div>
          <div class="cp_ipselect cp_sl01">
            <select required class="eria">
              <option value="" hidden>指定なし</option>
              <option value="1">一般会員</option>
              <option value="2">愛護団体</option>
            </select>
          </div>
          <div class="search-title">
            <h1>対象地域</h1>
          </div>
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
          <div class="search-title">
            <h1>犬種</h1>
          </div>
          <div class="cp_ipselect cp_sl01">
            <select required class="eria">
              <option value="" hidden>指定なし</option>
              <option>ジャーマンシェパード</option>
              <option>ブルドッグ</option>
              <option>プードル</option>
              <option>ラブラドールレトリバー</option>
              <option>ゴールデンレトリバー</option>
              <option>チワワ</option>
              <option>ダックスフンド</option>
              <option>シベリアンハスキー</option>
              <option>ロットワイラー</option>
              <option>フレンチブルドッグ</option>
              <option>イングリッシュ・グレイハウンド</option>
              <option>グレート・デン</option>
              <option>ポメラニアン</option>
              <option>シーズー</option>
              <option>マルチーズ</option>
              <option>キャバリア</option>
              <option>ドーベルマン</option>
              <option>バーニーズ</option>
              <option>コーギー</option>
              <option>ボストンテリア</option>
              <option>ボーダーコリー</option>
              <option>ニューファンドランド</option>
              <option>セントバーナード</option>
              <option>バセット・ハウンド</option>
              <option>アラスカン・マラミュート</option>
              <option>チャウチャウ</option>
              <option>ビション・フリーゼ</option>
              <option>スタッフォードシャー・ブル・テリア</option>
              <option>チャイニーズ・クレステッド・ドッグ</option>
              <option>ジャック・ラッセル</option>
              <option>ブル・テリア</option>
              <option>アイリッシュ・セッター</option>
              <option>イングリッシュ・スプリンガー・スパニエル</option>
              <option>イングリッシュ・コッカー・スパニエル</option>
              <option>バセンジー</option>
              <option>アメリカン・スタッフォード・シャー</option>
              <option>アイリッシュ・ウルフハウンド</option>
              <option>アフガン・ハウンド</option>
              <option>ジャーマン・ショートヘアード・ポインター</option>
              <option>エアデール・テリア</option>
              <option>イタリアン・グレイハウンド</option>
              <option>イングリッシュ・ポインター</option>
              <option>ピット・ブル</option>
              <option>イタリアン・コルソ・ドッグ</option>
              <option>サモエド</option>
              <option>Sarabi dog</option>
              <option>トイ・プードル</option>
              <option>ピンシャー</option>
              <option>ラブラドゥードル</option>
              <option>カンガール・ドッグ</option>
              <option>その他</option>
            </select>
          </div>
          <div class="search-title">
            <h1>性別</h1>
          </div>
          <div class="cp_ipselect cp_sl01">
            <select required class="eria">
              <option value="" hidden>指定なし</option>
              <option value="1">男の子</option>
              <option value="2">女の子</option>
            </select>
          </div>
        </div>
        <div class="register_btn">
          <a href="/list/search/" class="btn btn-radius-solid" style="font-weight: bold;">検索</a>  
        </div>
      </div>
      <Footer />
    </cliant-only>
  </div>
</template>

<script>
import '@/assets/css/style.css'

export default{}
</script>