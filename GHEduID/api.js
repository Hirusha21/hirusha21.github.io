async function getUsers() {
    let url = 'https://sheetdb.io/api/v1/f1xys6wfr42tw';
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
              <span><b>${user.No}</b>${user.Name}</span>
            </div>
            <div class="times">
              <span>${user.Time}</span>
            </div>
            <div class="ids">
              <span onclick="copy(this)" style="cursor: pointer;">${user.ID}</span>
            </div>
            <div class="status">
              <span onClick="parent.location='https://gheduplayer.herokuapp.com/watch/${user.ID}'" style="cursor: pointer;" class="${user.Class}">${user.Open}</span>
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