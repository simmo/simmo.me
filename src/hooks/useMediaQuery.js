import {
  useCallback, useEffect, useState, useMemo,
} from 'react'

export default function useMediaQuery(query, fallback = false) {
  const isSupported = useMemo(() => typeof window !== 'undefined' || !!window.matchMedia, [])
  const mediaQuery = useMemo(
    () => (isSupported ? window.matchMedia(query) : { matches: fallback }),
    [query, isSupported],
  )
  const [state, setState] = useState(mediaQuery.matches)
  const handleChange = useCallback(
    ({ matches }) => {
      setState(matches)
    },
    [query],
  )

  useEffect(() => {
    if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [mediaQuery, handleChange])

  return state
}
