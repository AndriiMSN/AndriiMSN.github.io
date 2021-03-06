const leftMenu = document.querySelector(".left-menu"),
      hamburger = document.querySelector(".hamburger"),
      tvShowsList = document.querySelector(".tv-shows__list"),
      modal = document.querySelector(".modal"),
      tvShows = document.querySelector(".tv-shows"),
      tvCardImg = document.querySelector(".tv-card__img"),
      modalTitle = document.querySelector(".modal__title"),
      genresList = document.querySelector(".genres-list"),
      rating = document.querySelector(".rating"),
      description = document.querySelector(".description"),
      modalLink = document.querySelector(".modal__link"),
      searchForm = document.querySelector(".search__form"),
      searchFormInput = document.querySelector(".search__form-input"),
      IMG_URL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
      API_KEY = "692ed64981bf3db6ef20548c7a41ce46",
      SERVER = "https://api.themoviedb.org/3";
      //https://api.themoviedb.org/3/movie/550?api_key=692ed64981bf3db6ef20548c7a41ce46

//console.log(document.getElementsByTagName("div"));

const loading = document.createElement("div");
loading.classList.add("loading");
//console.log(loading);

const DBService = class {
  getData = async (url) => {
    const res = await fetch(url);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Eror ${url}`);
    }
  }

  getTestData = async () => {
    return await this.getData("test.json");
  }
  
  getTestCard = () => {
    return this.getData("card.json");
  }

  getSearchResult = (query) => {
    return this.getData(`${SERVER}/search/movie?api_key=${API_KEY}&query=${query}&language=ru-RU&include_adult=true`)
  }

  getTvShow = id => {
    return this.getData(`${SERVER}/movie/${id}?api_key=${API_KEY}&language=ru-Ru`)
  }

}

//console.log( new DBService().getSearchResult('spider-man'))


const renderCard = (response) => {
  tvShowsList.textContent = "";
  console.log(response);
  if(response.results.length == 0){
    loading.remove();
    document.querySelector('.tv-shows__head').innerText = 'Результат поиска - Не найденyо';
  } else{
  document.querySelector('.tv-shows__head').innerText = 'Результат поиска';}
  response.results.forEach((item) => {
    const {
      backdrop_path: backdrop,
      title: title,
      poster_path: poster,
      vote_average: vote,
      id
    } = item;
    //console.log(item);

    const posterIMG = poster ? IMG_URL + poster : "./img/no-poster.jpg",
      backdropIMG = backdrop ? IMG_URL + backdrop : "./img/no-poster.jpg",
      voteElem = vote ? `<span class="tv-card__vote">${vote}</span>` : "";

    const card = document.createElement("li");
    card.idTV = id;
    card.classList.add("tv-shows__item");
    card.innerHTML = `
    <a href="#" id="${id}" class="tv-card">
      ${voteElem}
      <img class="tv-card__img"
        src="${posterIMG}"
        data-backdrop="${backdropIMG}"
        alt="${title}">
      <h4 class="tv-card__head">${title}</h4>
     </a>
    `;
    loading.remove();
    tvShowsList.append(card);
    //console.log(card);
  });
};



//SearchForm
window.onload = () => {new DBService().getSearchResult('spider').then(renderCard);}
searchForm.addEventListener("submit", event => {

  event.preventDefault();
  //console.dir(searchForm);
  const value = searchFormInput.value.trim();
  //searchFormInput.value = '';
  if ( value ) {

    tvShows.append(loading);
    new DBService().getSearchResult(value).then(renderCard);
    
  }
  console.log(value);

});

// MENU

// open menu

hamburger.addEventListener("click", () => {
  leftMenu.classList.toggle("openMenu");
  hamburger.classList.toggle("open");
});

//close menu click body

document.addEventListener("click", (event) => {
  //console.log(!!event.target.closest('.left-menu'));

  if (!event.target.closest(".left-menu")) {
    // console.log('click not menu');

    leftMenu.classList.remove("openMenu");
    hamburger.classList.remove("open");
  }
});

//DropDown menu

leftMenu.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target,
    dropdown = target.closest(".dropdown");

  if (dropdown) {
    dropdown.classList.toggle("active");
    leftMenu.classList.add("openMenu");
    hamburger.classList.add("open");
  }
});

//open modal

tvShowsList.addEventListener("click", (event) => {

  document.querySelector('body').append(loading);
  event.preventDefault();

  const target = event.target,
        card = target.closest(".tv-card");

  if (card) {
      //console.dir(card);
      new DBService().getTvShow(card.id)
        .then( data => {

      console.log(data);

      tvCardImg.src = IMG_URL + data.poster_path; //data.poster_path
      modalTitle.textContent = data.name;
      //genresList.innerHTML = data.genres.reduce( (acc, item) =>  `${acc}<li>${item.name}</li>`, '')
      genresList.textContent = '';
      for ( const item of data.genres) { // data.genres.forEach(item=>){}
        genresList.innerHTML += `<li>${item.name}</li>`;
      }
      rating.textContent = data.vote_average;
      description.textContent = data.overview;
      modalLink.href = data.homepage;
    })

    .then(() => {
    document.body.style.overflow = "hidden";
    modal.classList.remove("hide");
    loading.remove();
    })

  }

  //console.log(target);
});

//close modal

modal.addEventListener("click", (event) => {
  //console.log(event.target.classList.contains('modal'));

  if (
    event.target.closest(".cross") ||
    event.target.classList.contains("modal")
  ) {
    document.body.style.overflow = "";
    modal.classList.add("hide");
  }
});

// change card

const changeImage = (event) => {
  const card = event.target.closest(".tv-shows__item");
  //console.log( target.matches('.tv-card__img') );
  if (card) {
    const img = card.querySelector(".tv-card__img");
    //console.log(img);

    //const changeImg = img.dataset.backdrop;
    //console.log(changeImg);
    if (img.dataset.backdrop) {
      //img.dataset.backdrop = img.src;
      // img.src = changeImg;
      [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src];
    }
  }
};

tvShowsList.addEventListener("mouseover", changeImage);
tvShowsList.addEventListener("mouseout", changeImage);
