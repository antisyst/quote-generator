import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';
import QuoteGenerator from './components/quote.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuoteGenerator />
  </React.StrictMode>,
)
