import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SmoothLink = ({
  to,
  children,
  offset = -80,
  duration = 600,
  spy = true,
  smooth = true,
  ...rest
}) => {
  return (
    <ScrollLink
      to={to}
      smooth={smooth}
      spy={spy}
      offset={offset}
      duration={duration}
      {...rest}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothLink;
