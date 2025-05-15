import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputBox({ label, width = '330px', height = '40px' }) {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: 'flex',             
                justifyContent: 'center',    
                width: '100%',               
                '& > :not(style)': {
                width,                         
                },
            }}
        >

        <TextField
            label={label}
            variant="outlined"
            sx={{
                width: '330px',
                '& .MuiOutlinedInput-root': {
                height: '40px',
                '& fieldset': {
                    borderColor: '#C3C3C3',
                },
                '&:hover fieldset': {
                    borderColor: '#7A7A7A',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#7A7A7A',
                },
                },
                '& label': {
                fontSize: '17px',
                fontFamily: 'suiteRegular',
                color: '#C3C3C3',
                top: '50%',
                transform: 'translate(14px, -50%) scale(1)',
                pointerEvents: 'none',
                },
                '& label.Mui-focused': {
                color: '#3C3C3C',
                transform: 'translate(14px, -28px) scale(0.75)',
                fontFamily: 'suiteRegular',
                },
                '& .MuiInputBase-input': {
                fontFamily: 'suiteRegular',
                color: '#3C3C3C',
                padding: '10px 14px',
                },
            }}
            />
        </Box>
    );
}
