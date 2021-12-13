const buttons = document.querySelectorAll('nav button');
const cards = document.querySelector('main');

function createCard(title, current, previous) {
    //CARD BASIC
    const card = document.createElement('section');
    card.className = 'card';
    card.classList.add(title.toLowerCase().replace(" ", "-"));
    const cardBody = document.createElement('article');
    const cardImageContainer = document.createElement('figure');
    card.appendChild(cardImageContainer);
    card.appendChild(cardBody);
    //CARD ELEMENTS
    //title
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    //share-button
    const cardButton = document.createElement('button');
    cardButton.className = 'share';
    const imageButton = document.createElement('img');
    imageButton.src = "./images/icon-ellipsis.svg";
    imageButton.alt = "Share";
    imageButton.setAttribute('aria-label', 'Share'); 
    cardButton.appendChild(imageButton);
    cardBody.appendChild(cardButton);

    //stats
    const currentStat = document.createElement('p');
    currentStat.className = 'stat';
    currentStat.textContent = `${current}hrs`;
    const previousStat = document.createElement('p');
    previousStat.className = 'subheader';
    previousStat.textContent = `Last Week - ${previous}hrs`;
    cardBody.appendChild(currentStat);
    cardBody.appendChild(previousStat);

    //image
    const cardImage = document.createElement('img');
    cardImageContainer.appendChild(cardImage);

    return card;
}
const backgroundImage = [
    "./images/icon-work.svg",
    "./images/icon-play.svg",
    "./images/icon-study.svg",
    "./images/icon-exercise.svg",
    "./images/icon-social.svg",
    "./images/icon-self-care.svg",
]

//add background image to the cards
const addBackgroundImage = () => {
    const images = document.querySelectorAll('figure img');
    images.forEach((images, index) => {
        images.src= backgroundImage[index];
        images.alt= " " ;
        images.setAttribute('aria-hidden', 'true');
        
    });
}


const fetchData = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
}

fetchData().then(data => {
    data.forEach(element => {
        const card =
            createCard(element.title, element.timeframes.weekly.current, element.timeframes.weekly.previous);
        cards.appendChild(card);
    });
})
    .then(addBackgroundImage);

//active class to buttons and new info to the cards
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        event.target.classList.add('active');

        fetchData().then(data => {
            for (let i = 0; i < data.length; i++) {
                document.querySelectorAll('.stat')[i] = data[i];
                document.querySelectorAll('.subheader')[i] = data[i];

                document.querySelectorAll('.stat')[i].innerHTML = data[i].timeframes[event.target.id].current + 'hrs';
                document.querySelectorAll('.subheader')[i].innerHTML = `Last Week -  ${data[i].timeframes[event.target.id].previous} hrs`;
            }
        })
    })
});


//share button web share API
window.onload = () => {

    document.querySelectorAll('.share').forEach(button => {
        button.addEventListener('click', () => {

            if (navigator.share) {
                console.log('navigator supported')
                const title = document.title;
                const time = document.querySelector('.stat').textContent;
                const text = `I have spent ${time} hours on ${document.querySelector('.card-title').innerHTML}`;
                const url = document.location.href;
                const share = {
                    title: title,
                    text: text,
                    url: url,
                }
                navigator.share(share)
                    .catch(console.error);
            }
            else{alert('Sharing is not available.')}
        })
    })
};


