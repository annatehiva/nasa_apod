import axios from 'axios'
import PhotoCard from './PhotoCard'

function HomePage(){
    const apiKey = import.meta.env.VITE_API_KEY
    console.log(apiKey)

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => {
    console.log(response.data);
    
  });
    return(
        <PhotoCard
        url='https://media1.tenor.com/m/B8rKEjDfDjwAAAAd/cat-clown.gif'
        title='clown_cat'
        />
    )
}
export default HomePage