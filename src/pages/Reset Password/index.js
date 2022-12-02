import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
//import Main from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services';

export default function ResetPassword({ title }) {
  document.title = title;
  const formRef = useRef();
  const [err, setErr] = useState("");
  const handleFormSubmit = async (data) => {
    if (data.token.length <= 0 || data.email.length <= 0 || data.passwordlength <= 0) return setErr("error");
    setErr("");
    try {
      await api.post('/auth/reset_password', data);
    } catch (_) {
      return setErr("error");
    }
    document.location.href = '/';
  }
  return (
    <main>
      <div className='content-box'>
        <Header secondaryText={'Preencha-o para acessar sua conta.'} />
        <Form ref={formRef} onSubmit={data => handleFormSubmit(data)}>
          {/* <Input name="token" placeholder="Token" type="text" maxLength={20} /> */}
          <Input className={err} name="token" placeholder="Code" type="text" maxLength={6} />
          <p>O token foi enviado para seu e-mail.</p>
          <Input className={err} name="email" placeholder="E-Mail" type="email" />
          <Input className={err} name="password" placeholder="Nova Senha" type="password" />
          <Button variant='warning' placeholder="Redefinir" type='submit' />
        </Form>
        <Footer links={[
          { href: '/signin', placeholder: 'Lembrou A Senha?' },
          { href: '/signup', placeholder: 'Não Tem Conta?' }
        ]} />
      </div>
    </main>
  )
}
