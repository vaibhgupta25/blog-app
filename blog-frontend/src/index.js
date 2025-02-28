import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client= {queryClient}> 
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
