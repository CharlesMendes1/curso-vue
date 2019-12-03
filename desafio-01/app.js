window.onload = function(e){ 
    new Vue({
        el: '#desafio',
        data: {
           "nome": "Charles Juan da Silva Mendes",
           "idade": "21",
           "link_image": "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        methods: {
            numeros_randomicos(){
                return Math.random()
            }
        }

    });
    
}

