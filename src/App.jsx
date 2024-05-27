import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <>
        <Header />
        <Navbar />
      <main className="mx-3">
        <Outlet />
      </main>
        <Footer />
      </>
  );
}

export default App;
