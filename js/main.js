const { createApp } = Vue

createApp({
    data() {
        return {
            count:0,
            testo:"",

            users:[
                {
                    nome:"kristian",
                    count:"0",
                    accesso:"12:08",
                    srcImmagine:`./img /avatar_1.jpg`,
                    messages:
                            [{
                                messaggio:"hey",
                                ora:"12:30",
                                status:"sent",
                            },
                            {
                                messaggio:"hey",
                                ora:"12:31",
                                status:"recived",
                            },
                            {
                                messaggio:"come stai?",
                                ora:"13,20",
                                status:"sent",

                            },
                            {
                                messaggio:"bene grazie te?",
                                ora:"13,30",
                                status:"recived",

                            },
                            {
                                messaggio:"bene bene,ora vado a caccia di mostri",
                                ora:"14,00",
                                status:"sent",

                            },
                            {
                                messaggio:"grande,io sono tornato da Venere poco fa",
                                ora:"15:40",
                                status:"recived",

                            }],
                        
                },
                {
                    nome:"Giacomo",
                    count:"1",
                    accesso:"13:30",
                    srcImmagine:"./img /avatar_2.jpg",
                    messages:
                    [{
                        messaggio:"ciao",
                        ora:"12:30",
                        status:"sent"
                    },
                    {
                        messaggio:"A bello che dici?",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"tutto bene te?",
                        ora:"13,20",
                        status:"sent"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"io benissimo!",
                        ora:"14,00",
                        status:"sent"

                    },
                    {
                        messaggio:"per fortuna",
                        ora:"15:40",
                        status:"recived"

                    }],



                    
                },                {
                    nome:"Luca",
                    count:"2",
                    accesso:"9:00",
                    srcImmagine:"./img /avatar_3.jpg",
                    messages:
                    [{
                        messaggio:"woooo",
                        ora:"12:30",
                        status:"sent"
                    },
                    {
                        messaggio:"heyla",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"qual buon vento la porta in questa chat?",
                        ora:"13,20",
                        status:"sent"

                    },
                    {
                        messaggio:"La tramontana",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"ok,ciao,è stato bello",
                        ora:"14,00",
                        status:"sent"

                    },
                ]


                

                },                {
                    nome:"Alessandro",
                    accesso:"8:10",
                    count:"3",
                    srcImmagine:"./img /avatar_4.jpg",
                    messages:
                    [{
                        messaggio:"allora ti ho scoperto",
                        ora:"12:30",
                        status:"sent"
                    },
                    {
                        messaggio:"dimmi",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"mi hai mangiato tutte la patine",
                        ora:"13,20",
                        status:"sent"

                    },
                    {
                        messaggio:"e vabbe,pazienza!",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"non parlarmi piu!!!",
                        ora:"14,00",
                        status:"sent"

                    },
                ]


                

                },                {
                    nome:"Francesca",
                    count:"4",
                    accesso:"15:01",
                    srcImmagine:"./img /avatar_5.jpg",
                    messages:
                    [{
                        messaggio:"sisi",
                        ora:"12:30",
                        status:"sent"
                    },
                    {
                        messaggio:"cosa?",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"vieni domani?",
                        ora:"13,20",
                        status:"sent"

                    },
                    {
                        messaggio:"boh",
                        ora:"13,30",
                        status:"recived"

                    },]



                

                },
                {
                    nome:"Giada",
                    count:"5",
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
                    nome:"Augusto",
                    count:"6",
                    accesso:"12:23",
                    srcImmagine:"./img /avatar_7.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"sent",
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived",
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"sent",

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived",

                    },
                    {
                        messaggio:"che ti dico come sempre",
                        ora:"14,00",
                        status:"sent",

                    },
                    {
                        messaggio:"stai pensando ancora a franceschina del ducato di savoia?",
                        ora:"15:40",
                        status:"recived",

                    },
                    {
                        messaggio:"purtroppo si",
                        ora:"13,30",
                        status:"sent",

                    },
                    {
                        messaggio:"ma tu sei matto",
                        ora:"14,00",
                        status:"recived",

                    },
                    {
                        messaggio:"le nostre famiglie si sono odiate per quel maiale",
                        ora:"15:40",
                        status:"recived",

                    },
                    {
                        messaggio:"non fosse stato per lui",
                        ora:"14,00",
                        status:"sent",

                    },
                    {
                        messaggio:"ora ci hanno fatto le salsicce",
                        ora:"15:40",
                        status:"recived",

                    },
                    {
                        messaggio:"pensa che spreco",
                        ora:"13,30",
                        status:"recived",

                    },
                    {
                        messaggio:"il maiale dalle uova d'oro",
                        ora:"14,00",
                        status:"sent",

                    },
                ],
                



                

                },
                {
                    nome:"Ferdinando",
                    count:"7",
                    accesso:"12:45",
                    srcImmagine:"./img /avatar_8.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"sent",
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived",
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"sent",

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived",

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"sent",

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived",

                    }],
                },
            ],
        }
    },
    methods: {
        changeclass(index){
         this.count=index
        },
        sent(){
            let newmessage=
            {
                status:"sent",
                ora:"now",
                messaggio:`${this.testo}`,
                
            };

            console.log(this.users[0].messages);
            this.users[0].messages.push(newmessage);
        },
    
    },
    mounted() {
    }
}).mount('#app')