import { Paper } from '@mui/material'
import { useEffect, useRef } from 'react'

interface VideoPreviewProps {
  stream: MediaStream | null
}

const VideoPreview = ({ stream }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  if (!stream) {
    return null
  }

  return (
    <Paper
      elevation={2}
      sx={{
        overflow: 'hidden',
        borderRadius: 3,
      }}
    >
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
