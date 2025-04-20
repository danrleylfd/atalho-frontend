import React from "react"

import Header from "../../components/Header"
//import Main from './styles';
import Footer from "../../components/Footer"

export default function SignOut({ title }) {
  document.title = title
  localStorage.clear()
  return (
    <main>
      <div className="content-box">
        <Header secondaryText={"Você saiu."} />
        <Footer links={[{ href: "/signin", placeholder: "Se Arrependeu?" }]} />
      </div>
    </main>
  )
}
