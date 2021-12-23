<template>
  <div>
    <header>
      <h1>Registration</h1>
    </header>
    <div id="form">
      <div class="fish" id="fish"></div>
      <div class="fish" id="fish2"></div>
      <form id="waterform" method="post">
        <div class="formgroup" id="name-form">
            <label for="name">Your name<span style="color:red;">*</span></label>
            <input type="text" id="name" name="name" />
        </div>
        <div class="formgroup" id="email-form">
            <label for="email">Your e-mail<span style="color:red;">*</span></label>
            <input type="email" id="email" name="email" />
        </div>
        <div class="formgroup" id="email-form">
            <label for="email">Password<span style="color:red;">*</span></label>
            <input type="email" id="email" name="email" />
        </div>
        <div class="formgroup" id="email-form">
            <label for="email">Password(確認)<span style="color:red;">*</span></label>
            <input type="email" id="email" name="email" />
        </div>
        <input type="submit" value="Member Registation!" />
      </form>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Sniglet|Raleway:900);

body, html{
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Sniglet', cursive;
}
h1{
  font-weight: normal;
  font-size: 4em;
  font-family: 'Raleway', sans-serif;
  margin: 0 auto;
  margin-top: 30px;
  width: 500px;
  color: #ff7d6e;
  text-align: center;

}

/* Animation webkit */
@-webkit-keyframes myfirst
{
  0% {margin-left: -235px}
  90% {margin-left: 100%;}
  100% {margin-left: 100%;}
}

/* Animation */
@keyframes myfirst
{
  0% {margin-left: -235px}
  70% {margin-left: 100%;}
  100% {margin-left: 100%;}
}

.fish{
  background-image: url('./assets/img/register_dog.png');
  width: 235px;
  height: 104px;
  margin-left: -235px;
  position: absolute; 
  animation: myfirst 24s;
  -webkit-animation: myfirst 24s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
}

#fish{
  top: 120px;
}

#fish2{
  top: 260px;
  animation-delay: 12s;
  -webkit-animation-delay: 12s;
}


header{
  width: 100%;
  height: 160px;
  /* background: url('http://www.geertjanhendriks.nl/codepen/form/golf.png') repeat-x bottom; */
}

#form{
  width: 100%;
  height: 100%; 
  background-color: gray;
  overflow: hidden;
  position: relative;
  
}



form{
  margin: 0 auto;
  width: 500px;
  padding: 40px 0 40px 0;
  color: white;
  position: relative;
}
label, input, textarea{
  display: block; 
}
input, textarea{
  width: 500px; 
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 10px;
  font-family: 'Sniglet', cursive;
  font-size: 1em;
  color: #676767;
  transition: border 0.5s;
  -webkit-transition: border 0.5s;
  -moz-transition: border 0.5s;
  -o-transition: border 0.5s;
  border: solid 3px #ddd;  
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box;
  
}
input:focus, textarea:focus{
  border: solid 3px #ff7d6e;  
}

textarea{
  height: 100px;  
  resize: none; 
  overflow: auto;
}
input[type="submit"]{
  background-color: #ff7d6e;
  color: white;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
  font-size: 1.29em;
  font-family: 'Sniglet', cursive;
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  -o-transition: background-color 0.5s;
  transition: background-color 0.5s;
}
input[type="submit"]:hover{
  background-color: #f8a79e;
  
}
label{
  font-size: 1.5em;
  margin-top: 20px;
  padding-left: 20px;
}
.formgroup, .formgroup-active, .formgroup-error{
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 10.5%;
  transition: background-image 0.7s;
  -webkit-transition: background-image 0.7s;
  -moz-transition: background-image 0.7s;
  -o-transition: background-image 0.7s;
  width: 566px;
  padding-top: 2px;
}

.formgroup{
  background-image: url('http://www.geertjanhendriks.nl/codepen/form/pixel.gif'); 
}
.formgroup-active{
  background-image: url('http://www.geertjanhendriks.nl/codepen/form/octo.png');
}
.formgroup-error{
  background-image: url('http://www.geertjanhendriks.nl/codepen/form/octo-error.png');
  color: red;
}

@media screen and (max-width: 768px) {
form{
  margin: 0 auto;
  width: 100%;
  padding: 40px 0 40px 0;
  color: white;
  position: relative;
}
}
</style>