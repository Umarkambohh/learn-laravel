<template>
  <DashboardLayout>
    <V-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-title>Upload Image</v-card-title>
            <v-card-item>
              <v-file-input variant="outlined" label="Upload File" />
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Upload Content</v-card-title>
            <v-card-item>
              <v-text-field v-model="formData.heading" label="Heading" variant="outlined"></v-text-field>
              <v-text-field v-model="formData.desc" label="Paragraph" variant="outlined"></v-text-field>
              <VBtn class="mt-5 float-end" color="primary" @click="submitForm">Update</VBtn>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </V-container>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import axios from "axios";
import { ref } from 'vue';

const formData = ref({
  heading: '',
  desc: '',
});

const submitForm = () => {
  axios.post('/api/banners', formData.value)
    .then((res) => {
      console.log(res);

    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
