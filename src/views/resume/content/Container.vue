<template>
  <v-card class="pa-4">
    <Me />
    <Experiences />
    <Educations />
    <Certificates />
  </v-card>
</template>

<script>
import Me from "@/views/resume/content/Me";
import Experiences from "@/views/resume/content/Experiences";
import Educations from "@/views/resume/content/Educations";
import Certificates from "@/views/resume/content/Certificates";

export default {
  name: "Content",
  components: {
    Me,
    Experiences,
    Educations,
    Certificates
  }
};
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
