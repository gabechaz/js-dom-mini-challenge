/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)
// Added the defer line in the script tag referencing this file in the head of the HTML file

/***** Deliverable 2 *****/
header.style.color = 'hotpink'


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let imgDiv = document.querySelector('#profile')
let imgUrl = imgDiv.querySelector('img')
imgUrl.src = traveler.photo
imgUrl.alt = traveler.name
/***** Deliverable 4 *****/
{/* <li data-id="{animalSighting id}">
  <p>{animal sighting description}</p>
  <img src="{animal sighting photo}" alt="{animal sighting species}"/>
  <a href="{animal sighting link}" target="_blank">Here's a video about the {animal sighting species} species!</a>
</li> */}
let sArray = traveler.animalSightings
const sightings = document.querySelector('ul#animals')
sArray.forEach ( function (sighting) {
    const sLi = document.createElement('li')
    const sP = document.createElement('p')
    const sImg = document.createElement('img')
    const sA = document.createElement('a')

    sLi.dataset.id = sighting.id

    sP.textContent = sighting.description

    sImg.src = sighting.photo
    sImg.alt = sighting.species

    sA.href = sighting.link
    sA.target = '_blank'
    sA.textContent = `Here's a video about the ${sighting.species} species!`

    sLi.append(sP, sImg, sA)
   
    
sightings.append(sLi)
})




/***** Deliverable 5 *****/
