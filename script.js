//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
/*
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}
// we have 73 episode 
window.onload = setup;
*/

let rooot = document.getElementById("root")  ;

//=========================================header
let pageHeader = document.createElement("header");
  let headerText = document.createElement("h1");
    headerText.innerText = "Game of Thrones TV Series 2011–2019";

    pageHeader.appendChild(headerText);
    rooot.appendChild(pageHeader);
//==============================================


function makePageForEpisodes (episodeList){
  let pageEpisodes = document.getElementById("allEpisode");
  

  episodeList.forEach(obj => {
    let episodeBox = document.createElement("div");
      episodeBox.className = "split"

      let episodeName = document.createElement("h3");
      episodeName.innerText =`${obj.name} - S${String(obj.season).padStart(2,0)}E${String(obj.number).padStart(2,0)}`  // or innerHtml
      // pageEpisodes.appendChild(episodeName);

   /* let seasonNumber = document.createElement("span");
      seasonNumber.innerText = obj.season;
       pageEpisodes.appendChild(seasonNumber);
       */

    // let episodeNumber = document.createElement("h3");
      // episodeNumber.innerText = (obj.number)
      episodeBox.appendChild(episodeName)


// =====================================================Imag And Sum
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
    // ========================================================footer

    let footer = document.createElement("footer") ;

    let link = document.createElement("a") ;
    link.innerText = "source"
    footer.innerText = `created By @Zobeir : taken by this ${link}`;

      link.href = "https://www.tvmaze.com/";
      footer.appendChild(link)

      rooot.appendChild(footer)



window.onload = setup;
