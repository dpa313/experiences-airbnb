import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Data from './data'

function App() {
    const cards = Data.map(item => {
      return(
        <Card
          key={item.id}
          {...item}
          // item={item}
        />
      )
    })
  return (
    <>
      <div className='container'>
      <Navbar />
      <Hero />
      <section className='card--list'>
        {cards}
      </section>
    


      {/* <Card
        img={statesImg}
        ratings = "5.0"
        reviewCount = {6}
        location = "USA"
        title = "Life lessons with Katie Zaferes"
        price = {36}
      /> */}
      </div>
      
    </>
  )
}

export default App
