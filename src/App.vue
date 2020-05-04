<template>
  <v-app>
    <v-content>
      <ResumeContainer />
    </v-content>
  </v-app>
</template>

<script>
import ResumeContainer from "@/views/resume/Container";

export default {
  name: "App",
  components: {
    ResumeContainer
  },
  data() {
    return {};
  }
};
</script>
