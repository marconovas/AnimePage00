import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import { AnimeProvider } from './Context/AnimeContext';

function App() {
  return (
    <AnimeProvider>
      <NavBar/>

      <Footer/>
    </AnimeProvider>
  )
}

export default App;
