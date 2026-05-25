export const captureSnapshot = (video: HTMLVideoElement) => {
  const canvas = document.createElement('canvas')

  canvas.width = video.videoWidth
  canvas.height = video.videoHeight

  const context = canvas.getContext('2d')

  if (!context) return null

  context.drawImage(video, 0, 0)

  return canvas.toDataURL('image/png')
}
