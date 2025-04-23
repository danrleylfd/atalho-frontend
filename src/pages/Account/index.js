import React, { useRef, useState } from "react"
import { Form } from "@unform/web"

import Header from "../../components/Header"
//import Main from './styles';
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import Button from "../../components/Button"

import api from "../../services"

export default function Account({ title }) {
  document.title = title
  const formRefEdit = useRef()
  const formRefDelete = useRef()
  const token = localStorage.getItem("token")
  const [errEdit, setErrEdit] = useState("")
  const [errDel, setErrDel] = useState("")
  const handleFormSubmitEdit = async (data) => {
    if (data.email.length <= 0) return setErrEdit("error")
    if (data.name.length <= 0 || data.password.length <= 0) return setErrEdit("error")
    setErrEdit("")
    localStorage.clear()
    try {
      const { data: auth } = await api.put("/account", data, { headers: { Authorization: `Bearer ${token}` } })
      Object.keys(auth.user).map((key) => localStorage.setItem(key, auth.user[key]))
    } catch (_) {
      return setErrEdit("error")
    }
    document.location.href = "/"
  }
  const handleFormSubmitDelete = async (data) => {
    if (data.email.length <= 0 || data.password.length <= 0) return setErrDel("error")
    setErrDel("")
    try {
      await api.delete("/account", { data }, { headers: { Authorization: `Bearer ${token}` } })
    } catch (_) {
      return setErrDel("error")
    }
    document.location.href = "/signout"
  }
  return (
    <main>
      <div className="content-box">
        <Header secondaryText={token ? "Preencha-o para Editar/Deletar sua conta." : "Faça login para continuar."} />
        {!token ? (
          <></>
        ) : (
          <Form ref={formRefEdit} onSubmit={(data) => handleFormSubmitEdit(data)}>
            <Input className={errEdit} name="name" placeholder="Novo Nome" type="name" />
            <Input className="hidded" name="email" placeholder="E-mail" type="email" onChange={() => {}} value={localStorage.getItem("email")} tabIndex={-1} />
            <Input className={errEdit} name="password" placeholder="Senha" type="password" />
            <Button variant="warning" placeholder="Renomear" type="submit" />
          </Form>
        )}
        {!token ? (
          <></>
        ) : (
          <Form ref={formRefDelete} onSubmit={(data) => handleFormSubmitDelete(data)}>
            <Input name="email" placeholder="E-mail" type="email" onChange={() => {}} value={localStorage.getItem("email")} hidden tabIndex={-2} />
            <Input className={errDel} name="password" placeholder="Senha" type="password" />
            <Button variant="danger" placeholder="Deletar Conta" type="submit" />
          </Form>
        )}
        {token ? (
          <Footer
            links={[
              { href: "/", placeholder: "Criar Links" },
              { href: "/list", placeholder: "Lista de Links" },
              { href: "/signout", placeholder: "Deseja Sair?" }
            ]}
          />
        ) : (
          <Footer
            links={[
              { href: "/signin", placeholder: "Já Tem Conta?" },
              { href: "/signup", placeholder: "Não Tem Conta?" }
            ]}
          />
        )}
      </div>
    </main>
  )
}
