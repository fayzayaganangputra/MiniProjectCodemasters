
import '../App.css'
import Hero from '../components/Hero'
import Kolbook from '../components/Kolbook'
import Rowbook from '../components/Rowbook'
import Read from '../components/Read'


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
