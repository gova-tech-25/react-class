import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

function AttendanceMarker() {
  const { t } = useApp()
  const total = 50
  const [present, setPresent] = useState(0)
  const [absent, setAbsent] = useState(total)

  const handlePresent = () => {
    if (absent > 0) {
      setPresent((prevPresent) => prevPresent + 1)
      setAbsent((prevAbsent) => prevAbsent - 1)
    }
  }

  const handleAbsent = () => {
    if (present > 0) {
      setPresent((prevPresent) => prevPresent - 1)
      setAbsent((prevAbsent) => prevAbsent + 1)
    }
  }

  return (
    <div className="component-wrapper">
    <section>
      <h1>{t('attendance')}</h1>
      <p>{t('totalStudents')}: {total}</p>
      <p>{t('present')}: {present}</p>
      <p>{t('absent')}: {absent}</p>

      <button type="button" onClick={handlePresent}>
        {t('present')}
      </button>
      <button type="button" onClick={handleAbsent}>
        {t('absent')}
      </button>
    </section>
    </div>
  )
}

export default AttendanceMarker
