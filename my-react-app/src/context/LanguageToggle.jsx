import { useApp } from './AppContext.jsx'

function LanguageToggle() {
  const { lang, setLang, t } = useApp()

  return (
    <div className="component-wrapper">
      <h2>{t('language')}</h2>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
      >
        {t('english')}
      </button>
      <button
        type="button"
        className={lang === 'te' ? 'active' : ''}
        onClick={() => setLang('te')}
      >
        {t('telugu')}
      </button>
    </div>
  )
}

export default LanguageToggle
