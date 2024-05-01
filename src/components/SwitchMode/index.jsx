import * as React from "react";

import Switch from "@mui/material/Switch";

import {
  useLightModeSetState,
  useLightModeState,
} from "../../context/themeMode";

const SwitchMode = () => {
  const setLightMode = useLightModeSetState();
  const lightMode = useLightModeState();
  const handleChange = (event) => {
    setLightMode(event.target.checked);
  };

  return (
    <Switch
      checked={lightMode}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      color="default"
    />
  );
};

export default SwitchMode;
