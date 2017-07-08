
 new Vue({

    el: "#game_wrapper",

     data: {

        health: 99,
        ended: false
     },

     methods: {

        punch: function(){

            this.health -= 10;

            if(this.health <= 0){

               this.ended = true;
            }
        },

        restart: function(){

           this.health = 99;

           this.ended = false;
        }
     }
 });
