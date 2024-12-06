import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import "./app/styles/index.scss"
import { ThemeProvider } from './app/providers/ThemeProvider/index.ts'
import WordProvider from './app/providers/WordProvider/ui/WordProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WordProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </WordProvider>
  </StrictMode>,
)
