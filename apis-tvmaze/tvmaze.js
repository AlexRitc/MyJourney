"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");

/** Send a request to the TVMaze API with a search term to get relevant shows.
 */
async function getShowsByTerm(term) {
  // Send a GET request to the TVMaze API with the search term
  const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${term}`);

  // Map the response data to return an array of show objects
  return response.data.map(result => {
    const show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : "https://tinyurl.com/tv-missing",
    };
  });
}

/** Create and append HTML markup for each show object onto the page.
 */
function populateShows(shows) {
  // Empty out the shows list before adding new shows
  $showsList.empty();

  // For each show, create and append HTML markup onto the page
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="${show.name}"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}

/** Handle form submission: get shows from API and display on the page.
 */
async function searchForShowAndDisplay() {
  // Get the search term from the input field
  const term = $("#searchForm-term").val();

  // Call the function to get shows by term and store the result
  const shows = await getShowsByTerm(term);

  // Hide the episodes area
  $episodesArea.hide();

  // Populate the shows on the page
  populateShows(shows);
}

// Listen for a submit event on the search form
$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

/** Given a show ID, get episodes from the API and return an array of episodes.
 */
async function getEpisodesOfShow(id) {
  // Send a GET request to the TVMaze API to get episodes by show ID
  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  // Map the response data to return an array of episode objects
  return response.data.map(episode => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number,
  }));
}

/** Create and append HTML markup for each episode onto the page.
 */
function populateEpisodes(episodes) {
  const $episodesList = $("#episodesList");
  
  // Empty out the episodes list before adding new episodes
  $episodesList.empty();

  // For each episode, create and append HTML markup onto the page
  for (let episode of episodes) {
    const $episode = $(`<li>${episode.name} (season ${episode.season}, number ${episode.number})</li>`);
    $episodesList.append($episode);
  }

  $episodesArea.show();
}

// Listen for a click event on the "Episodes" button for each show
$showsList.on("click", ".Show-getEpisodes", async function (evt) {
  // Get the show ID from the clicked element
  const showId = $(evt.target).closest(".Show").data("show-id");
  
  // Call the function to get episodes by show ID and store the result
  const episodes = await getEpisodesOfShow(showId);
  
  // Populate the episodes on the page
  populateEpisodes(episodes);
});
