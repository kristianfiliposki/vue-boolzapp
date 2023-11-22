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
                            send:["hey","come stai?","bene grazie" ],
                            recived:["hey","bene tu?","per fortuna" ]
                        },
                
                },
                {
                    nome:"Giacomo",
                    accesso:"13:30",
                    srcImmagine:"./img /avatar_2.jpg",
                },                {
                    nome:"Luca",
                    accesso:"9:00",
                    srcImmagine:"./img /avatar_3.jpg",
                },                {
                    nome:"Giada",
                    accesso:"8:10",
                    srcImmagine:"./img /avatar_4.jpg",
                },                {
                    nome:"Francesca",
                    accesso:"15:01",
                    srcImmagine:"./img /avatar_5.jpg",
                },
                {
                    nome:"Livia",
                    accesso:"7:00",
                    srcImmagine:"./img /avatar_6.jpg",
                },
                {
                    nome:"Augusto",
                    accesso:"12:23",
                    srcImmagine:"./img /avatar_7.jpg",
                },
                {
                    nome:"Ferdinando",
                    accesso:"12:45",
                    srcImmagine:"./img /avatar_8.jpg",
                },
            ],
        }
    },
    methods: {
    
    },
    mounted() {
    }
}).mount('#app')