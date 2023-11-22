const { createApp } = Vue

createApp({
    data() {
        return {
            users:[
                {
                    nome:"kristian",
                    accesso:"12:08",
                    srcImmagine:`./img /avatar_1.jpg`,
                    messages:
                        {
                            send:
                            [{
                                messaggio:"hey",
                                ora:"12:30",
                            },
                            {
                                messaggio:"come stai?",
                                ora:"13,20",
                            },
                            {
                                messaggio:"bene grazie",
                                ora:"15:40",
                            }],

                            recived:
                            [{
                                messaggio:"hey",
                                ora:"12:40",
                            },
                            {
                                messaggio:"bene tu?",
                                ora:"13,21",
                            },
                            {
                                messaggio:"oh!Ne sono contento",
                                ora:"21:45",
                            }],
                        }
                },
                {
                    nome:"Giacomo",
                    accesso:"13:30",
                    srcImmagine:"./img /avatar_2.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                    
                },                {
                    nome:"Luca",
                    accesso:"9:00",
                    srcImmagine:"./img /avatar_3.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                },                {
                    nome:"Giada",
                    accesso:"8:10",
                    srcImmagine:"./img /avatar_4.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                },                {
                    nome:"Francesca",
                    accesso:"15:01",
                    srcImmagine:"./img /avatar_5.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                },
                {
                    nome:"Livia",
                    accesso:"7:00",
                    srcImmagine:"./img /avatar_6.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                },
                {
                    nome:"Augusto",
                    accesso:"12:23",
                    srcImmagine:"./img /avatar_7.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                },
                {
                    nome:"Ferdinando",
                    accesso:"12:45",
                    srcImmagine:"./img /avatar_8.jpg",
                    messages:
                    {
                        send:
                        [{
                            messaggio:"hey",
                            ora:"12:30",
                        },
                        {
                            messaggio:"come stai?",
                            ora:"13,20",
                        },
                        {
                            messaggio:"bene grazie",
                            ora:"15:40",
                        }],

                        recived:
                        [{
                            messaggio:"hey",
                            ora:"12:40",
                        },
                        {
                            messaggio:"bene tu?",
                            ora:"13,21",
                        },
                        {
                            messaggio:"oh!Ne sono contento",
                            ora:"21:45",
                        }],
                    }

                },
            ],
        }
    },
    methods: {
    
    },
    mounted() {
    }
}).mount('#app')