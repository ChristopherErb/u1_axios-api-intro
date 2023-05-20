//Async and Await

const getBreeds = async () => 
{

    const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogBreeds.data.message)

}
getBreeds();

//Dom Getters
const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

// Functionality
// listen for event, attach it to a button

button.addEventListener('click', async () =>
{
    let breed = breedInput.value
    console.log(breed)
    let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    console.log(response)
    //Drilling down into data to find where pic is
    let dogPic = response.data.message

    //setting DOM image
    imageDiv.innerHTML = `<img src =${dogPic}>`
})



//Setters