Vue.component('barredenavigation', {
    props: ['tableauelementsnavigation'],
    template: ` 
    <div class="barre-navigation">  
    <router-link class="button-navigation" v-for="element in tableauelementsnavigation" :to="element.urlLink"> {{element.text}}</router-link>      
    </div>`

});
