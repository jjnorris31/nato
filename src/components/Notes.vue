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
          <v-list-item v-for="(value, index) in notes" class="mb-2" :key="index" :style="{ backgroundColor: value.color}">
            <v-list-item-content>
              <v-list-item-title>{{value.title}}</v-list-item-title>
              <v-list-item-subtitle>{{value.content}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="deleteNote(index)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </v-list-item-action>
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
           @click="noteActivator = !noteActivator"
           style="background-color: #33B5FB"
           elevation="5">
      <v-icon large>mdi-plus</v-icon>
    </v-btn>
  
    <v-dialog :value="noteActivator">
      <v-card>
        <v-card-title class="n2 mb-2 pl-8">Vamos, dame esa nota</v-card-title>
        <v-row justify="center" no-gutters>
          <v-col cols="10">
            <v-text-field v-model="newTitle" outlined placeholder="Título de nota" style="font-family: Lato, sans-serif"></v-text-field>
            <v-textarea v-model="newContent" outlined placeholder="Descripción de nota" style="font-family: Lato, sans-serif"></v-textarea>
          </v-col>
          <v-col cols="4" offset="6" class="mb-4">
            <v-btn @click="newNote" style="font-family: Lato, sans-serif" color="#33B5FB"  block dark flat class="btn-blue">Guardar</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
    export default {
        name: 'Notes',
        props: ['pages'],
        data: () => ({
            noteColors: ['#DEF2FE', '#D2F3D1', '#FEECDE', '#F7F6C5'],
            newTitle: '',
            newContent: '',
            noteActivator: false,
            notes: [
                {
                    title: 'Nota increíble #1',
                    content: '¡Esta nota no tiene mucho!',
                    color: '#DEF2FE',
                },
                {
                    title: 'Nota increíble #2',
                    content: 'Esta nota tampoco tiene mucho...',
                    color: '#D2F3D1',
                },
                {
                    title: 'Nota increíble #3',
                    content: '¿Se va a hacer o no se va a hacer?',
                    color: '#FEECDE'
                }
            ]
        }),
        watch: {
          noteActivator() {
              this.newTitle = '';
              this.newContent = '';
            },
        },
        methods: {
            newNote () {
                this.$emit('new-note');
                this.notes.push({ title: this.newTitle, content: this.newContent, color: this.getRandomColor()});
                this.noteActivator = !this.noteActivator;
            },
            getRandomColor() {
                let color = this.noteColors[Math.floor(Math.random() * 3)];
                return color;
            },
            deleteNote(index) {
                this.notes.splice(index, 1);
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
  
  .n2 {
    font-weight: lighter;
    font-family: Lato, sans-serif;
    font-size: 22px !important;
    color: #33B5FB;
  }
  
  .btn-blue {
    letter-spacing: 0 !important;
  }



  .note-item {
  }
</style>
