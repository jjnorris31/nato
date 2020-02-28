<template>
  <v-row no-gutters>
    <v-col cols="12">
    <v-row justify="center"
           no-gutters>
      <v-col cols="10">
        <h1 class="n1 mt-4 mb-2">Mis notas</h1>
      </v-col>
      <v-col cols="10">
        <v-list two-line class="text-left">
          <v-list-item v-for="n in 5" class="mb-2" :key="n" :style="{ backgroundColor: getRandomColor()}">
            <v-list-item-content>
              <v-list-item-title>Nota #{{n}}</v-list-item-title>
              <v-list-item-subtitle>Esta es la nota {{n}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    </v-col>
    <v-btn icon
           absolute
           bottom
           right
           x-large
           color="white"
           @click="getRandomColor"
           style="background-color: #33B5FB"
           elevation="5">
      <v-icon large>mdi-plus</v-icon>
    </v-btn>
  </v-row>
</template>
<script>
    export default {
        name: 'Notes',
        props: ['pages'],
        data: () => ({
            noteColors: ['#DEF2FE', '#D2F3D1', '#FEECDE', '#F7F6C5'],
        }),
        methods: {
            newNote () {
                this.$emit('new-note')
            },
            getRandomColor() {
                let color = this.noteColors[Math.floor(Math.random() * 3)];
                console.log(color);
                return color;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .full-height {
    height: 100%;
  }
  
  .n1 {
    font-weight: lighter;
    font-family: Lato, sans-serif;
    font-size: 30px;
    color: #33B5FB;
  }
  
  .note-item {
  }
</style>
