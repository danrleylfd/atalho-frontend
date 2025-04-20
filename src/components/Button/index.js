import React from "react"

import ButtonContainerStyled from "./styles"

export default function Button({ type, variant, size = "sm", placeholder, ...rest }) {
  return (
    <ButtonContainerStyled>
      <button type={type} className={[variant, size].join(" ")} {...rest}>
        <span>{placeholder}</span>
      </button>
    </ButtonContainerStyled>
  )
}
