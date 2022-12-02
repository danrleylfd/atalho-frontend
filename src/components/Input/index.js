import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import InputContainerStyled from './styles';
//import './index.css';

export default function Input({ name, className='', disabled=false, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.value,
      setValue: (ref, value) => ref.current.value = value,
      clearValue: ref => ref.current.value = ''
    });
  }, [fieldName, registerField]);
  return (
    <InputContainerStyled>
      <div disabled={disabled}>
        <input className={className} ref={inputRef} disabled={disabled} {...rest} />
      </div>
    </InputContainerStyled>
  )
}
