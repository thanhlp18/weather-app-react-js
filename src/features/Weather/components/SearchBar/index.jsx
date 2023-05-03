import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions, handleCityApi } from 'api/cityApi';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(5),
        width: 'auto',
    },
    boxShadow: '0 0px 2px 1px hsl(200 50% 20% / 10%)',
    borderRadius: theme.spacing(1)

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(AsyncPaginate)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchBar({ onSearchChange }) {
    const [search, setSearch] = useState(null)



    const loadOptions = handleCityApi
    const handleOnChangeSearch = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <AppBar position="static"> */}
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        value={search}
                        debounceTimeout={600}
                        onChange={handleOnChangeSearch}
                        loadOptions={loadOptions}
                    />
                </Search>
            </Toolbar>
            {/* </AppBar> */}
        </Box>
    );
}