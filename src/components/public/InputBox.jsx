import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputBox({ 
width = '330px', height = '40px', label, type = 'text', readOnly = false, disabled = false, value, 
boxWidth='100%', justifyContent = "center", placeholder, bgColor, onChange, padding='10px 14px'}) {
    
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: 'flex',
                justifyContent: justifyContent,
                width: boxWidth,
                '& > :not(style)': {
                width,
                height,
                },
            }}
        >

        <TextField
            label={label}
            type = {type}
            readOnly={readOnly}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}  
            variant="outlined"
            sx={{
                width: '330px',
                '& .MuiOutlinedInput-root': {
                backgroundColor: bgColor,
                height: '40px',
                borderRadius: '5px',
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
                fontSize: '14px',
                fontFamily: 'suiteRegular',
                color: '#3C3C3C',
                padding: padding,
                },
            }}
            />
        </Box>
    );
}
