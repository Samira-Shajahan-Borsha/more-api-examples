const loadFriends = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayFriends(data.results));
}

loadFriends();

const displayFriends = freinds => {
    // console.log(freinds);
    const friendsContainer = document.getElementById('friends-container');
    freinds.forEach(friend => {
        // console.log(friend);
        const friendDiv = document.createElement('div');
        friendDiv.classList.add('friend');
        friendDiv.innerHTML = `
            <img src="${friend.picture.large}"/>
            <h3>${friend.name.title} ${friend.name.first} ${friend.name.last}</h3>
            <p>
                City: ${friend.location.city} <br>
                Street: ${friend.location.street.number}, ${friend.location.street.name}<br>
                <span>Coordinates:</span><br>
                Latitude: ${friend.location.coordinates.latitude}<br>
                Longitude: ${friend.location.coordinates.longitude}<br>
                Timezone: ${friend.registered.date}
            </p>
        `;
        friendsContainer.appendChild(friendDiv);
    });
}