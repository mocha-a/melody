import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputBox({ 
width = '330px', height = '40px', label, className, type = 'text', readOnly = false, disabled = false, value, 
boxWidth='100%', justifyContent = "center", placeholder, bgColor, onChange, padding='10px 14px'}) {
    
    return (
        <Box
            className={className}
            component="div"
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
                fontSize: '16px',
                fontFamily: 'suiteLight',
                color: '#C3C3C3',
                top: '-7px',
                padding: '0 2px',
                },
                '& label.Mui-focused': {
                marginRight: '15px',
                fontSize: '16px',
                color: '#3C3C3C',
                fontFamily: 'suiteLight',
                },
                '& .MuiInputBase-input': {
                fontSize: '16px',
                fontFamily: 'suiteLight',
                color: '#3C3C3C',
                padding: padding,
                },
            }}
            />
        </Box>
    );
}
