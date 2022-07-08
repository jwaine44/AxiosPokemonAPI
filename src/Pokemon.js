import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                // console.log to find where the results are, in this API it was in results
                // console.log(response);
                setPokemon(response.data.results)
            })
            // Sending in second argument below of [] an array of all the variables you want to keep track of; any time variable in that array changes , then useEffect will run
            // having an empty array is so useEffect can be run on the very first render
    }, []);

  return (
    <div>
        {pokemon && pokemon.map((pokemon, index) => {
            return (<div key={index}><ul><li>{pokemon.name}</li></ul></div>)
        })}
    </div>
  );
}

export default Pokemon;