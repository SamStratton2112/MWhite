import AllRoutes from './components/AllRoutes';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app aleo-reg'>
        <NavigationBar/>
        <AllRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
