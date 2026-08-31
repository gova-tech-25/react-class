import { useState } from 'react'

const scientists = [
  {
    id: 1,
    name: 'Albert Einstein',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80',
    description: [
      'He changed how we understand space and time.',
      'His theory of relativity changed modern physics.',
      'He won the Nobel Prize for his work on light.',
    ],
  },
  {
    id: 2,
    name: 'Marie Curie',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    description: [
      'She was a pioneer in radioactivity research.',
      'She was the first woman to win a Nobel Prize.',
      'Her work opened new paths in science and medicine.',
    ],
  },
  {
    id: 3,
    name: 'Isaac Newton',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    description: [
      'He discovered the laws of motion and gravity.',
      'His work helped shape modern mathematics and physics.',
      'He created the basis for many scientific ideas we use today.',
    ],
  },
]

function App() {
  const total = 50
  const [present, setPresent] = useState(0)
  const [absent, setAbsent] = useState(total)
  const [selectedScientist, setSelectedScientist] = useState(scientists[0])

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
    <div>
      <section>
        <h1>Attendance Marker</h1>
        <p>Total Students: {total}</p>
        <p>Present: {present}</p>
        <p>Absent: {absent}</p>

        <button type="button" onClick={handlePresent}>
          Present
        </button>
        <button type="button" onClick={handleAbsent}>
          Absent
        </button>
      </section>

      <section>
        <h2>Scientists</h2>

        <div>
          {scientists.map((scientist) => (
            <button
              key={scientist.id}
              type="button"
              onClick={() => setSelectedScientist(scientist)}
            >
              <img src={scientist.image} alt={scientist.name} width="200" height="200" />
              <h3>{scientist.name}</h3>
            </button>
          ))}
        </div>

        <div>
          <img
            src={selectedScientist.image}
            alt={selectedScientist.name}
            width="250"
            height="250"
          />
          <h3>{selectedScientist.name}</h3>
          {selectedScientist.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
