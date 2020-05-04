<template>
  <v-app id="principal" class="grey lighten-5">
    <v-content>
      <v-container fill-height>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="3">
            <SidebarContainer class="fill-height" />
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="8" xl="9">
            <ContentContainer class="fill-height" />
          </v-col>
        </v-row>
        <FooterContainer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SidebarContainer from "@/views/resume/sidebar/Container";
import ContentContainer from "@/views/resume/content/Container";
import FooterContainer from "@/views/resume/footer/Container";

export default {
  name: "ResumeContainer",
  components: {
    SidebarContainer,
    ContentContainer,
    FooterContainer
  }
};
</script>