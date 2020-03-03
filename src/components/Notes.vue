<template>
  <v-row no-gutters>
    <v-col cols="12">
    <v-row justify="center"
           no-gutters>
      <v-col cols="10">
        <h1 class="n1 mt-4 mb-2">Mis notas</h1>
      </v-col>
      <v-col cols="10">
        <v-list two-line class="text-left grey-background">
          <v-fade-transition v-for="(value, index) in notes" :key="index">
            <v-list-item class="mb-2"
                         @click="individualNote()"
                         :style="{ backgroundColor: value.color}">
              <v-list-item-content>
                <v-list-item-title>{{value.title}}</v-list-item-title>
                <v-list-item-subtitle>{{value.content}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-tooltip left>
                  <template v-slot:activator="{on}">
                    <v-btn @click="deleteNote(index)" icon v-on="on">
                      <v-icon>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Borrar</span>
                </v-tooltip>
              </v-list-item-action>
            </v-list-item>
          </v-fade-transition>
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
  
    <v-dialog :value="noteActivator" >
      <v-card>
        <v-row justify="center" class="mx-0">
          <v-col cols="10" class="mt-4">
            <h2 style="font-family: Poppins, sans-serif; font-weight: 500; color: #33B5FB">Nueva nota</h2>
          </v-col>
          <v-col cols="10">
            <h4>Título</h4>
            <input class="text-input input-format"
                   style="height: 45px"
                   :class="{'note-content-on' : focusText}"
                   @focusin="changeFocusText"
                   @focusout="exitFocusText"
                   v-model="newTitle"
                   type="text">
          </v-col>
          <v-col cols="10">
            <h4>Contenido</h4>
            <v-card :class="{'note-content-on' : focus}" flat style="height: 150px">
              <v-row class="text-input" style="height: 100%">
                <textarea class="input-format"
                          style="height: 100%; width: 100%"
                          v-model="newContent"
                          @focusin="changeFocus"
                          @focusout="exitFocus">
                  </textarea>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="4"
                 offset="5"
                 class="d-flex align-center">
            <v-btn @click="newNote" style="font-family: Poppins, sans-serif" color="#33B5FB"  block dark flat class="btn-blue">Guardar</v-btn>
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
            expand: true,
            noteActivator: false,
            focus: false,
            focusText: false,
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
            },
            changeFocus() {
                this.focus = true;
                console.log(this.focus)
            },
            exitFocus() {
                this.focus = false;
                console.log(this.focus)
            },
            changeFocusText() {
                this.focusText = true;
                console.log(this.focus)
            },
            exitFocusText() {
                this.focusText = false;
                console.log(this.focus)
            },
            individualNote() {
                this.$router.push('/note');
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
    font-family: Poppins, sans-serif;
    font-size: 30px;
    color: #33B5FB;
  }
  
  h4 {
    font-size: 16px !important;
    font-family: Poppins, sans-serif;
    font-weight: 500 !important;
    color: #696C71;
  }
  
  .n2 {
    font-weight: normal;
    font-family: Poppins, sans-serif;
    font-size: 22px !important;
    color: #33B5FB;
  }
  
  .btn-blue {
    letter-spacing: 0 !important;
  }
  
  .text-input {
    height: 60%;
    margin: 4px 0;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    border-radius: 2px;
    color: #959796;
    -webkit-box-shadow: 3px 3px 20px -2px rgba(0,0,0,0.3);
    -moz-box-shadow: 3px 3px 20px -2px rgba(0,0,0,0.3);
    box-shadow: 0px 2px 6px -2px rgba(0,0,0,0.3);
  }
  
  .input-format {
    width: 100%;
    padding: 8px 10px;
  }
  
  .note-content-on {
    outline: rgba(51, 181, 251, .25) solid 2px !important;
  }
  
  .note-content-off {
    outline: none;
  }
  
  .input-format:focus {
    outline-color: transparent;
  }

  .grey-background {
    background-color: var(--grey-light) !important;
  }


  .note-item {
  }
</style>
