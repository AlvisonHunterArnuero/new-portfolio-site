import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// FIX: Polyfill Buffer for gray-matter in the browser
import { Buffer } from 'buffer';

// Use the newly declared type on the global window object
if (typeof window !== 'undefined' && typeof window.Buffer === 'undefined') {
  // TypeScript now accepts this because you declared 'Buffer' on the Window interface
  window.Buffer = Buffer;
}

createRoot(document.getElementById('root')!).render(<App />);
