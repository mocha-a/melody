import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckText({ label, className, checked, onChange }) {
    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={onChange} />}
                label={<span className={className}>{label}</span>}
            />
        </FormGroup>
    );
}

export default CheckText;
