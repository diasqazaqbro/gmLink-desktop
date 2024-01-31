import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import { FC, ChangeEvent } from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#5571FF',
  '&:hover': {
    backgroundColor: '#5571FF',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { 
  },
  zIndex: '1000'
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  color: 'white',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    fontSize: '20px',
    padding: '5px 10px 6px 0',
    fontFamily: 'Asap',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

interface SearchBarProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = (props) => {
  const { onChange } = props

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
      />
    </Search>    
  )
}