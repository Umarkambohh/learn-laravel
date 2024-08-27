<template>
  <DashboardLayout>
    <V-container>
      <v-row>
        <!-- First Column: File Input -->
        <v-col cols="12" md="6">
          <v-card class="h-100">
            <v-card-item>
              <v-file-input label="Upload File" />
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-item>
              <v-text-field label="Heading"></v-text-field>
              <v-text-field label="Paragraph"></v-text-field>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </V-container>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
</script>
