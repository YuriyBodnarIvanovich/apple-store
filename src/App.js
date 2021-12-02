import {useSelector} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import  MainPage  from './pages/MainPage/MainPage.jsx';
import  CatalogOfGoods  from './pages/CatalogOfGoods/CatalogOfGoods.jsx';
import Footer from '../src/components/Footer/Footer';
import Menu from '../src/components/Menu/Menu';

function App() {
  const title = useSelector( state =>  state.MainPage.title);
  return (
    <BrowserRouter>
      <div className="main_Light">
        <Menu/>
        <Route exact path='/'
          render={ () =>  <MainPage/>} />
        <Route exact path='/CatalogOfGoods'
          render={ () => <CatalogOfGoods/>} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
