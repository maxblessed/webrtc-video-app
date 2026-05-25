import { Container, Stack } from '@mui/material'
import { useEffect, useRef } from 'react'

import Instructions from './components/Instruction'
import VideoPreview from './components/VideoPreview'
import Snapshot from './components/Snapshots'
import ErrorMessage from './components/ErrorMessage'

import { useCamera } from './hooks/useCamera'

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const {
    stream,
    error,
    capturedImage,
    isLoading,
    hasStarted,
    startCamera,
    stopCamera,
    saveCapturedImage,
  } = useCamera()

  useEffect(() => {
    if (!stream) return

    const timer = setTimeout(() => {
      const video = document.querySelector('video')

      if (!video || !canvasRef.current) return

      const canvas = canvasRef.current

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const context = canvas.getContext('2d')

      if (!context) return

      context.drawImage(video, 0, 0)

      const image = canvas.toDataURL('image/png')

      saveCapturedImage(image)

      stopCamera()
    }, 5000)

    return () => clearTimeout(timer)
  }, [stream, saveCapturedImage, stopCamera])

  return (
    <Container
      maxWidth='md'
      sx={{
        py: 6,
      }}
    >
      <Stack spacing={4}>
        <Instructions
          onStart={startCamera}
          isLoading={isLoading}
          hasStarted={hasStarted}
        />

        <ErrorMessage message={error} />

        <VideoPreview stream={stream} />

        <Snapshot image={capturedImage} />

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </Stack>
    </Container>
  )
}

export default App
