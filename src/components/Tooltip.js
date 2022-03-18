import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function TooltipComp({
  placement, maxwidth, content, arrowsize, children,
}) {
  const Tooltip_inner = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#4FADE0',
      color: 'white',
      maxWidth: maxwidth === undefined ? '170px' : maxwidth,
      fontSize: '18px',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: '#4FADE0',
      fontSize: arrowsize === undefined ? '20px' : arrowsize,
      '&:before': {
        borderRadius: '3px 0px 0px 0px',
      },
    },
  }));
  return (
    <Tooltip_inner
      title={content}
      arrow
      placement={placement}
    >
      {children}
    </Tooltip_inner>
  );
}
export { TooltipComp };
