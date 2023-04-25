import React from 'react';
import Header from './components/Header';
import Card from './components/Card'
import data from './data'


function App() {
const cards = data.map(item => {
  console.log(item.imageUrl)
  return(
    <Card item={item}/>
  )
})

  return (
    <div>
      <Header />
      <section className='card-block'>
        {cards}
        </section>
    </div>
  );
}

export default App;
