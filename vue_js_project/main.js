Vue.component('app-view',{
    props: ['item'],
    template: '<h1>{{item}}</h1>',
});

let vm = new Vue({
    el: '#app',
    data: {
        msg: "Hello!",
    }
});
