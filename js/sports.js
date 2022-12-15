const searchPlayer = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';
    if (searchText == '') {
        alert('Please write something to display');
    }
    else {
        //load data
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPlayers(data.player));
    }
}

const displayPlayers = players => {
    // console.log(players);
    const playerContainer = document.getElementById('player-container');
    playerContainer.textContent = '';
    players.forEach(player => {
        // console.log(player);
        const playerCard = document.createElement('div');
        playerCard.classList.add('col');
        playerCard.innerHTML = `
            <div onclick="loadPlayerDetails('${player.idPlayer}')" class="card h-100">
                <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${player.strPlayer}</h5>
                <p class="card-text">
                    ${player.strNationality}<br>
                    ${player.strPosition}
                </p>
                </div>
            </div>
        `;
        playerContainer.appendChild(playerCard);
    });
}

const loadPlayerDetails = playerId => {
    // console.log(playerId);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayerDetails(data.players[0]));
}

const displayPlayerDetails = player => {
    // console.log(player);
    const playerDetailContainer = document.getElementById('player-detail');
    playerDetailContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('player');
    div.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${player.strNationality}</p>
        </div>
    `;
    playerDetailContainer.appendChild(div);
}