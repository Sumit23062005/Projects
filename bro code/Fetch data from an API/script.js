// fetch = Function used for making HTTPS requests to fetch  resources. 
// (JSON style data , images , files )
// Simplifies asynchronous data fetching in JavaScript and used for interacting with ApI'S to retreive and send data Asynchronously over the web 

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource");

//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error(error));



async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");
      imgElement.src = pokemonSprite;
      imgElement.style.display= "block";
    }
    catch(error){
        console.error(error);
    }
}