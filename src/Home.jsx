
import './App.css'
import Hero from './Hero'
import Kolbook from './Kolbook'
import Rowbook from './Rowbook'
import Read from './Read'


function Home() {

  return (
    <>
      <div className='mx-24'>
        <Hero />
        <Kolbook />
        <Rowbook />
      </div>
    </>
  );
}

export default Home
