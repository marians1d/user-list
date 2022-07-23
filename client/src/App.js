import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { UserSection } from './components/UserSection/UserSection/UserSection';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
          <UserSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
