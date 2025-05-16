import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';

import Header from './components/public/Header';
import './styles/public.scss';

function App() {
  return (
      <BrowserRouter>
        <div className="all_container">
          <Header/>
            <AppRouter />
        </div>
      </BrowserRouter>
  );
}

export default App;