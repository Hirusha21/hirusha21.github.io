async function getUsers() {
    let url = 'https://sheetdb.io/api/v1/r2gasi1tc24zw';
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
        let htmlSegment = `<!-- Single post-->
                <div class="col-12 col-sm-8 col-lg-4">
                  <div class="card single-post">
                    <a class="post-img" href="#0">
                      <iframe width="360" height="203" src="${user.OtherLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </a>
                    <div class="card-body post-content"><a href="#0">
                      <h5 class="card-title content-title">${user.OtherLinkTitle}</h5>
                      </a>
                      <p class="card-text content-description">${user.OtherLinkDescription}</p>
                    </div>
                  </div>
                </div>`;

        html += htmlSegment;
    });

    let otherles = document.querySelector('.otherles');
    otherles.innerHTML = html;
}

renderUsers();