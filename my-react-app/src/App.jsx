import { AppProvider } from './context/AppContext.jsx'
import ThemeChange from './context/ThemeChange.jsx'
import LanguageToggle from './context/LanguageToggle.jsx'
import AttendanceMarker from './components/AttendanceMarker.jsx'
import Profile from './components/Profile.jsx'
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
