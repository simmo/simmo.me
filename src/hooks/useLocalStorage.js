import { useCallback, useState, useEffect } from 'react'

const isSupported = typeof window !== 'undefined' && window.localStorage

export default function useLocalStorage(key) {
  const [state, setState] = useState(() => {
    if (isSupported) {
      return JSON.parse(localStorage.getItem(key))
    }

    return null
  })
  const handleStorage = useCallback(
    ({ isTrusted, newValue, oldValue, key: storageKey }) => {
      if ((isTrusted, storageKey === key && oldValue !== newValue)) {
        setState(JSON.parse(newValue))
      }
    },
    []
  )

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
    value => {
      localStorage.setItem(key, JSON.stringify(value))
      setState(value)
    },
    [key]
  )

  return [state, updater]
}
