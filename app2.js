const app = new Vue({
    el: '#app',
    data: {
        mensaje: "Hola bienvenido nuevamente al curso de Vue",
        contador: 0
    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color (){
            return{
                'bg-danger' : this.contador <= 25,
                'bg-warning' : this.contador >25 && this.contador <= 75,
                'bg-succes' : this.contador > 75
            }
        }
    }
})