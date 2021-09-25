/* get started button */

new Vue({
    el: '#mouse',
    data: {
        message: 'Get Started'
    },
    methods: {
        mouseover: function() {
            this.message = 'Enjoy The Journey!'
        },
        mouseleave: function() {
            this.message = 'Get Started'
        }
    }
})

/* get started button end */