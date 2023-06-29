import Background from './components/Background';
import Navbar from './components/Navbar';
import ProductPage from './sections/ProductPage'
import Container from './components/Container'
import './App.css'

function App() {

  return (
    <div className="App selection:bg-slate-700 selection:text-white dark:selection:bg-white dark:selection:text-slate-800">

      <Background>
      </Background>
      <Container>
        <Navbar />
        <ProductPage />
      </Container>
    </div>
  );
}

export default App;
