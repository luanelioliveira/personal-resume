<template>
  <v-card flat tile>
    <v-card-title>
      <span class="display-1 font-weight-thin">Formação Acadêmica</span>
    </v-card-title>

    <v-card flat tile v-for="education in educations" :key="education.id">
      <v-list-item three-line>
        <v-list-item-avatar>
          <v-img :src="education.company.logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title font-weight-bold">{{education.company.name}}</v-list-item-title>

          <v-list-item-subtitle class="subtitle-1">
            <strong>{{education.title}}</strong>
          </v-list-item-subtitle>

          <v-list-item-subtitle class="mb-2 font-weight-light caption">
            <span>{{education.period}}</span>
          </v-list-item-subtitle>

          <v-list-item-subtitle>
            <p class="text-justify font-weight-light body-1">{{education.description}}</p>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Educations",
  data() {
    return {
      educations: [
        {
          id: 1,
          company: {
            name: "Instituto de Gestão e Tecnologia da Informação",
            logo: require("@/assets/img/igti.png"),
            city: "Jonville, SC"
          },
          title: "MBA, Arquitetura de Software",
          period: "2020 – 2021",
          description: "Ênfase em Sistemas Escaláveis e Distribuídos"
        },
        {
          id: 2,
          company: {
            name: "Centro Universitário - Católica de Santa Catarina",
            logo: require("@/assets/img/catolica.jpeg"),
            city: "Jonville, SC"
          },
          title: "Especialização, Engenharia de Software",
          period: "2016 – 2018",
          description: "Ênfase em Gestão, Processos e Pessoas"
        },
        {
          id: 3,
          company: {
            name: "Universidade do Estado de Santa Catarina",
            logo: require("@/assets/img/udesc.png"),
            city: "Jonville, SC"
          },
          title: "Tecnólogo, Análise e Desenvolvimento de Sistemas",
          period: "2010 – 2015",
          description: "Ênfase em Análise de Desenvolvimento de Softwares"
        }
      ]
    };
  }
};
</script>
