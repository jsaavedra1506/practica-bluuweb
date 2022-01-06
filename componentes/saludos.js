Vue.component("saludo", {
        
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>hola</h3>      
    </diV>
    `,
    data() {
      return {
        saludo: "Hola desde Vue",
      };
    },
  });