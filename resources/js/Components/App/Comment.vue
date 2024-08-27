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

  <button @click="getComment">get comments</button>

  <div v-for="comment in comments">
    <span>{{ comment.name }}</span> <br>
    <span>{{ comment.email }}</span> <br>
    <span>{{ comment.comment }}</span> <br>
    <button @click="deleteComment(comment.id)">Delete</button>
    <button>Update</button>
    <hr>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios'

const comments = ref([]);

const formData = ref({
  name: '',
  email: '',
  comment: '',
});

const submitForm = () => {
  axios.post('/api/comments', formData.value)
    .then((res) => {
      comments.value.unshift(res.data);
      formData.value = []
    })
    .catch((error) => {
      console.log(error);
    });
}

const getComment = () => {
  axios.get('/api/comments')
    .then((res) => {
      comments.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
getComment();

const deleteComment = (id) => {
  axios.delete(`/api/comments/${id}`)
    .then((res) => {
      comments.value = comments.value.filter((comment) => {
        return comment.id !== id
      })
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};


</script>