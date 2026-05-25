import { useCallback, useEffect, useState } from 'react'
import { stopMediaStream } from '../helpers/stopMediaStream'

export const useCamera = () => {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState('')
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const startCamera = useCallback(async () => {
    try {
      setIsLoading(true)
      setError('')

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
      })

      setStream(mediaStream)
      setHasStarted(true)

      return mediaStream
    } catch {
      setError('Camera access denied or unavailable.')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const stopCamera = useCallback(() => {
    stopMediaStream(stream)
    setStream(null)
  }, [stream])

  const saveCapturedImage = useCallback((image: string) => {
    setCapturedImage(image)
  }, [])

  useEffect(() => {
    return () => stopMediaStream(stream)
  }, [stream])

  return {
    stream,
    error,
    capturedImage,
    isLoading,
    hasStarted,
    startCamera,
    stopCamera,
    saveCapturedImage,
  }
}
