<template>
  <v-card flat tile>
    <v-card-title>
      <span class="display-1 font-weight-thin">Experiências</span>
    </v-card-title>

    <v-card flat tile v-for="experience in experiences" :key="experience.id">
      <v-list-item three-line>
        <v-list-item-avatar>
          <v-img :src="experience.company.logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title font-weight-bold">{{experience.company.name}}</v-list-item-title>

          <v-list-item-subtitle>
            <span class="mb-2 font-weight-light">{{experience.company.city}}</span>
          </v-list-item-subtitle>

          <div class="my-4" v-for="job in experience.jobs" :key="job.id">
            <v-list-item-subtitle>
              <span class="subtitle-1">
                <strong>{{job.title}}</strong>
              </span>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              <span class="mb-2 font-weight-light caption">{{job.period}}</span>
            </v-list-item-subtitle>

            <v-list-item-subtitle>
              <p class="text-justify font-weight-light body-1">{{job.description}}</p>
            </v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Experiences",
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: {
            name: "Conta Azul",
            logo: require("@/assets/img/ca.jpeg"),
            city: "Jonville, SC"
          },
          jobs: [
            {
              id: 1,
              title: "Engenheiro de Software",
              period: "nov. de 2019 – o momento",
              description:
                "Atuação na squad de obrigações fiscais mantendo e construindo novas funcionalidade " +
                " para plataforma Conta Axul, através de microsserviços desenvolvidos " +
                " com as tecnologias Java, Spring Framework, Hystrix, PostgreSQL, AWS, Kubernetes, " +
                " Jenkins, Buildkite, Vault e Spinnaker."
            }
          ]
        },
        {
          id: 2,
          company: {
            name: "FESC Tecnologia",
            logo: require("@/assets/img/fesc.png"),
            city: "Jonville, SC"
          },
          jobs: [
            {
              id: 1,
              title: "Líder de Desenvolvimento de Produto",
              period: "nov. de 2017 – out. de 2019",
              description:
                "Atuação como líder de desenvolvimento de produto com foco em gestão de autorizações e atendimentos para " +
                " operadoras do plano de saúde Unimed. Produto atende com demandas sob tecnologias web como Java, JSP, " +
                " Servlets, REST API, Javascript e Oracle Stored Procedure."
            },
            {
              id: 2,
              title: "Analista e Desenvolvedor de Software",
              period: "ago. de 2015 –  out. de 2017",
              description:
                "Atuação como analista e desenvolvedor de sistemas com foco em gestão " +
                " de autorizações e atendimentos para operadoras do plano de saúde Unimed."
            }
          ]
        },
        {
          id: 3,
          company: {
            name: "TOTVS",
            logo: require("@/assets/img/totvs.png"),
            city: "Jonville, SC"
          },
          jobs: [
            {
              id: 1,
              title: "Analista e Desenvolvedor de Software",
              period: "mar. de 2011 – ago. de 2015",
              description:
                "Atuação como líder de desenvolvimento de produto com foco em gestão de autorizações e atendimentos para " +
                " operadoras do plano de saúde Unimed. Produto atende com demandas sob tecnologias web como Java, JSP, " +
                " Servlets, REST API, Javascript e Oracle Stored Procedure."
            },
            {
              id: 2,
              title: "Estagiário de Desenvolvimento de Software",
              period: "nov. de 2010 – fev. de 2011",
              description: ""
            }
          ]
        }
      ]
    };
  }
};
</script>