console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    // dati iniziali
    data(){               
        return{
            user: {
                name: 'Christina',
                avatar: '_io'
              },
              contacts: [
                {
                  id: 1,
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 2,
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 3,
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 4,
                  name: 'Alessandro B.',
                  avatar: '_4',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 5,
                  name: 'Alessandro L.',
                  avatar: '_5',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 6,
                  name: 'Claudia',
                  avatar: '_6',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                    }
                  ],
                },
                {
                  id: 7,
                  name: 'Federico',
                  avatar: '_7',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                    }
                  ],
                },
                {
                  id: 8,
                  name: 'Davide',
                  avatar: '_8',
                  visible: true,
                  messages: [
                    {
                      id: 1,
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                    },
                    {
                      id: 2,
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                    },
                    {
                      id: 3,
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                    }
                  ],
                }
              ], 

              // Variabile con stringaa vuota per memorizzare il contatto selezionato dall'utente.
              selectedContact: '',
              // Variabile con stringa vuota per memorizzare il nuovo messaggio inserito dall'utente.
              newMessage: '',
        }
    },
    methods: {
      //  Metodo per ottenere l'URL dell'avatar dell'utente
      getUserAvatarUrl({avatar}) {
        return `img/avatar${avatar}.jpg`;
      }, 

      // Metodo per selezionare un contatto
      selectContact(contact) {
        this.selectedContact = contact;
      },
      
      // Metodo per ottenere la classe del messaggio (sent o received)
      getMessageClass(message) {
        return message.status === 'sent' ? 'sent' : 'received';
      },

      // Metodo per inviare un nuovo messaggio
      sendMessage() {
        // Controllo se il messaggio è vuoto 
        if (this.newMessage.trim() === '') {
            return; 
        }

        // Creo nuovo oggetto messaggio
        const newMessage = {
          // Creo identificatore univoco per il nuovo messaggio
            id: this.selectedContact.messages.length + 1,
            // Ottengo ora e data correnti
            date: new Date().toLocaleString(),
            // Prendo il nuovo messaggio
            message: this.newMessage,
            // Imposto il messaggio come "sent" per indicare che il messaggio è stato inviato.
            status: 'sent',
        };
        
        // Aggiungo il nuovo messaggio alla lista dei messaggi del contatto selezionato
        this.selectedContact.messages.push(newMessage);

        // Resetto il campo dell'input dopo l'invio
        this.newMessage = ''; 
      },
    },

    mounted() {
      // Imposto il primo contatto come contatto selezionato di default
      this.selectedContact = this.contacts[0];    
    }
});

// Monto nell'elemento (di partenza)
app.mount('#root');
