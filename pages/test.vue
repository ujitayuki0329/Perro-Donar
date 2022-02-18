<template>
 <div class="page">
   <label>
     <span>
       お名前:
     </span>
     <input
       type="text"
       v-model="name"
     >
   </label>
   <label>
     <span>
       email:
     </span>
     <input
       type="text"
       v-model="email"
     >
   </label>
   <button
     type="button"
     @click="submit"
   >
     Submit
   </button>
 </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
  data () {
    return {
       name: "",
       email: ""
    }
  },
  methods: {
    submit () {
      const db = getFirestore()
      const docRef = addDoc(collection(db, 'users'), {
        name: this.name,
        email: this.email
      })
    }
  }
}
</script>