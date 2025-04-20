import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
//import { createBrowserHistory } from "history";
//import { useNavigate } from "react-router-dom";

import Header from '../../components/Header';
//import Main from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services';

export default function Home({ title }) {
  document.title = title;
  const formRef = useRef();
  const token = sessionStorage.getItem('token');
  const user = sessionStorage.getItem('_id');

  const [errLabel, setErrLabel] = useState("");
  const [msgLabel, setMsgLabel] = useState("Apelido");
  const [errLink, setErrLink] = useState("");
  const [msgLink, setMsgLink] = useState("Link");

  const handleFormSubmit = async (data) => {
    if (data.label.length <= 0) {
      formRef.current.clearField("label");
      setErrLabel("error");
      setMsgLabel("O apelido é inválido.");
      setTimeout(() => setMsgLabel("Apelido"), 3000);
      return;
    }
    setErrLabel("");
    if (data.link.length <= 0) {
      formRef.current.clearField("link");
      setErrLink("error");
      setMsgLink("O Link não pode ficar em branco.");
      setTimeout(() => setMsgLink("Link"), 3000);
      return;
    }
    const urlRegex = /^(https?:\/\/).+\..+/;
    if (urlRegex.test(data.link)) {
      formRef.current.clearField("link");
      setErrLink("error");
      setMsgLink("O Link é inválido.");
      setTimeout(() => setMsgLink("Link"), 3000);
      return;
    }
    setErrLink("");
    try {
      await api.post('/linkers', { user, ...data }, { headers: { Authorization: `Bearer ${token}` } });
    } catch (e) {
      formRef.current.clearField("label");
      setErrLabel("error");
      setMsgLabel("Label indisponível/em uso.");
      setTimeout(() => setMsgLabel("Apelido"), 3000);
      return;
    }
    //const withRefresh = createBrowserHistory({ forceRefresh: true });
    //const navigate = useNavigate();
    //withRefresh.push({ pathname: '/' });
    //navigate('/');
    document.location.href = '/list';
  }
  return (
    <main>
      <div className='content-box'>
        <Header secondaryText={token ? 'Preencha-o para criar um atalho.' : 'Faça login para continuar.'} />
        {!token ? (<></>) : (
          <Form className='' ref={formRef} onSubmit={data => handleFormSubmit(data)}>
            <Input className={errLabel} name='label' placeholder={msgLabel} type='text' />
            <Input className={errLink} name='link' placeholder={msgLink} type='url' />
            <Button variant='primary' placeholder='Criar Atalho' type='submit' />
          </Form>
        )}
        {token ? (
          <Footer links={[
            { href: '/account', placeholder: 'Perfil' },
            { href: '/list', placeholder: 'Lista de Links' },
            { href: '/signout', placeholder: 'Deseja Sair?' }
          ]} />
        ) : (
          <Footer links={[
            { href: '/signin', placeholder: 'Já Tem Conta?' },
            { href: '/signup', placeholder: 'Não Tem Conta?' }
          ]} />
        )}
      </div>
    </main>
  );
}
