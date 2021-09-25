/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Title props */

Vue.component('post', {
    props: ['title'],
    template: `
      <div>
        <h1>{{ title }}</h1>
      </div>
    `
})

new Vue({
    el: "#app"
})

/* Title props end */

/* vue country list */

var card = new Vue({
    el: "#card",
    data: {
        title: "Country",
        items: [
            { text: "Australia" },
            { text: "Europe" },
            { text: "India" }
        ]
    },
    methods: {
        addItem: function() {
            var input = document.getElementById('itemForm');

            if (input.value !== '') {
                this.items.push({
                    text: input.value
                })
                input.value = "";
            }
        },
        deleteItem: function(index) {
            this.items.splice(index, 1);
        }
    }
});

/* vue country list end */