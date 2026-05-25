import { Button, Paper, Stack, Typography, Box } from '@mui/material'

interface InstructionsProps {
  onStart: () => void
  isLoading: boolean
  hasStarted: boolean
}

const Instructions = ({
  onStart,
  isLoading,
  hasStarted,
}: InstructionsProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Stack spacing={2}>
        <Typography variant='h4' sx={{ fontWeight: 700 }}>
          Video Capture
        </Typography>

        <Typography variant='body1' color='text.secondary'>
          Click the button to allow camera access. A photo will be taken
          automatically after a few seconds.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='contained'
            onClick={onStart}
            disabled={isLoading || hasStarted}
            sx={{
              alignSelf: 'flex-start',
            }}
          >
            {isLoading ? 'Starting...' : 'Start'}
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}

export default Instructions
