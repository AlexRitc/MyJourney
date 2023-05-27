async function searchGIF(event) {
    event.preventDefault();

    // Clear any existing GIFs
    clearGIFs();

    // Get the user's search query
    const searchTerm = $('#searchTerm').val();

    try {
        // Make the AJAX request to the Giphy API
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'NJUtEqAG57rMupx8f5dU70ABQ8HfxiKS',
                q: searchTerm
            }
        });

        // Call the addGif function to append a random GIF to the page
        addGif(response);
    } catch (error) {
        console.error(error);
    }
}

// Function to append a random GIF to the page
function addGif(response) {
    const numResults = response.data.data.length;
    if (numResults) {
        const randomIdx = Math.floor(Math.random() * numResults);
        const gifUrl = response.data.data[randomIdx].images.original.url; 

        const $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4' });
        const $newGif = $('<img>', {
            src: gifUrl,
            class: 'w-100'
        });

        $newGif.on('load', function () {
            $newCol.append($newGif);
            $('#gifContainer').append($newCol);
        });

        $newGif.on('error', function () {
            console.error('Failed to load GIF:', gifUrl);
        });
    }
}

// Function to clear all GIFs from the page
function clearGIFs() {
    $('#gifContainer').empty();
}

// Add event listener to the search form
$('#searchForm').on('submit', searchGIF);

// Add event listener to the clear button
$('#clearButton').click(clearGIFs);
