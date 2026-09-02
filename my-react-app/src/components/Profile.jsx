import Message from './Message'
import { useApp } from '../context/AppContext.jsx'

const scientists = [
  {
    id: 1,
    nameKey: 'einstein',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80',
    descKeys: ['einsteinDesc1', 'einsteinDesc2', 'einsteinDesc3'],
  },
  {
    id: 2,
    nameKey: 'curie',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    descKeys: ['curieDesc1', 'curieDesc2', 'curieDesc3'],
  },
  {
    id: 3,
    nameKey: 'newton',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    descKeys: ['newtonDesc1', 'newtonDesc2', 'newtonDesc3'],
  },
]

function Profile() {
  const { t } = useApp()

  return (
    <div className="component-wrapper">
    <section>
      <h2>{t('scientists')}</h2>

      {scientists.map((scientist) => (
        <div key={scientist.id}>
          <img src={scientist.image} alt={t(scientist.nameKey)} width="200" height="200" />
          <Message name={t(scientist.nameKey)} />
          <h3>{t(scientist.nameKey)}</h3>
          {scientist.descKeys.map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
        </div>
      ))}
    </section>
    </div>
  )
}

export default Profile
