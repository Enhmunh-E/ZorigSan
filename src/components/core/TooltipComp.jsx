import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const TooltipComp = ({ placement, maxwidth, content, children }) => {
  const TooltipInner = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#4FADE0",
      color: "white",
      fontSize: "18px",
      maxWidth: maxwidth === undefined ? "170px" : maxwidth,
      padding: "10px",
    },
    [`& .${tooltipClasses.arrow}`]: {
      "&:before": {
        borderRadius: "3px 0px 0px 0px",
      },
      color: "#4FADE0",
      fontSize: "20px",
    },
  }));
  return (
    <TooltipInner title={content} arrow placement={placement}>
      {children}
    </TooltipInner>
  );
};
export default TooltipComp;
