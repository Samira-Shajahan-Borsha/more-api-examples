const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    // console.log(data.results);
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    buddies.forEach(buddy => {
        // console.log(buddy);
        const div = document.createElement('div');
        div.innerHTML = `
            <p>Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} </br> Email: ${buddy.email}</p>
            <img src="${buddy.picture.large}" />
        `;
        buddiesContainer.appendChild(div);
    });
}
