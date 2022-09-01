
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="auth-form" />
      </Routes>
    </div>
  );
}

export default App;
