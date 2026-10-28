//STEP 1 Grab the page elements that we need
const searchInput = document.getElementById("search");
const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail");

const randomButton = document.getElementById("random-button");

//All the shows live in the array once they load
//Search filters THIS array, so searching cost zero network request

let allShows = [];

//STEP 2 Place your order: fetch our TV shows

//We need the address
const BASE_URL = "https://api.tvmaze.com";

//Every request goes thru this helper function, three steps every time:
//1 Order ---, fetch(url)
//2 Check the plate --> res.ok
//3 Unwrap --- res.json()

async function getJSON(path) {
    const response = await fetch(BASE_URL + path);
    return await response.json();
}

//Two ways to order from menu:
// "/shows?page=0" --> LIST of shows --> an array (shows)
// "/show/1" --> ONE show --> {} an object (one show);

//Create a function to pull all shows
async function getShows() {
    const data = await getJSON("/shows?page=0");
    // console.log(data);
    // console.log(toCard(data[0]));
    console.log(toCard(data[0]).name);
    console.log(toCard(data[0]).rating);
    console.log(toCard(data[0]).image);
}

//Create a function to pull only one show
async function getShow(id) {
    return await getJSON("/show/" + id);
}

console.log(getShows());

function toCard(raw) {
    return {
        id: raw.id,
        name: raw.name,
        genres: raw.genres,
        year: raw.premiered,
        rating: raw.rating.average,
        image: raw.image.medium
    };
};


