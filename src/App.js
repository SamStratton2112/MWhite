import './App.css';
import AllRoutes from './components/AllRoutes';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <AllRoutes/>
    </BrowserRouter>
  );
}

export default App;
