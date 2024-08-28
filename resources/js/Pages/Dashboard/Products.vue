<template>
  <DashboardLayout>
    <V-container>
      <v-row>
        <!-- First Column: File Input -->
        <v-col cols="12" md="12">
          <v-card class="h-100">
            <v-card-title>Add New Product</v-card-title>
            <v-card-item>
              <v-file-input variant="outlined" label="Upload File" />
              <v-text-field label="Heading" variant="outlined"></v-text-field>
              <v-text-field label="Paragraph" variant="outlined"></v-text-field>
              <VBtn class="mt-5 float-end" color="primary">Update</VBtn>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <ProductCard />
        </v-col>
      </v-row>
    </V-container>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import ProductCard from "@/Components/App/ProductCard.vue";
</script>