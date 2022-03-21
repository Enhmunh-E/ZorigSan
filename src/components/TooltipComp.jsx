import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export function TooltipComp({
  placement, maxwidth, content, children,
}) {
  const TooltipInner = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#4FADE0',
      color: 'white',
      maxWidth: maxwidth === undefined ? '170px' : maxwidth,
      fontSize: '18px',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: '#4FADE0',
      fontSize: '20px',
      '&:before': {
        borderRadius: '3px 0px 0px 0px',
      },
    },
  }));
  return (
    <TooltipInner title={content} arrow placement={placement}>
      {children}
    </TooltipInner>
  );
}
export default TooltipComp;
