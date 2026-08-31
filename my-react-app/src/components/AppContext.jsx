import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const translations = {
  en: {
    attendance: 'Attendance Marker',
    totalStudents: 'Total Students',
    present: 'Present',
    absent: 'Absent',
    scientists: 'Scientists',
    studentForm: 'Student Form',
    name: 'Name',
    rollNo: 'Roll No',
    branch: 'Branch',
    year: 'Year',
    submit: 'Submit',
    studentDetails: 'Student Details',
    changeTheme: 'Change Theme',
    light: 'Light',
    dark: 'Dark',
    ocean: 'Ocean',
    language: 'Language',
    english: 'English',
    telugu: 'Telugu',
    hello: 'Hello from',
    einstein: 'Albert Einstein',
    curie: 'Marie Curie',
    newton: 'Isaac Newton',
    einsteinDesc1: 'He changed how we understand space and time.',
    einsteinDesc2: 'His theory of relativity changed modern physics.',
    einsteinDesc3: 'He won the Nobel Prize for his work on light.',
    curieDesc1: 'She was a pioneer in radioactivity research.',
    curieDesc2: 'She was the first woman to win a Nobel Prize.',
    curieDesc3: 'Her work opened new paths in science and medicine.',
    newtonDesc1: 'He discovered the laws of motion and gravity.',
    newtonDesc2: 'His work helped shape modern mathematics and physics.',
    newtonDesc3: 'He created the basis for many scientific ideas we use today.',
  },
  te: {
    attendance: 'హాజరు మార్కర్',
    totalStudents: 'మొత్తం విద్యార్థులు',
    present: 'హాజరు',
    absent: 'గైర్హాజరు',
    scientists: 'శాస్త్రవేత్తలు',
    studentForm: 'విద్యార్థి ఫారమ్',
    name: 'పేరు',
    rollNo: 'రోల్ నం',
    branch: 'బ్రాంచ్',
    year: 'సంవత్సరం',
    submit: 'సమర్పించు',
    studentDetails: 'విద్యార్థి వివరాలు',
    changeTheme: 'థీమ్ మార్చు',
    light: 'లైట్',
    dark: 'డార్క్',
    ocean: 'ఓషన్',
    language: 'భాష',
    english: 'ఇంగ్లీష్',
    telugu: 'తెలుగు',
    hello: 'నుండి నమస్కారం',
    einstein: 'ఆల్బర్ట్ ఐన్స్టీన్',
    curie: 'మేరీ క్యూరీ',
    newton: 'ఐజాక్ న్యూటన్',
    einsteinDesc1: 'అతను స్థలం మరియు సమయాన్ని మనం ఎలా అర్థం చేసుకుంటామో మార్చాడు.',
    einsteinDesc2: 'అతని సాపేక్షతా సిద్ధాంతం ఆధునిక భౌతిక శాస్త్రాన్ని మార్చింది.',
    einsteinDesc3: 'అతను కాంతిపై తన పనికి నోబెల్ బహుమతి పొందాడు.',
    curieDesc1: 'ఆమె రేడియోయాక్టివిటీ పరిశోధనలో మార్గదర్శి.',
    curieDesc2: 'ఆమె నోబెల్ బహుమతి పొందిన మొదటి మహిళ.',
    curieDesc3: 'ఆమె పని శాస్త్రం మరియు వైద్యంలో కొత్త మార్గాలు తెరిచింది.',
    newtonDesc1: 'అతను చలనం మరియు గురుత్వాకర్షణ నియమాలను కనుగొన్నాడు.',
    newtonDesc2: 'అతని పని ఆధునిక గణితం మరియు భౌతిక శాస్త్రాన్ని రూపొందించడంలో సహాయపడింది.',
    newtonDesc3: 'అతను మనం ఉపయోగించే చాలా శాస్త్రీయ ఆలోచనలకు పునాది సృష్టించాడు.',
  },
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('en')

  const t = (key) => translations[lang][key] || key

  return (
    <AppContext.Provider value={{ theme, setTheme, lang, setLang, t }}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
