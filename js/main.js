const { createApp } = Vue

const vue=createApp({
    data() {
        return {
            /* io sono Kristian */
            iAm:                {
                nome:"kristian",
                count:"0",
                value:false,
                accesso:"12:08",
                srcImmagine:`./img /avatar_1.jpg`,
                messages:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                            status:"sent",
                            called:false,
                        },
                        {
                            messaggio:"hey",
                            ora:"12:31",
                            status:"recived",
                            called:false,
                           

                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                            status:"sent",
                            called:false,
                         


                        },
                        {
                            messaggio:"bene grazie te?",
                            ora:"13,30",
                            status:"recived",
                            called:false,
                  

                        },
                        {
                            messaggio:"bene bene,ora vado a caccia di mostri",
                            ora:"14,00",
                            status:"sent",
                            called:false,
                   


                        },
                        {
                            messaggio:"grande,io sono tornato da Venere poco fa",
                            ora:"15:40",
                            status:"recived",
                            called:false,
                        


                        }],
            },
            /* io sono Kristian */

            /* dati */
            /* contatore */
            count:0,
            /* testo scritto dall'utente nel messaggio */
            testo:"",
            /* ricerca degli utenti presenti nelle tue chat */
            ricerca:"",


            /* utenti */
            users:[
                {
                    /* utente 1 */
                    nome:"Giacomo",
                    count:"0",
                    value:false,
                    accesso:"13:30",
                    srcImmagine:"./img /avatar_2.jpg",
                    messages:
                    [{
                        messaggio:"ciao",
                        ora:"12:30",
                        status:"sent",
                        called:false,
                        
                    },
                    {
                        messaggio:"A bello che dici?",
                        ora:"12:31",
                        status:"recived",
                        called:false,
                        
                    },
                    {
                        messaggio:"tutto bene te?",
                        ora:"13,20",
                        status:"sent",
                        called:false,
                        

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived",
                        called:false,
                        

                    },
                    {
                        messaggio:"io benissimo!",
                        ora:"14,00",
                        status:"sent",
                        called:false,
                        

                    },
                    {
                        messaggio:"per fortuna",
                        ora:"15:40",
                        status:"recived",
                        called:false,
                        

                    }],                    
                },                
                {
                    /* utente 2 */                    
                    nome:"Luca",
                    count:"1",
                    value:false,
                    accesso:"9:00",
                    srcImmagine:"./img /avatar_3.jpg",
                    messages:
                    [{
                        messaggio:"woooo",
                        ora:"12:30",
                        status:"sent",
                        called:false,
                    },
                    {
                        messaggio:"heyla",
                        ora:"12:31",
                        status:"recived",
                        called:false,
                    },
                    {
                        messaggio:"qual buon vento la porta in questa chat?",
                        ora:"13,20",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"La tramontana",
                        ora:"13,30",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"ok,ciao,è stato bello",
                        ora:"14,00",
                        status:"sent",
                        called:false,

                    },
                ]
                },                
                {
                    /* utente 3 */
                    nome:"Alessandro",
                    accesso:"8:10",
                    count:"2",
                    value:false,
                    srcImmagine:"./img /avatar_4.jpg",
                    messages:
                    [{
                        messaggio:"allora ti ho scoperto",
                        ora:"12:30",
                        status:"sent",
                        called:false,
                    },
                    {
                        messaggio:"dimmi",
                        ora:"12:31",
                        status:"recived",
                        called:false,
                    },
                    {
                        messaggio:"mi hai mangiato tutte la patine",
                        ora:"13,20",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"e vabbe,pazienza!",
                        ora:"13,30",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"non parlarmi piu!!!",
                        ora:"14,00",
                        status:"sent",
                        called:false,

                    },
                ]
                },                
                {
                    /* utente 4 */
                    nome:"Francesco",
                    count:"3",
                    value:false,
                    accesso:"15:01",
                    srcImmagine:"./img /avatar_5.jpg",
                    messages:
                    [{
                        messaggio:"sisi",
                        ora:"12:30",
                        status:"sent",
                        called:false,
                    },
                    {
                        messaggio:"cosa?",
                        ora:"12:31",
                        status:"recived",
                        called:false,
                    },
                    {
                        messaggio:"vieni domani?",
                        ora:"13,20",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"boh",
                        ora:"13,30",
                        status:"recived",
                        called:false,

                    },]
                },
                {
                    /* utente 5 */
                    nome:"Giada",
                    count:"4",
                    value:false,
                    accesso:"7:00",
                    srcImmagine:"./img /avatar_6.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"sent"
                    },
                ]
                },
                {
                    /* utente 6 */
                    nome:"Augusto",
                    count:"5",
                    value:false,
                    accesso:"12:23",
                    srcImmagine:"./img /avatar_7.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"sent",
                        called:false,
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived",
                        called:false,
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"che ti dico come sempre",
                        ora:"14,00",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"stai pensando ancora a franceschina del ducato di savoia?",
                        ora:"15:40",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"purtroppo si",
                        ora:"13,30",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"ma tu sei matto",
                        ora:"14,00",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"le nostre famiglie si sono odiate per quel maiale",
                        ora:"15:40",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"non fosse stato per lui",
                        ora:"14,00",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"ora ci hanno fatto le salsicce",
                        ora:"15:40",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"pensa che spreco",
                        ora:"13,30",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"il maiale dalle uova d'oro",
                        ora:"14,00",
                        status:"sent",
                        called:false,

                    },
                ],
                },
                {
                    /* utente 7 */
                    nome:"Ferdinando",
                    count:"",
                    value:false,
                    accesso:"12:45",
                    srcImmagine:"./img /avatar_8.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"sent",
                        called:false,
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived",
                        called:false,
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived",
                        called:false,

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"sent",
                        called:false,

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived",
                        called:false,

                    }],
                },
            ],
        }
    },
    /* funzioni */
    methods: {
        /* selezioni l'utente con cui vuoi parlare */
        changeclass(index){
         this.count=index
        },
        /* scrivi il tuo messaggio */
        sent(){
            let newmessage=
            {
                /* diamo dei valori al messaggio appena inviato */
                status:"sent",
                ora:"poco fa",
                /* prendi il testo inserito dall'utente attraverso l'input */
                messaggio:`${this.testo}`,

            };
            /* insersci il messaggio all'arrey dei messaggi dell'utente in questione */
            this.users[this.count].messages.push(newmessage);
            /* mostra tutti i messaggi */
            console.log(this.users[this.count].messages);

            /* dopo 1,2s un bot genera un messaggio */
            const myTimeout = setTimeout(()=>{
                let bot=
                {
                    status:"recived",
                    ora:"adesso",
                    messaggio:`hey purtroppo ora il tuo amico è offlline. Io sono il Bot e da ora in poi ti risponderò io!`,
                    
                };
                this.users[this.count].messages.push(bot);
            }, 1200);
        },

        /* ricerca degli utenti nelle chat */
        filterUser(){
            /* per ognuno degli elementi */
            this.users.forEach((element, index)  => {
                element.nome;
                /* rendi tutti gli elementi,uno ad uno, true */
                (element).value=true;
                /* cerca se il valore digitato è presente nei nomi degli utenti */
                if(element.nome.includes(this.ricerca)){
                    /* se si allora */
                    /* trova quei nomi */
                    console.log(element.nome);
                    /* rendili falsi,diversi da tutti gli altri */
                    (element).value=false;
                    /* cosi che verrano nascosti */
                }
            });
        },
        /* cancella il messaggio selezionato */

        deletes(i) {
            this.users[this.count].messages.splice(i, 1);
        },
        /* scopri le informazione del messaggio */
        info(i){
            this.users[this.count].messages[i].called=true;
        },
        invisible(i){
            this.users[this.count].messages[i].called=false;
        },

    
    },
    mounted() {
    }
}).mount('#app')