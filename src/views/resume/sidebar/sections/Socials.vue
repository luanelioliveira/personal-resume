<template>
  <v-list subheader>
    <v-subheader v-text="socials.title"></v-subheader>
    <v-list-item v-for="item in socials.items" :key="item.name" @click="item.link">
      <v-list-item-avatar>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "Socials",
  data() {
    return {
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
    };
  }
};
</script>
