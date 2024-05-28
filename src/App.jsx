import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

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
