<template>
  <div>
    <div>
      <ul>
        <li>{{ users[0] }}</li>
        <li>{{ users[1] }}</li>
        <li>{{ users[2] }}</li>
      </ul>
      <h1>{{ users }}</h1>
    </div>
    <h1>test</h1>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore'


export default {
  data() {
    return{
      users: [],
      // users: {
      //   name: "",
      //   email: ""
      // }
    }
  },
  mounted() {
    const db = getFirestore()
    const getData = collection(db, "users");

    getDocs(getData).then((snapshot) => {
      let array = []
      snapshot.forEach((doc) => {
        let data = doc.data();
        array.push([doc.id, data.name, data.email]);
        // this.users = array
        // console.log(user)
      });
      this.users = array
      console.log(users)
    });

  }
}
</script>