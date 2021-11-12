//DOM content loaded event
document.addEventListener("DOMContentLoaded", () => {
  //Create form with submit button and prevent default refresh
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
  //create link for fetch that will go to API of submitted word
  let link = ('https://api.dictionaryapi.dev/api/v2/entries/en/' + e.target.word_description.value)
  //fetch data, json-ify, pass json into function that will return definition
  fetch(link)
    .then(response => response.json())
    .then (json => buildList(json))
    //reset form
    form.reset()
  })  
});


//create function that takes json data and navigates to definition and posts info to content
function buildList(word){
 
  //create a container for each definition with save and clear button
  let definition = document.createElement('li')
  definition.className = "word-container"
  definition.innerHTML = `
    <div class = "content">
      <h4>${word[0].word}</h4>
      <p>${word[0].meanings[0].definitions[0].definition}</p>
    </div>
    <div>
      <button class="btn" id = "clear">Clear</button>
      <button class="btn" id = "save">Save</button>
    </div>
    
  `
  definition.querySelector('#save').addEventListener('click', () => {
    
  let savedSearch = document.createElement('li')
  savedSearch.className = "word-container"
  savedSearch.innerHTML = `
    <div class = "saved-content">
      <p>${word[0].word}: ${word[0].meanings[0].definitions[0].definition}</p>
      </div>
  `
  //Save button appends definition to sidebar
  document.querySelector('#sidebar').appendChild(savedSearch)
    
  })


  //clear button will delete definition
  definition.querySelector('#clear').addEventListener('click', () => {
    definition.remove();
  })

  //append container to list of definitions
  document.querySelector('#list').appendChild(definition)


};















//Possible additional features
/*
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("click", (event) =>{
  if(event.target.textContent === EMPTY_HEART){
    event.target.classList.add('activated-heart')
    event.target.textContent = FULL_HEART
    } else {
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART
    }
  })
  */
    
  
  
  
 











  
 





  