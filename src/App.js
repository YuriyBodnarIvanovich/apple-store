import {useSelector} from 'react-redux';
import './App.css';
import  MainPage  from './pages/MainPage/MainPage.jsx';
import Footer from '../src/components/Footer/Footer';
function App() {
  const title = useSelector( state =>  state.MainPage.title);
  return (
    <div className="main_Light">
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
