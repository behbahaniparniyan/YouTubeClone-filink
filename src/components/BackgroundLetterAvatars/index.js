import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name ? name.charAt(1) : null}`,
  };
}

export default function BackgroundLetterAvatars(name) {
  const emailValue = useSelector(({ auth }) => auth.email);
  console.log(typeof emailValue);
  return (
    <Stack direction="row" spacing={2}>
      {<Avatar {...stringAvatar(emailValue)} />}
    </Stack>
  );
}
