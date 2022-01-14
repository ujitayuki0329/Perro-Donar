<template>
  <div>
    <div class="register_title">
      <h1><i class="fas fa-paw icon" style="color:#ff7d6e; margin-top:20px;"></i>ユーザー登録</h1>
    </div>
    <div class="register_body">
      <div class="Form">
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>氏名</p>
          <input type="text" class="Form-Item-Input" placeholder="例）山田太郎">
        </div>
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
          <input type="email" class="Form-Item-Input" placeholder="例）example@gmail.com">
        </div>
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>パスワード</p>
          <input type="email" class="Form-Item-Input" placeholder="例）example1234">
        </div>
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>パスワード(確認)</p>
          <input type="email" class="Form-Item-Input" placeholder="例）example1234">
        </div>
        <div class="register_btn">
          <a href="/" class="btn btn-radius-solid" style="font-weight: bold; margin-bottom:20px;">登録する</a>  
        </div>
        <div class="register_footer">
            <p>すでに新規会員登録をお済ませの方は <a href="#">こちら</a></p>
          </div>
    </div>
      
      <!-- <input type="submit" class="Form-Btn" value="登録する"> -->
    </div>
  </div>
</template>

<style>
input:focus {
  outline: solid 2px #ff7d6e;
}
.register_title{
  text-align: center;
}
.register_body{
  width: 80%;
  margin: 0 auto;
  /* background-color: #ddd; */
}
.Form {
  margin-top: 20px;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.register_btn{
  text-align: center;
  margin: 20px;
}
.register_footer{
  text-align: center;
}
.Form-Item {
  border-top: 1px solid #ddd;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
.Form-Item:nth-child(5) {
  border-bottom: 1px solid #ddd;
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #ff7d6e;
  color: #fff;
  font-size: 14px;
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #ff7d6e;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .Form {
    padding:10px;
  }
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  }
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
  .register_body{
    width: 100%;
  }
}
</style>