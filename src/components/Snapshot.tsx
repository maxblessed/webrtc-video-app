import { Box, Stack, Typography } from '@mui/material'

interface SnapshotProps {
  image: string
}

const Snapshot = ({ image }: SnapshotProps) => {
  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          Captured Image
        </Typography>

        <img
          src={image}
          alt='Captured snapshot'
          style={{
            width: '100%',
            maxHeight: '500px',
            objectFit: 'contain',
          }}
        />
      </Stack>
    </Box>
  )
}

export default Snapshot
