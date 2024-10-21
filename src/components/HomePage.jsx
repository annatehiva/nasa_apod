import axios from 'axios'
import PhotoCard from './PhotoCard'
import { useEffect, useState } from 'react'

function HomePage(){
    const apiKey = import.meta.env.VITE_API_KEY
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        const fetchDailyPhoto = async () => {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            console.log(response.data)
            setPhoto(response.data)
        }
        fetchDailyPhoto()
    }, [])
    return(
        <PhotoCard
        url={photo.url}
        title={photo.title}
        copyright={photo.copyright}
        />
    )
}
export default HomePage