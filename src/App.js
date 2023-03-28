import logo from './logo.svg';
import './App.css';

//components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
//images

//data
import data from './data/data';

function App() {

  const cards = data.map((item,index)=>{
    console.log(item)
    return(
      <Card
        key={index}
        // item = {item}
        {...item}
        // img={item.coverImg}
        // rating = {item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots = {item.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <div className='review-cards'>
       {cards}      
      </div>
    </div>
  );
}

export default App;
