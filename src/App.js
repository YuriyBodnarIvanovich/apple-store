import {useSelector} from 'react-redux';
import  MainPage  from './pages/MainPage/MainPage.jsx';

function App() {
  const title = useSelector( state =>  state.MainPage.title);
  return (
    <MainPage/>
  );
}

export default App;
