Vue.component('contador', {
    template: //html
    `
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
        {{nombrePadre}}
        <hijo :numero="numero" @NombreHijo="nombrePadre = $event" ></hijo>
    </div>
    `,
    data(){
        return{
          numero : 0,
          nombrePadre: ''  
        }
    }
})