<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-toolbar-title class="toolbar">Nato</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="this.$router.currentRoute.path !== '/note'"
             icon>
        <v-icon :color="iconColor">mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-if="this.$router.currentRoute.path === '/note'"
             @click="goBack()"
             icon>
        <v-icon :color="iconColor">mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-btn icon><v-icon :color="iconColor">mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
    
    <v-content class="grey-background">
      <v-container fluid>
        <v-row>
          <RouterView ></RouterView>
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
            },
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>
<style>
  
  :root {
    --main-font-color: #6A6E74;
    --grey-light: #F6F6F6;
  }
  
  .grey-background {
    background-color: var(--grey-light);
  }
  
  
  .toolbar {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 25px !important;
    color: var(--main-font-color)
  }
</style>
