import React, { useState } from 'react'
import styles from './AdminLog.module.css'

const AdminLog = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear message when user starts typing
    if (message) {
      setMessage('')
      setMessageType('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.username.trim() || !formData.password.trim()) {
      setMessage('Please fill in all fields')
      setMessageType('error')
      return
    }

    setIsLoading(true)
    setMessage('')
    
    try {
      // Simulate API call - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes - replace with actual authentication
      if (formData.username === 'admin' && formData.password === 'admin123') {
        setMessage('Login successful!')
        setMessageType('success')
        // Here you would typically redirect or update global state
        console.log('Login successful for:', formData.username)
      } else {
        setMessage('Invalid username or password')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Login failed. Please try again.')
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Admin Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              className={styles.input}
              disabled={isLoading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className={styles.input}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          {message && (
            <div className={messageType === 'error' ? styles.errorMessage : styles.successMessage}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default AdminLog