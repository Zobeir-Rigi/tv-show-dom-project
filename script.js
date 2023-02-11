const url = "https://api.tvmaze.com/shows/82/episodes" ;
let dataFromJson = [] ;

function setup() {
  fetch(url)
  .then(res => res.json())
  .then(data => {
     console.log(data)
       dataFromJson = data ;
  makePageForEpisodes(dataFromJson);


  })
  searchh () ;
  DropDown() ; 
} 



let rooot = document.getElementById("root");
//================================================================================================= Header
let pageHeader = document.createElement("header");
  let headerText = document.createElement("h1");
    headerText.innerText = "Game of Thrones TV Series 2011–2019";
    //========================================== Nav
let navBar = document.createElement("nav")
let ulList = document.createElement("ul");
 let navArray = ["Home", "New", "Watchlist", "About"]
 navArray.forEach(item=>{
  let li = document.createElement("li");
  li.innerText= item ;

  // let link = document.createElement("a")
  // link.innerText ="#"

   ulList.appendChild(li)
   navBar.appendChild(ulList)

 })
    //============================================ SearchBar
let searchDiv = document.createElement("div")
searchDiv.className = "search-div"
let form = document.createElement("form")

let search = document.createElement("input");
search.type = "text" ;
search.id = "mysearch";
search.placeholder = "Search it out ... " ;
search.value = "" ;
// search button
let submitBut = document.createElement("button") ;
submitBut.type = "submit"
submitBut.classList.add("search-btn");
//==========================


//============================================ Appending
form.appendChild(search);
// form.appendChild(submitBut);
searchDiv.appendChild(form) ;
//============================================== Appending the Header Sections =============================== 
pageHeader.appendChild(searchDiv);
pageHeader.appendChild(headerText);//h1
pageHeader.appendChild(navBar)
rooot.appendChild(pageHeader);

  let drowpdown = document.createElement("select")
//==================================================== function
function makePageForEpisodes(episodeList) {
  // clear out the rootElement's HTML before we add the new stuff

  let pageEpisodes = document.getElementById("allEpisode");
  pageEpisodes.innerHTML=" "
  // if (episodeList.length === 0){
  //   pageEpisodes.innerHTML ="<h1 >Sorry \not found</h1>"
  // }
  // else{
  episodeList.forEach(obj => {
    let episodeBox = document.createElement("div");
      episodeBox.className = "split"

      let episodeName = document.createElement("h3");
      episodeName.innerText =`${obj.name} - S${String(obj.season).padStart(2,0)}E${String(obj.number).padStart(2,0)}`  // or innerHtml
      episodeBox.appendChild(episodeName)

    let  = mediumImage = document.createElement("img");
      mediumImage.src = obj.image.medium
      mediumImage.alt =obj.name
      episodeBox.appendChild(mediumImage);

    let summaryText = document.createElement("p");
      summaryText.innerHTML = obj.summary
      episodeBox.appendChild(summaryText);

      let option = document.createElement("option") ;
      console.log(option)
      option.value = obj.id ;
  option.innerText = `S${String(obj.season).padStart(2,0)}E${String(obj.number).padStart(2,0)} * ${obj.name}` ;
  drowpdown.appendChild(option);
  form.appendChild(drowpdown);



    pageEpisodes.appendChild(episodeBox)
    rooot.appendChild(pageEpisodes)
    
  })
}
//=============================================================Search Event 
function searchh (){
  search.addEventListener("input", (e) => {
    e.preventDefault()
  // allEpisodes.innerHTML="";
  const searchString = e.target.value.toLowerCase();
  const filteredEpisodes = dataFromJson.filter((episode) => {
    // localeCompare might be neater here
    
     return episode.summary.toLowerCase().includes(searchString) || episode.name.toLowerCase().includes(searchString) ;
  });
  makePageForEpisodes(filteredEpisodes);
});

}
//=========================================DropDown
// When the user makes a selection, they should be taken directly to that episode in the list

function DropDown(){
    drowpdown.addEventListener("change" , (e) =>{
const idSelectByUser = Number(e.target.value) ;
console.log(typeof idSelectByUser) ; 
// so we should convert the top line  to Number 
console.log({idSelectByUser});
const selectEpisode = dataFromJson.find(episode =>
  episode.id === idSelectByUser)
  console.log(selectEpisode)
  if(selectEpisode){
     makePageForEpisodes([selectEpisode]);

  }
})
}

 // ===========================================================================> Footer

    let footer = document.createElement("footer") ;
    let link = document.createElement("a") ;
    link.innerText = "source"
    footer.innerText = `created By @Zobeir : taken by this ${link}`;
      link.href = "https://www.tvmaze.com/";
      footer.appendChild(link)
      rooot.appendChild(footer)
      
window.onload = setup;
