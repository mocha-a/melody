import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputBox({ label, type = "text", className, placeholder, width = '330px', height = '40px', value, onChange }) {
    return (
        <Box
            className={className}
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
                type={type}
                label={label}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                variant="outlined"
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                    height,
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
                    fontSize: '16px',
                    fontFamily: 'suiteLight',
                    color: '#C3C3C3',
                    top: '-7px', // ✅ 위로 살짝 당겨줘
                    backgroundColor: 'white',
                    padding: '0 4px',
                    },
                    '& label.Mui-focused': {
                    color: '#3C3C3C',
                    fontFamily: 'suiteLight',
                    },
                    '& .MuiInputBase-input': {
                    fontFamily: 'suiteLight',
                    color: '#3C3C3C',
                    padding: '10px 14px',
                    },
                }}
                />

        </Box>
    );
}
