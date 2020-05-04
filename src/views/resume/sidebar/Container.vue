<template>
  <v-card dark>
    <Avatar />
    <SectionsContainer />
  </v-card>
</template>

<script>
import SectionsContainer from "@/views/resume/sidebar/sections/Container";
import Avatar from "@/views/resume/sidebar/Avatar";

export default {
  name: "Sidebar",
  components: {
    Avatar,
    SectionsContainer
  }
};
</script>
