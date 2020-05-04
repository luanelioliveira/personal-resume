<template>
  <v-card flat tile>
    <v-card-title>
      <span class="display-1 font-weight-thin">Licenças e Certificações</span>
    </v-card-title>

    <v-card flat tile v-for="certificate in certificates" :key="certificate.id">
      <v-list-item three-line>
        <v-list-item-avatar>
          <v-img :src="certificate.company.logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title font-weight-bold">{{certificate.title}}</v-list-item-title>

          <v-list-item-subtitle class="subtitle-1">
            <strong>{{certificate.company.name}}</strong>
          </v-list-item-subtitle>

          <v-list-item-subtitle class="mb-2 font-weight-light caption">
            <span>{{certificate.period}}</span>
          </v-list-item-subtitle>

          <v-list-item-subtitle class="body-2">{{certificate.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Certificates",
  data() {
    return {
      certificates: [
        {
          id: 1,
          company: {
            name: "Codenation",
            logo: require("@/assets/img/codenation.png")
          },
          title: "Aceleração para Desenvolvimento em Java e VueJS",
          period: "Emitido em out. de 2019",
          description: ""
        },
        {
          id: 2,
          company: {
            name: "Software Zen",
            logo: require("@/assets/img/softwarezen.png")
          },
          title: "A Arte da Gestão de Software",
          period: "Emitido em mai. de 2019",
          description: ""
        },
        {
          id: 3,
          company: {
            name: "Wildtech - Start wild, keep wild",
            logo: require("@/assets/img/wildtech.png")
          },
          title: "Product Owner",
          period: "Emitido em mar. de 2019",
          description: ""
        },
        {
          id: 4,
          company: {
            name: "CertiProf®",
            logo: require("@/assets/img/certprof.jpeg")
          },
          title: "Scrum Foundation Professional Certificate",
          period: "Emitido em jan. de 2019",
          description: ""
        },
        {
          id: 5,
          company: {
            name: "Agile Institute Brazil",
            logo: require("@/assets/img/agile.png")
          },
          title: "Professional Agile Coach - Presencial",
          period: "Emitido em dez. de 2018",
          description: ""
        },
        {
          id: 6,
          company: {
            name: "Agile Institute Brazil",
            logo: require("@/assets/img/agile.png")
          },
          title: "Professional Agile Coach Certifed - EAD",
          period: "Emitido em set. de 2018",
          description: ""
        },
        {
          id: 7,
          company: {
            name: "Udemy",
            logo: require("@/assets/img/udemy.jpeg")
          },
          title: "Testes unitários em Java: Domine JUnit, Mockito e TDD",
          period: "Emitido em ago. de 2018",
          description: ""
        },
        {
          id: 8,
          company: {
            name: "Udemy",
            logo: require("@/assets/img/udemy.jpeg")
          },
          title: "Java 8 - Lambdas, Streams, Interfaces Gráficas",
          period: "Emitido em jul. de 2018",
          description: ""
        },
        {
          id: 9,
          company: {
            name: "SCRUMstudy",
            logo: require("@/assets/img/scrumstudy.png")
          },
          title: "Scrum Fundamentals Certified",
          period: "Emitido em mai. de 2018",
          description: ""
        },
        {
          id: 10,
          company: {
            name: "Wildtech - Start wild, keep wild",
            logo: require("@/assets/img/wildtech.png")
          },
          title: "Histórias de Usuário",
          period: "Emitido em abr. de 2018",
          description: ""
        }
      ]
    };
  }
};
</script>
