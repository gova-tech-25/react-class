import { useState } from 'react'
import { useApp } from './AppContext'

function StudentDisplay({ name, rollNo, branch, year }) {
  const { t } = useApp()
  return (
    <div className="student-card">
      <h3>{t('studentDetails')}</h3>
      <p>{t('name')}: {name || '-'}</p>
      <p>{t('rollNo')}: {rollNo || '-'}</p>
      <p>{t('branch')}: {branch || '-'}</p>
      <p>{t('year')}: {year || '-'}</p>
    </div>
  )
}

function StudentForm() {
  const [student, setStudent] = useState({
    name: 'Dande Govardhan',
    rollNo: 'S20240010053',
    branch: 'CSE',
    year: '3rd year'
  })

  const [form, setForm] = useState({
    name: '',
    rollNo: '',
    branch: '',
    year: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStudent(form)
  }

  const { t } = useApp()

  return (
  <div className="component-wrapper">
  <section className="form-section">
    <h2>{t('studentForm')}</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">{t('name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNo">{t('rollNo')}</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            placeholder="Roll No"
            value={form.rollNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">{t('branch')}</label>
          <input
            type="text"
            id="branch"
            name="branch"
            placeholder="Branch"
            value={form.branch}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">{t('year')}</label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">{t('submit')}</button>
    </form>
    <StudentDisplay {...student} />
  </section>
  </div>
  )
}

export default StudentForm
