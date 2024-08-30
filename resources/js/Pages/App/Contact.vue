<template>
  <app-layout>
    <V-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-item>
              <!-- <v-file-input variant="outlined" label="Upload File" /> -->
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </V-container>
  </app-layout>
</template>

<script setup>
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
