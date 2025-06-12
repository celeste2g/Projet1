async function loadMiracles() {
    const res = await fetch("https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json");
    const data = await res.json();
    renderMiracles(data);
}

function renderMiracles(data){
    const board = document.getElementById('board');
    const body = document.body;
    const cards = [];

    data.forEach(miracle => {
        // creating a div element for my miracle card and add 'card-item' class
        const m_card = document.createElement('div');
        m_card.classList.add('card-item');

        // giving the elements for my card
        const title = document.createElement('h3');
        title.textContent = miracle.title;

        const location = document.createElement('p');
        location.textContent = "Location: " + miracle.location;

        const year = document.createElement('p');
        year.textContent = "Year: " + miracle.year;

        const summary = document.createElement('p');
        summary.textContent = "=> " + miracle.summary;

        m_card.appendChild(title);
        m_card.appendChild(year);
        m_card.appendChild(location);
        m_card.appendChild(summary);

        const details = document.createElement('p')
        details.textContent = "Details: " + miracle.details;
        details.style.display = 'none';

        const category = document.createElement('p');
        category.textContent = "Category: " + miracle.category;
        category.style.display = 'none';

        const type = document.createElement('p');
        type.textContent = "Type of miracle: " + miracle.type;
        type.style.display = 'none';

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'X';
        closeBtn.style.display = 'none';
        closeBtn.className = 'close-btn';

        m_card.appendChild(category);
        m_card.appendChild(type);
        m_card.appendChild(details);
        m_card.appendChild(closeBtn);

        m_card.addEventListener('click', (event) => {
            if (event.target === closeBtn) {
                details.style.display = 'none';
                category.style.display = 'none';
                type.style.display = 'none';
                closeBtn.style.display = 'none';
                m_card.classList.remove('extended-card');
                body.classList.remove('body-ext');
            } else {
                details.style.display = 'block';
                category.style.display = 'block';
                type.style.display = 'block';
                closeBtn.style.display = 'block';
                m_card.classList.add('extended-card');
                body.classList.add('body-ext');
            }
        });

        cards.push(m_card);


    })

    for (let i =0 ; i < 6; i++){
        board.appendChild(cards[i]);
    }

    const addBtn = document.getElementById('more-card');
    let current_index = 6;
    addBtn.addEventListener('click', () => {
        const endpoint = Math.min(current_index+3, cards.length);
        for (let i = current_index; i < endpoint; i++){
            board.appendChild(cards[i]);
        }
        current_index = endpoint;

        if (current_index >= cards.length){
            addBtn.style.display = 'none';
        }


    });

}

loadMiracles();