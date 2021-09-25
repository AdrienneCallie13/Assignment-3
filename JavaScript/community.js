/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* vue custom button directive */

const app2 = new Vue({
    el: '#app2',
    data: {
        text: {
            show: false,
            other: 'Lets connect with us on social media!'
        }
    }
})


/* vue custom button directive end */


/* vue filter starts */

new Vue({
    el: '#app',
    data: {
        currentFilter: 'ALL',
        projects: [
            { title: "Night View", image: "https://picsum.photos/g/200?image=122", category: 'VIEWS' },
            { title: "Nature", image: "https://picsum.photos/g/200?image=116", category: 'VIEWS' },
            { title: "Mountain", image: "https://picsum.photos/g/200?image=121", category: 'SKYSCRAPER' },
            { title: "Cars", image: "https://picsum.photos/g/200?image=133", category: 'FUN' },
            { title: "City View", image: "https://picsum.photos/g/200?image=134", category: 'SKYSCRAPER' },
            { title: "Glass", image: "https://picsum.photos/g/200?image=115", category: 'VIEWS' },
            { title: "Play", image: "https://picsum.photos/g/200", category: 'FUN' },
        ]
    },
    methods: {
        setFilter: function(filter) {
            this.currentFilter = filter;
        }
    }
})

/* vue filter end */
