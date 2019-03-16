import { useCallback, useState, useEffect } from 'react'

export default function useLocalStorage(key) {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)))
  const handleStorage = useCallback((event) => {
    if ((event.isTrusted, event.key === key && event.oldValue !== event.newValue)) {
      setState(JSON.parse(event.newValue))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
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
