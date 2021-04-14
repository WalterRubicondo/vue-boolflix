Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    films: [],
    search: '',
    cast: [],
  },
  methods: {
    searchFilm: function () {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=ac8cba58ab0d498ab45ea883868c94c5&', {
        params: {
          query: this.search,
        },
      }).then((response) => {
        this.films = [...this.films, ...response.data.results];
      });
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=ac8cba58ab0d498ab45ea883868c94c5&', {
        params: {
          query: this.search,
        },
      }).then((response) => {
        this.films = [...this.films, ...response.data.results];
      });
      this.films = [];
      this.search = "";
    },
     getTitle: function (obj) {
       if (obj.title) {
         return obj.title;
       } else
        return obj.name;
     },
     getOrignalTitle: function (obj) {
       if (obj.title) {
         return obj.original_title;
       } else
        return obj.original_name;
     },

     rating: function (film) {
       return Math.round(film.vote_average / 2)
     }
  }
});
