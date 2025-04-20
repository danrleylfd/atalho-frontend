import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
//import Main from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services';

export default function SignIn({ title }) {
  document.title = title;
  const formRef = useRef();
  const [err, setErr] = useState("");
  const handleFormSubmit = async (data) => {
    if (data.email.length <= 0 || data.password.length <= 0) return setErr("error");
    setErr("");
    try {
      const { data: auth } = await api.post('/auth/signin', data);
      sessionStorage.setItem('token', auth.token);
      Object.keys(auth.user).map(key => sessionStorage.setItem(key, auth.user[key]));
      document.location.href = '/';
    } catch (_) {
      return setErr("error");
    }
  }
  return (
    <>
      <main>
        <div className='content-box'>
          <Header secondaryText='Preencha-o para entrar.' />
          <Form ref={formRef} onSubmit={data => handleFormSubmit(data)}>
            <Input className={err} name='email' placeholder='E-mail' type='email' />
            <Input className={err} name='password' placeholder='Senha' type='password' />
            <Button variant='primary' placeholder='Entrar' type='submit' />
          </Form>
          <Footer links={[
            { href: '/forgot-password', placeholder: 'Esqueceu A Senha?' },
            { href: '/signup', placeholder: 'Não Tem Conta?' }
          ]} />
        </div>
      </main>
    </>
  );
}
