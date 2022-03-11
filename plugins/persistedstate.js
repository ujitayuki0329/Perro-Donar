// import createPersistedState from 'vuex-persistedstate'

// export default ({ store }) => {
//   createPersistedState({
//     key: '認証保持'
//   })(store)
// }

export default async (context) => {
  await context.store.dispatch("nuxtClientInit", context);
};