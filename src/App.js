// import './App.css';
import AllRoutes from './components/AllRoutes';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <NavigationBar/>
        <AllRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
