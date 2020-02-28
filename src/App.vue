<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-toolbar-title class="toolbar">Nato</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon :color="iconColor">mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon :color="iconColor">mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
    
    <v-content>
      <v-container fluid>
        <v-row>
          <Notes :pages="pages" @new-note="newNote"/>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
    import Notes from './components/Notes.vue'
    export default {
        name: 'app',
        components: {
            Notes
        },
        data: () => ({
            pages:[],
            index:0,
            iconColor: '#6A6E74',
        }),
        methods:  {
            newNote () {
                this.pages.push({
                    title: "",
                    content: ""
                });
                console.log(this.pages);
            },
            saveNote () {
            },
            deleteNote () {
            }
        }
    }
</script>
<style>
  
  :root {
    --main-font-color: #6A6E74;
  }
  
  .toolbar {
    font-family: Lato, sans-serif;
    font-weight: bold;
    color: var(--main-font-color)
  }
</style>
