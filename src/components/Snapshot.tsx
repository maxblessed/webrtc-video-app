import { Box, Typography } from '@mui/material'

interface SnapshotProps {
  image: string
}

const Snapshot = ({ image }: SnapshotProps) => {
  return (
    <Box>
      <img
        src={image}
        alt='Captured snapshot'
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'contain',
        }}
      />
      <Typography variant='h6' sx={{ fontWeight: 600, mt: 1 }}>
        Captured Image
      </Typography>
    </Box>
  )
}

export default Snapshot
