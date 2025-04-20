import React from 'react';
import AStyled from './styles';

export default function LinkButton({ className, placeholder, ...rest }) {
  return <AStyled className={className} {...rest}>{placeholder}</AStyled>;
}
