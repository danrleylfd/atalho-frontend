import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { Form } from "@unform/web"

import Header from "../../components/Header"
//import Main from './styles';
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import Button from "../../components/Button"

import api from "../../services"

export default function Edit({ title }) {
  document.title = title
  const { label } = useParams()
  const token = localStorage.getItem("token")
  const formRefEdit = useRef()
  const formRefDelete = useRef()
  const [errEdit, setErrEdit] = useState("")
  const [errDel, setErrDel] = useState("")
  const handleFormEditSubmit = async (data) => {
    const { oldLabel, ...body } = data
    if (oldLabel.length <= 0) return setErrEdit("error")
    if (body.newLabel.length <= 0 && body.newLink.length <= 0) return setErrEdit("error")
    setErrEdit("")
    try {
      await api.put(`/linkers/${oldLabel}`, body, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error === "Token invalid.") {
          try {
            const { data, error } = await refreshToken()
            if (!data && error) throw error
            localStorage.setItem("refreshToken", data.refreshToken)
            localStorage.setItem("token", data.token)
            await api.put(`/linkers/${oldLabel}`, body, { headers: { Authorization: `Bearer ${data.token}` } })
          } catch (e) {
            document.location.href = "/signout"
          }
        } else {
          return setErrEdit("error")
        }
      }
    }
    document.location.href = "/list"
  }
  const handleFormDeleteSubmit = async (data) => {
    const { label } = data
    if (label.length <= 0) return setErrDel("error")
    setErrDel("")
    try {
      await api.delete(`/linkers/${label}`, { headers: { Authorization: `Bearer ${token}` } })
      document.location.href = "/list"
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error === "Token invalid.") {
          try {
            const { data, error } = await refreshToken()
            if (!data && error) throw error
            localStorage.setItem("refreshToken", data.refreshToken)
            localStorage.setItem("token", data.token)
            await api.delete(`/linkers/${label}`, { headers: { Authorization: `Bearer ${data.token}` } })
            document.location.href = "/list"
          } catch (e) {
            document.location.href = "/signout"
          }
        } else {
          return setErrEdit("error")
        }
      }
    }
  }
  return (
    <main>
      <div className="content-box">
        <Header secondaryText={token ? `Preencha-o para editar a label ${label}` : "Faça login para continuar."} />
        {!token ? (
          <></>
        ) : (
          <Form ref={formRefEdit} onSubmit={(data) => handleFormEditSubmit(data)}>
            <Input name="oldLabel" placeholder="Label" type="text" onChange={() => {}} value={label} hidden tabIndex={-1} />
            <Input className={errEdit} name="newLabel" placeholder="Nova Label ou atual" type="text" />
            <Input className={errEdit} name="newLink" placeholder="Novo Link ou atual" type="url" />
            <Button variant="success" placeholder="Renomear" type="submit" />
          </Form>
        )}
        {!token ? (
          <></>
        ) : (
          <Form ref={formRefDelete} onSubmit={(data) => handleFormDeleteSubmit(data)}>
            <Input className={errDel} name="label" placeholder="Label" type="text" onChange={() => {}} value={label} hidden tabIndex={-2} />
            <Button variant="danger" placeholder="Excluir" type="submit" />
          </Form>
        )}
        {token ? (
          <Footer
            links={[
              { href: "/account", placeholder: "Perfil" },
              { href: "/", placeholder: "Criar Atalho" },
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
