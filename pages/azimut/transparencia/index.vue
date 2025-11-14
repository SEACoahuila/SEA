<template>
  <div>
    <v-expansion-panels>
      <!-- Panel principal -->
      <v-expansion-panel>
        <v-expansion-panel-header>Sesiones ordinarias del Comité Coordinador</v-expansion-panel-header>
        <v-expansion-panel-content>

          <!-- Expansion Panel anidado -->
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in ordinarias" :key="index">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Sesiones extraordinarias del Comité Coordinador</v-expansion-panel-header>
        <v-expansion-panel-content>

          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in extraordinaras" :key="index">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Sesiones ordinarias del Órgano de Gobierno</v-expansion-panel-header>
        <v-expansion-panel-content>

          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in ordinarasog" :key="index">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Sesiones extraordinarias del Órgano de Gobierno</v-expansion-panel-header>
        <v-expansion-panel-content>

          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in extraordinarasog" :key="index">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Actas de Instalación</v-expansion-panel-header>
        <v-expansion-panel-content>

          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in actas" :key="index">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Calendario de Sesiones</v-expansion-panel-header>
        <v-expansion-panel-content>

          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in calendario" :key="index">
              <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-expansion-panel-content>
      </v-expansion-panel>


    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordinarias: [
        { title: "2025", content: "Contenido del primer panel" },
        { title: "2024", content: "Información del segundo panel" },
        { title: "2023", content: "Texto del tercer panel" },
        { title: "2022", content: "Texto del cuarto panel" },
        { title: "2021", content: "Texto del quinto panel" },
        { title: "2020", content: "Texto del sexto panel" },
        { title: "2019", content: "Texto del séptimo panel" },
        { title: "2018", content: "Texto del octavo panel" }
      ],

      extraordinaras: [

        { title: "2024", content: "Información del segundo panel" },
        { title: "2018", content: "Texto del octavo panel" }
      ],

      ordinarasog: [
        { title: "2025", content: "Contenido del primer panel" },
        { title: "2024", content: "Información del segundo panel" },
        { title: "2023", content: "Texto del tercer panel" },
        { title: "2022", content: "Texto del cuarto panel" },
        { title: "2021", content: "Texto del quinto panel" },
        { title: "2020", content: "Texto del sexto panel" },
        { title: "2019", content: "Texto del séptimo panel" },
        { title: "2018", content: "Texto del octavo panel" }
      ],

      extraordinarasog: [
        { title: "2024", content: "Información del segundo panel" },
        { title: "2023", content: "Texto del tercer panel" },
        { title: "2021", content: "Texto del quinto panel" },
        { title: "2020", content: "Texto del sexto panel" },
        { title: "2019", content: "Texto del séptimo panel" },
        { title: "2018", content: "Texto del octavo panel" },
        { title: "2017", content: "Texto del octavo panel" }
      ],

      actas: [
        { title: "Actas de Instalación del Comité Coordinador", content: "Información del segundo panel" },
        { title: "Actas de Instalación del Órgano de Gobierno", content: "Texto del tercer panel" },
        { title: "Actas de Instalación de la Comisión Ejecutiva", content: "Texto del quinto panel" },

      ],

      calendario: [
        { title: "2025", content: "Contenido del primer panel" },
        { title: "2024", content: "Información del segundo panel" },
        { title: "2023", content: "Texto del tercer panel" },
        { title: "2022", content: "Texto del cuarto panel" },
        { title: "2021", content: "Texto del quinto panel" },
      ],

    };
  }
};
</script>

<style scoped></style>