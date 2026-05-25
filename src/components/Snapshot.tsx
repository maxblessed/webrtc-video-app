import { Paper, Stack, Typography } from '@mui/material'

interface SnapshotProps {
  image: string
}

const Snapshot = ({ image }: SnapshotProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 3,
      }}
    >
      <Stack spacing={2}>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          Captured Image
        </Typography>

        <img
          src={image}
          alt='Captured snapshot'
          style={{
            width: '100%',
            borderRadius: 12,
          }}
        />
      </Stack>
    </Paper>
  )
}

export default Snapshot
