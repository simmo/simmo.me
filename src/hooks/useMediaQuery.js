import {
  useCallback, useEffect, useState, useMemo,
} from 'react'

const isSupported = typeof window !== 'undefined' && window.matchMedia

export default function useMediaQuery(query, fallback = false) {
  const mediaQuery = useMemo(
    () => (isSupported ? window.matchMedia(query) : { matches: fallback }),
    [query],
  )
  const [state, setState] = useState(mediaQuery.matches)
  const handleChange = useCallback(
    ({ matches }) => {
      setState(matches)
    },
    [query],
  )

  useEffect(() => {
    if (isSupported) {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (isSupported) {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [mediaQuery, handleChange])

  return state
}
