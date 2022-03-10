<template>
  <div>
    <div>
      <h1>Firebase Authentication</h1>
      <div id="auth">
        <button type="button" @click="date">日付取得</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth"

export default {
  data(){
    return{
      email:'ujita.rikako1014@gmail.com',
      password:'test1234',
    }
  },

  methods: {
    date() {
      const format = (date) => {
      const y = date.getFullYear();
      const m = ('00' + (date.getMonth() + 1)).slice(-2);
      const d = ('00' + date.getDate()).slice(-2);
      return `${y}/${m}/${d}`;
    };

    const formatedDate = format(date.toDate());
    console.log(formatedDate); // yyyy/mm/dd
    }
  }
  
}
</script>