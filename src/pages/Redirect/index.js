import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Header from "../../components/Header"
//import Main from './styles';

import api from "../../services"

export default function Redirect({ title }) {
  document.title = title
  const { label } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    async function loadData(label) {
      const { data } = await api.get(`/access/${label}`)
      setData(data)
      document.location.href = data.link
    }
    loadData(label)
  }, [label])
  return (
    <main>
      <div className="content-box">
        <Header secondaryText={`Redirecionando para ${data ? data.link : "lugar nenhum. está label não foi registrada, ainda"}...`} />
      </div>
    </main>
  )
}
