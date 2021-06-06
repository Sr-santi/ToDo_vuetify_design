<template>
    <v-row justify="center">
        <v-dialog
        v-model="dialog"
        persistent
        max-width="400px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="#33691E"
                dark
                v-bind="attrs"
                v-on="on"
                >
                    <span>Add a new Project</span>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5">
                    Enter project info
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                        <v-textarea label="information about the project" v-model="content" prepend-icon="mdi-lead-pencil" :rules="inputRules"></v-textarea>

                        <!-- Select date -->
                        <v-dialog
                            ref="dialog"
                            v-model="modal"
                            :return-value.sync="date"
                            persistent
                            width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="computedDateFormatted"
                                    label="Due date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="inputRules"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                scrollable
                            >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="modal = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.dialog.save(date)"
                                >
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-dialog>

                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="submit()"
                    >
                        Add
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="dialog = false; reset();"
                    >
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  </v-row>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb.js'

export default {
    name: 'Popup',
    data () {
      return {
          title: '',
          content: '',
          dialog: false,
          modal: false,
          date: new Date().toISOString().substr(0, 10),
          inputRules: [
              value => value.length >= 3 || 'Minimum length is 3 characters',
          ],
      }
    },

    methods: {
        submit() {
            if(this.$refs.form.validate()){
                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.formatDate(this.date),
                    person: 'Sr-SantiR',
                    status: 'ongoing',
                }
                this.setData(project)
                /* db.collection('projects').add(project)
                .then(() => {
                    console.log("added to db")
                })
                this.dialog=false
                this.reset() */
            }else {
                this.dialog = true
            }
        },

        reset () {
            this.$refs.form.reset()
        },

        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split("-");
            return format(new Date(year, month, day), 'do MMM yyyy')
        },

        async setData(project_data) {
            await db.collection('projects').add(project_data)
                .then(() => {
                    console.log("added to db")
                })
            this.dialog=false
            this.reset()
        },
    },

    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date) || ''
        },
    },

}
</script>
