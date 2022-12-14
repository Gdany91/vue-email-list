const {createApp} = Vue;

createApp({
    data() {
      return {
        numEmail : 10,
        emails: []
      }
    },

    methods: {
        askEmails(){
            for (let i = 0; i < this.numEmail; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

                    this.emails.push(result.data.response);
                    console.log(this.mails);
                })
            }
        }
    },

    mounted(){

        this.askEmails()
    }
  }).mount('#app');