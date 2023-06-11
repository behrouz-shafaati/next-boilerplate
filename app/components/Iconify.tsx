import PropTypes from "prop-types";
// icons
import { Icon } from "@iconify/react";
// @mui
// import { Box } from '@mui/material';

// ----------------------------------------------------------------------

type IconifyType = {
  icon: string;
  width?: number;
  height?: number;
};

export default function Iconify({ icon, width, height }: IconifyType) {
  return <Icon icon={icon} width={width} height={height} />;
}
