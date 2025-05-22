import { useEffect, useState } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// MUI -> IconButton, AddIcon, RemoveIcon 사용

export default function CountingBtn({ defaultCount = 1, onChange }) {
    const [count, setCount] = useState(defaultCount);

    // 기존 개수
    useEffect(() => {
        setCount(defaultCount);
    }, [defaultCount]);
    
    const increase = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange?.(newCount);
    };

    const decrease = () => {
        const newCount = count > 1 ? count - 1 : 1;
        setCount(newCount);
        onChange?.(newCount);
    };

    return (
        <Box sx={{ textAlign: 'center' }}>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <IconButton size="small" onClick={decrease}
            sx={{
                border: '1px solid #343434',
                width: 32, height: 32,
                borderRadius: '50%'
            }}
            >
            <RemoveIcon fontSize="small" sx={{ color: '#343434' }} />
            </IconButton>

            {/* 개수 */}
            <Typography
                sx={{
                    minWidth: 20,
                    textAlign: 'center',
                    fontFamily: 'suiteRegular'
                }}>
            {count}
            </Typography>

            <IconButton size="small" onClick={increase}
            sx={{
                border: '1px solid #343434',
                width: 32, height: 32,
                borderRadius: '50%',
            }}
            >
            <AddIcon fontSize="small" sx={{ color: '#343434' }} />
            </IconButton>
        </Box>
        </Box>
    );
}
