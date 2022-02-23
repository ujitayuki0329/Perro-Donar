<template>
  <div>
    <div>
      <h1>Firebase Authentication</h1>
      <div id="auth">
        <button type="button" @click="signInWithGoogle">Googleでログイン</button>
      </div>
      <div id="auth">
        <button type="button" @click="SignUp">ユーザー作成</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth"

export default {
  data(){
    return{
      email:'ujita.rikako1014@gmail.com',
      password:'test1234',
    }
  },

  methods: {
    signInWithGoogle(){
      const auth = getAuth()
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        this.$router.push({path:'/'})
      }).catch((error) => {
        console.log(error)
      })
    },
    SignUp(){
      const auth = getAuth()
      createUserWithEmailAndPassword(auth,this.email,this.password).then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message)
        console.log(error)
      })
    }
  }
  
}
</script>