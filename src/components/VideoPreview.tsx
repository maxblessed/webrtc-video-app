import { Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

interface VideoPreviewProps {
  stream: MediaStream | null
  videoRef: React.RefObject<HTMLVideoElement | null>
}

const VideoPreview = ({ stream, videoRef }: VideoPreviewProps) => {
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.srcObject = stream
    }

    const interval = setInterval(() => {
      setCountDown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [stream, videoRef])

  return (
    <Paper
      elevation={2}
      sx={{
        overflow: 'hidden',
        borderRadius: 3,
      }}
    >
      <Typography
        variant='h6'
        sx={{ fontWeight: 600, fontFamily: 'Inter, Roboto, sans-serif' }}
      >
        Live Video Preview ({countDown}s)
      </Typography>
      <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
        This is a live preview of the video stream.
      </Typography>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </Paper>
  )
}

export default VideoPreview
