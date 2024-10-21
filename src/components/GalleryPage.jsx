import axios from "axios"
import { useState, useEffect } from 'react'
import PhotoList from './PhotoList'

function GalleryPage(){
    const apiKey = import.meta.env.VITE_API_KEY
    const [photos, setPhotos] = useState([])

    useEffect(() =>{
        const fetchPhotos = async () => {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
            console.log(response.data)
            setPhotos(response.data)
        }
        fetchPhotos()
    },[])
    return(
        <PhotoList photos={photos} />
    )
}
export default GalleryPage

