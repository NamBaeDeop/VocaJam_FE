import Header from './Header';
import Footer from './Footer';
// import VocaSection from './VocaSection';
import VocaPage from './jsx/VocaPage/VocaPage';
import './css/wrap.css';


function App() {
  return (
    <div id='wrap'>
      <Header/>
      <VocaPage/>
      <Footer/>
    </div>
  );
}

export default App;
