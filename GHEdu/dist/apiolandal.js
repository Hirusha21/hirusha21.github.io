async function getUsers() {
    let url = 'https://sheetdb.io/api/v1/g4sh0d20kqlg7';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `${user.OLandAL}`;

        html += htmlSegment;
    });

    let olsals = document.querySelector('.olsals');
    olsals.innerHTML = html;
}

renderUsers();