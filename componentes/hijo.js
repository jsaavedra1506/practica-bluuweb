Vue.component('hijo', {
    template: //html 
    `
    <div>
        <h1>Aquí vimos el tema de Comunicación entre Componentes</h1>   
        <h4>Este hereda del componente padre: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Jhonatan'
        }
    },
    mounted(){
        this.$emit('NombreHijo', this.nombre);
    }
})