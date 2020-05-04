<template>
  <v-card flat>
    <InfoSection />
    <SocialsSection />
  </v-card>
</template>

<script>
import InfoSection from "@/views/resume/sidebar/sections/Info";
import SocialsSection from "@/views/resume/sidebar/sections/Socials";

export default {
  name: "Sections",
  components: {
    InfoSection,
    SocialsSection
  },
  data() {
    return {
      sections: {
        socials: {
          title: "SOCIALS",
          items: [
            {
              icon: "mdi-github-circle",
              text: "github.com/luanelioliveira",
              link: "https://github.com/luanelioliveira"
            },
            {
              icon: "mdi-linkedin-box",
              text: "linkedin.com/in/luanoliveira",
              link: "https://linkedin.com/in/luanoliveira"
            },
            {
              icon: "mdi-twitter",
              text: "twitter.com/luanelioliveira",
              link: "https://twitter.com/luanelioliveira"
            },
            {
              icon: "mdi-instagram",
              text: "instagram.com/luanelioliveira",
              link: "https://instagram.com/luanelioliveira"
            }
          ]
        }
      }
    };
  }
};
</script>
