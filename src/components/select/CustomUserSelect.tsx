import React from "react";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";

const CustomUserSelect = styled((props: any) =>
  <Select {...props} />
)(({ theme }) => ({
 
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: theme.palette.text.secondary,
    opacity: "1"
  },
   "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[200]
  }
 }));

export default CustomUserSelect;
