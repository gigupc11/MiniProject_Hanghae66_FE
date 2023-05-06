import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const HeartCheckbox = ({checked, setChecked, handleSubmitLikeButtonClick}) => {

  
    // const handleChange = (event) => {
    //   setChecked(event.target.checked);
    // };
  
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e)=>handleSubmitLikeButtonClick(e.target.checked)}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="heartCheckbox"
          />
        }
        // label="Heart Checkbox"
      />
    );
  };
  
  export default HeartCheckbox;
  