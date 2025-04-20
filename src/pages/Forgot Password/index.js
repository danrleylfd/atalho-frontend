import React, { useRef, useState } from "react"

import { Form } from "@unform/web"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import Button from "../../components/Button"

import api from "../../services"

export default function ForgotPassword({ title }) {
  document.title = title
  const formRef = useRef()
  const [err, setErr] = useState("")
  const handleFormSubmit = async (data) => {
    if (data.email.length <= 0) return setErr("error")
    setErr("")
    try {
      await api.post("/auth/forgot_password", data)
    } catch (_) {
      return setErr("error")
    }
    document.location.href = "/reset-password"
  }
  return (
    <main>
      <div className="content-box">
        <Header secondaryText={"Preencha-o para acessar sua conta."} />
        <Form ref={formRef} onSubmit={(data) => handleFormSubmit(data)}>
          <Input className={err} name="email" placeholder="E-Mail" type="email" />
          <Button variant="warning" placeholder="Recuperar" type="submit" />
        </Form>
        <Footer
          links={[
            { href: "/signin", placeholder: "Lembrou A Senha?" },
            { href: "/signup", placeholder: "Não Tem Conta?" }
          ]}
        />
      </div>
    </main>
  )
}
