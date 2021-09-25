/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* vue form event handling */

var app1 = new Vue({
    el: '#app-1',
    data: {
        limit: 150,
        message: '',
        hasError: false,
    },
    computed: {
        instruction: function() {
            return this.message == '' ?
                'limit: ' + this.limit + ' characters' :
                'remaining ' + this.remaining + ' characters';
        },
        remaining: function() {
            return this.limit - this.message.length;
        }
    },
    methods: {
        check: function() {
            this.message = this.message.substr(0, this.limit);
        },
        warn: function(message, event) {

            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
});

/* vue form event handling end */


/* Send button (submit) vue enter/leave list transisitons  */

new Vue({
    el: '#call-button',
    data: {
        show: false
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        },
        enter: function(el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function(el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
})

/* Send button (submit) vue enter/leave list transisitons end */