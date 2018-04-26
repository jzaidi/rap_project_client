window.addEventListener('load', () => {
    console.log(`Welcome to the premier site, Rapper's Delight`);

    const baseURL = 'http://localhost:3002/rapposts/';
    const focusRapEl = document.getElementById('focus-rappost');

    const getOneRappost = id => {
        axios.get(`${baseURL}${id}`)
            .then(response => {
                focusRapEl.innerHTML = "";
                const rappostTitleEl = document.createElement('h2');
                rappostTitleEl.setAttribute("align", "center");
                rappostTitleEl.innerHTML = response.data.name;

                const rappostImgDiv = document.createElement('div');
                const rappostImg = document.createElement("img");;
                rappostImg.setAttribute("src", response.data.imgurl);
                rappostImg.setAttribute("id", "img");
                rappostImgDiv.appendChild(rappostImg);
                focusRapEl.appendChild(rappostImgDiv)
                 
                const rappostContentEl = document.createElement("div");
                rappostContentEl.setAttribute("align", "center");
                rappostContentEl.innerHTML += response.data.content;
                focusRapEl.appendChild(rappostTitleEl);
                focusRapEl.appendChild(rappostContentEl);
                // <iframe src="https://giphy.com/embed/E7LcblSOyxELC" width="480" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kid-cudi-E7LcblSOyxELC">via GIPHY</a></p>

                
            })
            .catch( error => {console.error(error);});
    }

    const getAllRapposts = () => {
    axios.get( baseURL )
      .then( response => {
        const rappostsListEl = document.getElementById("list");
        // blogpostsListEl.innerHTML = '';
        response.data.forEach( item => {
          let rappostsListItemEl = document.createElement('li');
          rappostsListItemEl.innerHTML += 
          `<a href='#'>` + item.name + `</a>`;
          rappostsListEl.appendChild(rappostsListItemEl);
          rappostsListItemEl.addEventListener('click', () => { getOneRappost(item.id) });
        });
      })
      .catch( error => { console.error(error); });
  }
    getAllRapposts();
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', () => {
        $('#sidebar').toggleClass('active');
    });
});