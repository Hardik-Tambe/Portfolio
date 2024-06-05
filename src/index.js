import 'jquery';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Loader from './Components/Loader';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching initial data)
    const loadApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate a 4-second delay
      setLoading(false);
    };

    loadApp();
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
