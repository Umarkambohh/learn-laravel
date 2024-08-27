<!-- <template>
    <app-layout>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name">
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
        <label>password:</label>
        <input v-model="formData.password">
  
        <button type="submit">Submit</button>
      </form>
      <button @click="getUsers">get</button>
  
      <div v-for="user in users">
        <span>{{ user.name }}</span> <br>
        <span>{{ user.email }}</span>
        <hr>
      </div>
  
      <Comment />
    </app-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'
  import Comment from './Components/Comment.vue';
  
  
  const formData = ref({
    name: '',
    email: '',
    password: '',
  });
  
  const users = ref([]);
  
  const submitForm = () => {
    console.log(formData.value);
    axios.post('/api/user', formData.value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  const getUsers = () => {
    axios.get('/api/user')
      .then((res) => {
        users.value = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  </script> -->

  <template></template>
  <script></script>