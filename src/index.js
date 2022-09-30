import "./styles.css";

async function getapi() {
  var pohja = "https://api.tvmaze.com/search/shows?q=";
  var kysymys = document.getElementById("input-form");
  var osoite = pohja.concat(kysymys);
  const vastaus = await fetch(osoite);
  var data = vastaus.json();
  display(data);
}

function display(data) {
  document.getElementsByClassName("show-data").innerHTML = `
  <div class="show-data">
    <img src="${data.image}"> 
    <div class="show-info"> 
        <h1>${data.name}</h1> 
        <p>${data.summary}</p> 
    </div> 
  </div>`;
}

getapi();
