import SearchDropDown from './SearchDropDown'
import {Box} from '@mui/material'
import dummyData from '../../data/dummyData'
import SearchButton from '../common/SearchButton';


export default function  AllDropDowns (){
  const {label, options} = dummyData;

  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        // on mobile devices the flex direction is column so add breakpoint
        '@media (max-width: 750px)': {
          flexDirection: 'column'
        }

      }}>
      {
        label.map((item, index) => {
          return (
            <SearchDropDown key={index} label={item} options={options[index]} />
          )
        }
        )
      }
      <SearchButton/>
      </Box>
      
    </div>
  )
}

