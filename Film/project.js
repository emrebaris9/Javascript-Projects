const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]; // 1. index yani 2. cardbody'i aldık filmi sildeki
const clear = document.getElementById("clear-films");


// tüm eventleri yükle
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if ( title === "" || director === "" || url === "" ){
        UI.displayMessages("Tüm alanları doldurmalısınız.","danger");
    }
    else {
        // bir film eklendi
        const newFilm = new Film( title, director, url);
         
        UI.addFilmToUi(newFilm); // arayüze film ekle
        Storage.addFilmToStorage(newFilm); // storage'a film ekleme
        UI.displayMessages("Film başarıyla eklendi...","success");

    }

    UI.clearInputs(titleElement,directorElement, urlElement); // film eklendikten sonra inputlar temizlendi.

    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme İşlemi Başarılı...","success");
    }
}
function clearAllFilms(e){

    if(confirm("Emin misiniz?")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    }
}