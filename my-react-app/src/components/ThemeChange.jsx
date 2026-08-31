import { useApp } from './AppContext'

function ThemeChange() {
  const { theme, setTheme, t } = useApp()

  return (
    <div className="component-wrapper">
      <h2>{t('changeTheme')}</h2>
      <button
        type="button"
        className={theme === 'light' ? 'active' : ''}
        onClick={() => setTheme('light')}
      >
        {t('light')}
      </button>
      <button
        type="button"
        className={theme === 'dark' ? 'active' : ''}
        onClick={() => setTheme('dark')}
      >
        {t('dark')}
      </button>
      <button
        type="button"
        className={theme === 'ocean' ? 'active' : ''}
        onClick={() => setTheme('ocean')}
      >
        {t('ocean')}
      </button>
    </div>
  )
}

export default ThemeChange
