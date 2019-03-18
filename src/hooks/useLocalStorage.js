import { useCallback, useState, useEffect } from 'react'

const isSupported = typeof window !== 'undefined' && window.localStorage

export default function useLocalStorage(key) {
  const [state, setState] = useState(() => {
    if (isSupported) {
      return JSON.parse(localStorage.getItem(key))
    }

    return null
  })
  const handleStorage = useCallback((event) => {
    if ((event.isTrusted, event.key === key && event.oldValue !== event.newValue)) {
      setState(JSON.parse(event.newValue))
    }
  }, [])

  useEffect(() => {
    if (isSupported) {
      window.addEventListener('storage', handleStorage)
    }

    return () => {
      if (isSupported) {
        window.removeEventListener('storage', handleStorage)
      }
    }
  }, [handleStorage])

  const updater = useCallback(
    (value) => {
      localStorage.setItem(key, JSON.stringify(value))
      setState(value)
    },
    [key],
  )

  return [state, updater]
}
