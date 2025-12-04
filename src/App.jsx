import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import { AnimeProvider } from './Context/AnimeContext';
import AnimeList from './Pages/AnimeList';

function App() {
  return (
    <AnimeProvider>
      <NavBar/>
      
      <AnimeList />
      
      <Footer/>
    </AnimeProvider>
  )
}

export default App;
