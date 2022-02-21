<template>
  <div>
    <div>
      <h1>Firebase Authentication</h1>
      <div id="auth">
        <button type="button" @click="signInWithGoogle">Googleでログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

export default {
  methods: {
    signInWithGoogle(){
      const auth = getAuth()
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        this.$router.push({path:'/'})
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  
}
</script>