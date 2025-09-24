import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    login: 'student',
    password: 'student'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
    
    // Проверяем логин и пароль
    if (formData.login === 'student' && formData.password === 'student') {
      navigate('/student/profile')
    } else {
      alert('Неверный логин или пароль')
    }
  }

  return (
    <main className={styles.screen}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <img 
                src="https://c.animaapp.com/3f4KhxNp/img/component-1.svg" 
                alt="ScanAttend logo" 
                className={styles.logo}
              />
            </div>
          </div>
          <h1 className={styles.title}>ScanAttend</h1>
          <p className={styles.subtitle}>
            Отслеживание посещаемости<br />студентов
          </p>
        </div>

        {/* Login Form */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>С Возвращением!</h2>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="login" className={styles.label}>Логин</label>
              <input
                id="login"
                name="login"
                type="text"
                value={formData.login}
                onChange={handleInputChange}
                autoComplete="username"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Пароль</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
                required
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.button}>
              Войти
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LoginForm
