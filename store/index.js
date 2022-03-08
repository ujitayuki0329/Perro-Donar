import {} from "@/plugins/firebase.js";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { getFirestore, collection, getDog, addDog } from "firebase/store";

export const state = () => ({
  isLoggedIn: false, // ログイン状態
  user: {},          // ログイン情報
});

export const mutations = {};

// stateの内容を直接とるのではなくgetterを通して取得する方が良い。
export const getters = {
  isAuthenticated: (state) => !!state.isLoggedIn, // ログイン状態
  currentUserInfo: (state) => state.user,         // ログイン情報
};

export const actions = {
  firebaseAuthLogin({ state }, loginInfo) {
    if (!loginInfo.loginMailAddress || !loginInfo.loginPassword) return null;
    signInWithEmailAndPassword(
      auth,
      loginInfo.loginMailAddress,
      loginInfo.loginPassword
    )
      .then((userCredential) => {
        const user = userCredential.user;
        // ログイン成功
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ログイン失敗
      });
  },
  firebaseAuthLogout({ state }) {
    signOut(auth)
      .then(() => {
        state.isLoggedIn = false;
        // ログアウト成功
      })
      .catch((error) => {
        // ログアウト失敗
      });
  },
  setAuthChangedListener({ commit }) {
    onAuthStateChanged(auth, (user) => {
      user = user ? user : {};
      state.user = user;
      state.isLoggedIn = user.uid ? true : false;
    });
  },
};
