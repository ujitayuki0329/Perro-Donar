<template>
  <div>
    <header>
      <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <!--ここからメニュー-->
        <div class="menu-content">
            <ul>
                <li>
                    <a href="#"><i class="far fa-user"></i>プロフィール</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-paw"></i>愛犬を掲載する</a>
                </li>
                <li>
                    <a href="#"><i class="far fa-heart"></i>お気に入り</a>
                </li>
                <li>
                    <a href="#"><i class="far fa-handshake"></i>スポンサー一覧</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-dog"></i>My Dog一覧</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-sign-out-alt"></i>ログアウト</a>
                </li>
            </ul>
        </div>
        <!--ここまでメニュー-->
      </div>
  </header>
  </div>
</template>


<style>
.menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    z-index: 90;
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: black;
    position: absolute;
}
.menu-btn span:before {
    bottom: 8px;
}
.menu-btn span:after {
    top: 8px;
}

#menu-btn-check:checked ~ .menu-content {
    left: 0;/*メニューを画面内へ*/
}

#menu-btn-check:checked ~ .menu-btn span {
    background-color: rgba(255, 255, 255, 0);/*メニューオープン時は真ん中の線を透明にする*/
}
#menu-btn-check:checked ~ .menu-btn span::before {
    bottom: 0;
    transform: rotate(45deg);
}
#menu-btn-check:checked ~ .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
}
#menu-btn-check {
    display: none;
}

.menu-content {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%;/*leftの値を変更してメニューを画面外へ*/
    z-index: 80;
    background-color: black;
    transition: all 0.5s;/*アニメーション設定*/
}
.menu-content ul {
    padding: 70px 10px 0;
}
.menu-content ul li {
    border-bottom: solid 1px #ff7d6e;
    list-style: none;
    font-weight: bold;
}

.menu-content ul li:hover{
  background-color: #f8a79e;
  padding-left: 20px;
}

.menu-content ul li i{
  font-size: 20px;
  padding: 10px;
}

.menu-content ul li a {
    display: block;
    width: 100%;
    font-size: 15px;
    box-sizing: border-box;
    color:#ffffff;
    text-decoration: none;
    padding: 30px;
    position: relative;
}
.menu-content ul li a::before {
    content: "";
    width: 7px;
    height: 7px;
    border-top: solid 2px #ffffff;
    border-right: solid 2px #ffffff;
    transform: rotate(45deg);
    position: absolute;
    right: 11px;
    top: 50px;
}
</style>