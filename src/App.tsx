import { Container, Stack } from '@mui/material'
import { useEffect, useRef } from 'react'

import Instructions from './components/Instruction'
import VideoPreview from './components/VideoPreview'
import Snapshot from './components/Snapshot'
import ErrorMessage from './components/ErrorMessage'

import { captureSnapshot } from './utils'

import { useCamera } from './hooks/useCamera'

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

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
      const video = videoRef.current

      if (!video) return

      const image = captureSnapshot(video)

      if (!image) return

      saveCapturedImage(image)

      stopCamera()
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
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

        {stream ? (
          <VideoPreview stream={stream} videoRef={videoRef} />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : null}

        {capturedImage && <Snapshot image={capturedImage} />}
      </Stack>
    </Container>
  )
}

export default App
