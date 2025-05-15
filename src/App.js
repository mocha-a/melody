import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/Router';
import './styles/public.scss';

function App() {
  return (
      <BrowserRouter>
        <div className="all_container">
          <AppRouter />
        </div>
      </BrowserRouter>
  );
}

export default App;