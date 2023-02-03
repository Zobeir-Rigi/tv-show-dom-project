//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  searchh () ;
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
//============================================ Appending
form.appendChild(search);
form.appendChild(submitBut);
searchDiv.appendChild(form) ;
//============================================== Appending the Header Sections =============================== 
pageHeader.appendChild(searchDiv);
pageHeader.appendChild(headerText);//h1
pageHeader.appendChild(navBar)
rooot.appendChild(pageHeader);
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
      summaryText.textContent = obj.summary
      episodeBox.appendChild(summaryText)

    pageEpisodes.appendChild(episodeBox)
    rooot.appendChild(pageEpisodes)
    
  })
}
//=============================================================Search Event 
function searchh (){
  search.addEventListener("input", (e) => {
  // allEpisodes.innerHTML="";
  const searchString = e.target.value.toLowerCase();
  const filteredEpisodes = getAllEpisodes().filter((episode) => {
    // localeCompare might be neater here
    // let x =
     return episode.summary.toLowerCase().includes(searchString) || episode.name.toLowerCase().includes(searchString) ;
    // if (x){
    //         return x ;
    // }else {
    //         return "we could not find anything"
    // }
    
  });
  makePageForEpisodes(filteredEpisodes);
});

}

window.onload = setup;
 // ===========================================================================> Footer

    let footer = document.createElement("footer") ;
    let link = document.createElement("a") ;
    link.innerText = "source"
    footer.innerText = `created By @Zobeir : taken by this ${link}`;
      link.href = "https://www.tvmaze.com/";
      footer.appendChild(link)
      rooot.appendChild(footer)
      
