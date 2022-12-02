import React from 'react';

import HeaderStylized from './styles';

export default function Header({ primaryText='Atalho', secondaryText }) {
  return (
    <HeaderStylized>
      <div/>
      <h1>{primaryText}</h1>
      <p>{secondaryText}</p>
    </HeaderStylized>
  )
}
