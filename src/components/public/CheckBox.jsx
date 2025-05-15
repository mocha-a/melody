import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes() {
    return (
        <div>
        <Checkbox
            {...label}
            defaultChecked
            sx={{
            color: "#7A7A7A",
            '&.Mui-checked': {
                color: "#F5A2D8",
            },
            }}
        />
        </div>
    );
}
