async function getUsers() {
    let url = 'https://sheetdb.io/api/v1/l9ywpezmaw30s';
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
        let htmlSegment = `<div class="user">
<li>
          <div class="item">
            <div class="lname">
              <span>${user.VName}</span>
            </div>
            <div class="times">
              <span>${user.VTime}</span>
            </div>
            <div class="ids">
              <span onclick="copy(this)" style="cursor: pointer;">${user.VID}</span>
            </div>
            <div class="status">
              <span class="open">${user.VOpen}</span>
            </div>
          </div>
        </li>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();