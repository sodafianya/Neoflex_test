import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Cart from './components/Cart/Cart';
import { headphones, smartphones } from './components/data';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const goToHome = () => {
    setShowCart(false);
  };

  return (
    <div className="app">
      <Header 
        cartItemsCount={getTotalItems()} 
        onCartClick={toggleCart}
        onLogoClick={goToHome}
      />
      <main>
        {showCart ? (
          <Cart 
            items={cartItems} 
            totalPrice={getTotalPrice()} 
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
          />
        ) : (
          <>
            <ProductGrid 
              products={headphones} 
              categoryTitle="Наушники" 
              cartItems={cartItems}
              onAddToCart={addToCart}
            />
            <ProductGrid 
              products={smartphones} 
              categoryTitle="Беспроводные наушники" 
              cartItems={cartItems}
              onAddToCart={addToCart}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;