<template>
  <app-layout>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email">

      <button type="submit">Submit</button>
    </form>
    <button @click="getUsers">get</button>

    <div v-for="user in users">
      <span>{{ user.name }}</span> <br>
      <span>{{ user.email }}</span>
      <hr>
    </div>
  </app-layout>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'

const form = ref({
  name: '',
  email: '',
});

const users = ref([]);

const submitForm = () => {
  axios.post('/api/user', form)
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
</script>