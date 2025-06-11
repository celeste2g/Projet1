async function loadMiracles() {
    const res = await fetch("https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json");
    const data = await res.json();
    renderMiracles(data);
}

function renderMiracles(data){
    const board = document.getElementById('board');

    data.forEach(miracle => {
        // creating a div element for my miracle card and add 'card-item' class
        const m_card = document.createElement('div');
        m_card.classList.add('card-item');

        // giving the elements for my card
        const title = document.createElement('h3');
        title.textContent = miracle.title;

        const location = document.createElement('p');
        location.textContent = miracle.location;

        const year = document.createElement('p');
        year.textContent = miracle.year;

        const summary = document.createElement('p');
        summary.textContent = miracle.summary;

        m_card.appendChild(title);
        m_card.appendChild(year);
        m_card.appendChild(location);
        m_card.appendChild(summary);

        board.appendChild(m_card);

        /*
        const details = document.createElement('p')
        details.textContent = miracle.details;

        const category = document.createElement('p');
        category.textContent = miracle.category;

        const type = document.createElement('p');
        type.textContent = miracle.type;
        */
    });

}

loadMiracles();