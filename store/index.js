import {} from "@/plugins/firebase.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { data } from "jquery";

export const state = () => ({
 user: {
   uid: '',
   email: '',
   login: false,
 },
})

export const mutations = {
 getData (state, payload) {
   state.user.uid = payload.uid
   state.user.email = payload.email
 },
 logOut (state) {
   state.user.uid = ''
   state.user.email = ''
   state.user.login = false
 },
 switchLogin (state) {
   state.user.login = true
 },
}

export const getters = {
 user: state => {
   return state.user
 }
}

export const actions = {
  login({ dispatch }, payload) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then(user => {
         console.log('成功！')
         dispatch('checkLogin')
         setTimeout(() => {
           let url = '/?id=' + user.user.uid
           window.location.href = url
         }, 1000)
       }).catch((error) => {
         alert(error)
       })
  },
  checkLogin ({ commit }) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        commit('getData', { uid: user.uid, email: user.email })
        commit('switchLogin')
      } else {
        console.log('ユーザー取得できませんでした。')
      }
    });
  },
  logout({ commit }){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('ログアウト')
      commit('logOut')
      window.location.href = '/'
    }).catch((error) => {
      console.log(error)
    })
  },

  register ({ dispatch, commit }, payload) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user)
        dispatch('checkLogin')
         setTimeout(() => {
           let url = '/?id=' + user.user.uid
           window.location.href = url
        }, 1000)
        const db = getFirestore()
        const docRef = addDoc(collection(db, 'users'), {
          id: user.uid,
          name: payload.name,
          email: payload.email,
          password: payload.password,
          created_at: now()
        })
       .catch(function (error) {
          console.log('ユーザー')
          console.log({'code':error.code, 'message':error.message})
        })
      })
      dispatch('checkLogin')

      setTimeout(() => {
        let url = '/user_page/profile/profile/?id=' + user.user.uid
        window.location.href = url
      }, 1000)
  },
  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    createPersistedState()(this);
  }
};
