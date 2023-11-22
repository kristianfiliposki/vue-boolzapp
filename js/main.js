const { createApp } = Vue

createApp({
    data() {
        return {
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
                                status:"send",
                            },
                            {
                                messaggio:"hey",
                                ora:"12:31",
                                status:"recived",
                            },
                            {
                                messaggio:"come stai?",
                                ora:"13,20",
                                status:"send",

                            },
                            {
                                messaggio:"bene grazie te?",
                                ora:"13,30",
                                status:"recived",

                            },
                            {
                                messaggio:"come stai?",
                                ora:"14,00",
                                status:"send",

                            },
                            {
                                messaggio:"bene grazie",
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
                        messaggio:"hey",
                        ora:"12:30",
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
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
                        messaggio:"hey",
                        ora:"12:30",
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived"

                    }],


                

                },                {
                    nome:"Giada",
                    accesso:"8:10",
                    count:"3",
                    srcImmagine:"./img /avatar_4.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived"

                    }],


                

                },                {
                    nome:"Francesca",
                    count:"4",
                    accesso:"15:01",
                    srcImmagine:"./img /avatar_5.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived"

                    }],


                

                },
                {
                    nome:"Livia",
                    count:"5",
                    accesso:"7:00",
                    srcImmagine:"./img /avatar_6.jpg",
                    messages:
                    [{
                        messaggio:"hey",
                        ora:"12:30",
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived"

                    }],


                

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
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived"

                    }],



                

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
                        status:"send"
                    },
                    {
                        messaggio:"hey",
                        ora:"12:31",
                        status:"recived"
                    },
                    {
                        messaggio:"come stai?",
                        ora:"13,20",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie te?",
                        ora:"13,30",
                        status:"recived"

                    },
                    {
                        messaggio:"come stai?",
                        ora:"14,00",
                        status:"send"

                    },
                    {
                        messaggio:"bene grazie",
                        ora:"15:40",
                        status:"recived"

                    }],
                },
            ],
        }
    },
    methods: {
    
    },
    mounted() {
    }
}).mount('#app')