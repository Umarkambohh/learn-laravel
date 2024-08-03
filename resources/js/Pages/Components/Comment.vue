<template>
  <div>
    <form @submit.prevent="submitForm" style="margin-top: 60px;">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email">
      
      <label for="comment">Comment:</label>
      <input type="text" id="comment" v-model="formData.comment">

      <button type="submit">Submit</button>
    </form>

    <button @click="getComments">Get Comments</button>

    <div v-for="comment in comments" :key="comment.id">
      <span>{{ comment.name }}</span> <br>
      <span>{{ comment.email }}</span> <br>
      <span>{{ comment.comment }}</span> <br>
      <button @click="deleteComment(comment.id)">Delete</button>
      <button @click="setEdit(comment)">Update</button>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const comments = ref([]);
const editId = ref(null);

const formData = ref({
  name: '',
  email: '',
  comment: '',
});

const submitForm = () => {
  if (editId.value) {
    updateComment(editId.value);
  } else {
    createComment();
  }
};

const createComment = () => {
  axios.post('/api/comments', formData.value)
    .then((res) => {
      comments.value.unshift(res.data);
      clearForm();
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateComment = (id) => {
  axios.put(`/api/comments/${id}`, formData.value)
    .then((res) => {
      const index = comments.value.findIndex(comment => comment.id === id);
      if (index !== -1) {
        comments.value.splice(index, 1, res.data);
      }
      clearForm();
      editId.value = null;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getComments = () => {
  axios.get('/api/comments')
    .then((res) => {
      comments.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
getComments();

const deleteComment = (id) => {
  axios.delete(`/api/comments/${id}`)
    .then((res) => {
      comments.value = comments.value.filter(comment => comment.id !== id);
    })
    .catch((error) => {
      console.log(error);
    });
};

const setEdit = (comment) => {
  formData.value = { ...comment };
  editId.value = comment.id;
};

const clearForm = () => {
  formData.value = {
    name: '',
    email: '',
    comment: '',
  };
};
</script>
