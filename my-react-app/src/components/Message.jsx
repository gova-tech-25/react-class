import { useApp } from './AppContext'

function Message({ name }) {
  const { t } = useApp()
  return <h2>{t('hello')} {name}</h2>
}

export default Message
