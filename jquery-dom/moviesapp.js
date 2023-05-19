$(document).ready(function() {
    
    let movies = [];
  
    
    $('#add-movie-form').submit(function(event) {
      event.preventDefault();
  
      const title = $('#title').val();
      const rating = $('#rating').val();
  
     
      if (title.length < 2) {
        alert('Title should have at least 2 characters.');
        return;
      }
      if (rating < 0 || rating > 10) {
        alert('Rating should be between 0 and 10.');
        return;
      }
  
      const movie = {
        title: title,
        rating: rating
      };
  
    
      movies.push(movie);
  
    
      $('#title').val('');
      $('#rating').val('');
  
     
      addMovieToDOM(movie);
    });
  
    
    function addMovieToDOM(movie) {
      const movieElement = $('<div class="movie">');
      const titleElement = $('<h3>').text('Title: ' + movie.title);
      const ratingElement = $('<p>').text('Rating: ' + movie.rating);
      const removeButton = $('<button>').text('Remove');
  
     
      removeButton.click(function() {
        removeMovieFromDOM(movie);
      });
  
      movieElement.append(titleElement);
      movieElement.append(ratingElement);
      movieElement.append(removeButton);
  
      $('#movies-list').append(movieElement);
    }
  
   
    function removeMovieFromDOM(movie) {
      const index = movies.indexOf(movie);
      if (index > -1) {
        movies.splice(index, 1);
        $('.movie').eq(index).remove();
      }
    }
  
    
    $('#sort-title-AZ').click(function() {
      movies.sort((a, b) => a.title.localeCompare(b.title));
      renderMovies();
    });
  
    $('#sort-title-ZA').click(function() {
      movies.sort((a, b) => b.title.localeCompare(a.title));
      renderMovies();
    });
  
   
    $('#sort-rating-Low').click(function() {
      movies.sort((a, b) => a.rating - b.rating);
      renderMovies();
    });
  
    $('#sort-rating-High').click(function() {
      movies.sort((a, b) => b.rating - a.rating);
      renderMovies();
    });
  

    function renderMovies() {
      $('#movies-list').empty();
      for (let i = 0; i < movies.length; i++) {
        addMovieToDOM(movies[i]);
      }
    }
  });
  