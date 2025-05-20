import SearchIcon from "../icon/SearchIcon"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchInput({onChange}) {
    return (
        <div className="search_input_container">
            <SearchIcon className="search_icon" />
            <Box
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                        id="standard-size-normal"
                        placeholder="검색어를 입력해주세요."
                        variant="standard"
                        onChange={onChange}
                        InputProps={{
                            disableUnderline: false,
                            sx: {
                            color: "#7A7A7A",
                            fontSize: "14px",
                            fontFamily: "suiteRegular",
                            },
                        }}
                        sx={{
                            '& .MuiInput-underline:before': {
                            borderBottomColor: '#ccc',
                            },
                            '& .MuiInput-underline:hover:before': {
                            borderBottomColor: '#343434',
                            },
                            '& .MuiInput-underline:after': {
                            borderBottomColor: '#F5A2D8',
                            },
                        }}
                        />

                </div>
            </Box>
        </div>
    )
}

export default SearchInput                                          