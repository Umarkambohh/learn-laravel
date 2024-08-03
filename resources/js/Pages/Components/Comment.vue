<template>
    <form @submit.prevent="submitForm" style="margin-top: 60px;">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
        <label>comment:</label>
        <input v-model="formData.comment">

        <button type="submit">Submit</button>
    </form>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios'

const formData = ref({
  name: '',
  email: '',
  comment: '',
});

const comments = ref([]);

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

const getComment = () => {
  axios.get('/api/user')
    .then((res) => {
      users.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>