<template>
  <v-list two-line subheader>
    <v-subheader v-text="info.title"></v-subheader>
    <v-list-item v-for="item in info.items" :key="item.name" @click="item">
      <v-list-item-avatar>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      info: {
        title: "INFO",
        items: [
          {
            name: "Email",
            icon: "mdi-email",
            text: "luann@gmail.com"
          },
          {
            name: "Website",
            icon: "mdi-web",
            text: "https://www.linkedin.com/in/luanoliveira"
          },
          {
            name: "Birthday",
            icon: "mdi-cake-variant",
            text: "March 21, 1990"
          },
          {
            name: "Location",
            icon: "mdi-map-marker",
            text: "Joinville, SC, Brazil"
          }
        ]
      }
    };
  }
};
</script>
