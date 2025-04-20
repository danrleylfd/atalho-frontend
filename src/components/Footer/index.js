import React from "react"
import LinkButton from "../LinkButton"

export default function Footer({ links }) {
  return (
    <div>
      {links.map((link, i) => (
        <LinkButton className="footerLink" key={i} href={link.href} placeholder={link.placeholder} />
      ))}
    </div>
  )
}
