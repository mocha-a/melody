import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PayInputBox({ placeholder, width = '330px', height = '40px' }) {
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
            placeholder={ placeholder }
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
                '& .MuiInputBase-input': {
                fontFamily: 'suiteRegular',
                color: '#3C3C3C',
                padding: '10px 14px',
                backgroundColor:'#FFF2FA',
                },
            }}
            />
        </Box>
    );
}
