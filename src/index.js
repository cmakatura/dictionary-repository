  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
//create a URL that goes to API of submitted item
let link = ('https://api.dictionaryapi.dev/api/v2/entries/en/' + e.target.word_description.value)
fetch(link)
.then(res => res.json())
.then (json => buildList(json))

      form.reset()
    })  
  });

  //function that shows the searched word and the definition
  function buildList(word){
    
    let p = document.createElement('p')
    p.textContent = `${word[0].word}: ${word[0].meanings[0].definitions[0].definition}`
    document.querySelector('#list').appendChild(p)

    // Add button to clear definition
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = " Clear"
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p)
    };

    //Deletes definition
    function handleDelete(e){
      e.target.parentNode.remove();
    }



 
  


  
 






// Tried to create an h3 word and p definition but couldnt figure out how to delete both with one button
//let h3 = document.createElement('h3')
    //h3.textContent = word[0].word
      //h3.textContent = `${word[0].word} \n ${word[0].meanings[0].definitions[0].definition}`
      //document.querySelector('#list').appendChild(h3)