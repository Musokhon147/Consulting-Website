import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { BrandingProvider } from './context/BrandingContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <BrandingProvider>
          <App />
        </BrandingProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
)
