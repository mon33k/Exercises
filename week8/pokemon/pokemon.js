document.querySelector('#search').addEventListener('click', function () {
    var pokemonName = document.querySelector('#name').value
    fetch('http://pokeapi.co/api/v2/type/13/' + pokemonName), {
        mode: 'no-cors'
        })   
        .then(function(response) {
            return response.json
        });
        .then(function(pokemon) {
            console.dir(pokemon)
            document.querySelector('#weight').innerText = pokemon.weight
            //getting this element in pokemon object and assigning it to the id weight
            document.querySelector('#height').innerText = pokemon.height
        });

})