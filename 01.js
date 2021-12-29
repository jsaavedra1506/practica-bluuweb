const app = new Vue({
    el: '#app',
    data: {
        titulo : 'Hola mundo con Vue',
        frutas : [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Plátano', cantidad: 30}
        ],
        nuevafruta: '',
        total : 0
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevafruta, cantidad: 0
            }),
            this.nuevafruta = ''
         
        }
    },
    computed: {
    sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }

    } 


})