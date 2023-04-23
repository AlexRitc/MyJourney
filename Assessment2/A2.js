const form= document.querySelector("form");
const memeContainer = document.getElementById("meme-container");

form.addEventListener("submit", function (event) {
        event.preventDefault();

        const topText= form.elements.topText.value;
        const bottomText= form.elements.bottomText.value;
        const imageURL= form.elements.imageURL.value;

        if (topText === '' || bottomText === '' || imageURL === '') {
            alert(" Fill out all fields")
            return;
        }

const meme = document.createElement('div');
meme.style.backgroundImage = `URL(${imageURL})`;

const topTextdiv = document.createElement('div');
topTextdiv.innerText = topText;
topTextdiv.classList.add('top-text');

const bottomTextDiv = document.createElement('div');
bottomTextDiv.innerText = bottomText;
bottomTextDiv.classList.add('bottom-text');

const deleteButton = document.createElement('button');
deleteButton.innerText = "Delete";
deleteButton.addEventListener('click', function() {
    meme.remove();
});

meme.appendChild(topTextdiv);
meme.appendChild(bottomTextDiv);
meme.appendChild(deleteButton);

memeContainer.appendChild(meme);

form.reset();
});