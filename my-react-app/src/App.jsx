import { AppProvider } from './components/AppContext'
import ThemeChange from './components/ThemeChange'
import LanguageToggle from './components/LanguageToggle'
import AttendanceMarker from './components/AttendanceMarker'
import Profile from './components/Profile'
import './App.css'

function App() {
  return (
    <AppProvider>
      <ThemeChange />
      <LanguageToggle />
      <AttendanceMarker />
      <Profile />
    </AppProvider>
  )
}

export default App
