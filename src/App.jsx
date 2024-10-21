import Header from './components/Header'
import HomePage from './components/HomePage'
import TabBar from './components/TabBar'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  console.log(apiKey)

  return (
    <>
    <Header />
    <HomePage />
    <TabBar />
    </>
  )
}

export default App
