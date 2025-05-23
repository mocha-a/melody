import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';

import Header from './components/public/Header';
import './styles/public.scss';
import Cursor from './components/public/Cursor';


function App() {
  return (
      <BrowserRouter>
        <div className="all_container">
          <Header/>
          <AppRouter />
          <Cursor/>
        </div>
      </BrowserRouter>
  );
}

export default App;