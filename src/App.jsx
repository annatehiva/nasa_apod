import './App.css'
import PhotoCard from './components/PhotoCard'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  console.log(apiKey)

  return (
    <PhotoCard
    url='https://media1.tenor.com/m/B8rKEjDfDjwAAAAd/cat-clown.gif'
    title='clown_cat'
    />
  )
}

export default App
