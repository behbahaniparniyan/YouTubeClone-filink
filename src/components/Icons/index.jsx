import ListItemIcon from "@mui/material/ListItemIcon";

import { NAMES } from "./constants";

function Icon({ name, className: classNameProp }) {
  if (!name) {
    return "null";
  }

  return (
    <ListItemIcon
      style={{
        color: "#6852bb",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {NAMES[name]}
    </ListItemIcon>
  );
}

export { NAMES };
export default Icon;
