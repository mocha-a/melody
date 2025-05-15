import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
    return (
        <Stack spacing={2} direction="row">
        <CircularProgress sx={{ color: '#F5A2D8' }} />
        </Stack>
    );
}
