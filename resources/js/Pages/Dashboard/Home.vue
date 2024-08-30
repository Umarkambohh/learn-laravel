<template>
  <dashboard-layout>
    <V-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-title>Upload Image</v-card-title>
            <v-card-item>
              <v-file-input @change="onFileChange" variant="outlined" label="Upload File" />
              <v-text-field v-model="bannerData.heading" label="Heading" variant="outlined"></v-text-field>
              <v-text-field v-model="bannerData.desc" label="Paragraph" variant="outlined"></v-text-field>
              <VBtn class="mt-5 float-end" color="primary" @click="submitForm">Update</VBtn>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Upload Content</v-card-title>
            <v-card-item>

            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </V-container>
  </dashboard-layout>
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue';

const bannerData = ref({
  img: null,
  heading: '',
  desc: '',
});

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    bannerData.value.img = file;
  }
};

const submitForm = () => {
  axios.post('/api/banners', bannerData.value, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      console.log('Success:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
</script>
