import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import appStore from './store/appStore.js';
import { Provider } from 'react-redux'
import AuthInitializer from './components/common/AuthInitializer.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <StrictMode>
    <BrowserRouter>
    <AuthInitializer>
      <App />
    </AuthInitializer>
    </BrowserRouter>
  </StrictMode>
  </Provider>
)
