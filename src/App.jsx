import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProductGrid from './components/ProductGrid/ProductGrid';
import { headphones, smartphones } from './components/data'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <main>
        <ProductGrid 
          products={headphones} 
          categoryTitle="Наушники" 
        />
        <ProductGrid 
          products={smartphones} 
          categoryTitle="Беспроводные наушники" 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;