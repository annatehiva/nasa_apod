import './App.css'
import Header from './components/Header'
import PhotoCard from './components/PhotoCard'
import TabBar from './components/TabBar'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  console.log(apiKey)

  return (
    <>
    <Header />
    <PhotoCard
    url='https://media1.tenor.com/m/B8rKEjDfDjwAAAAd/cat-clown.gif'
    title='clown_cat'
    />
    <TabBar />
    </>
  )
}

export default App
