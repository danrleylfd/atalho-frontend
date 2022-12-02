import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
//import Main from './styles';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services';

export default function SignUp({ title }) {
  document.title = title;
  const formRef = useRef();
  const [err, setErr] = useState("");
  const handleFormSubmit = async (data) => {
    if (data.name.length <= 0 || data.email.length <= 0 || data.password.length <= 0) return setErr("error");
    setErr("");
    try {
      const { data: auth } = await api.post('/auth/signup', data);
      sessionStorage.setItem('token', auth.token);
      Object.keys(auth.user).map(key => sessionStorage.setItem(key, auth.user[key]));
    } catch (_) {
      return setErr("error");
    }
    document.location.href = '/';
  }
  return (
    <>
      <main>
        <div className='content-box'>
          <Header secondaryText='Preencha-o para finalizar o cadastro.' />
          <Form ref={formRef} onSubmit={data => handleFormSubmit(data)}>
            <Input className={err} name='name' placeholder='Nome' type='name' />
            <Input className={err} name='email' placeholder='E-mail' type='email' />
            <p>^ Caso esqueça sua senha...</p>
            <Input className={err} name='password' placeholder='Senha' type='password' />
            <Button variant='primary' placeholder='Começar' type='submit' />
          </Form>
          <Footer links={[
            { href: 'https://denkitsu.blogspot.com/p/atalho-politica-de-privacidade.html', placeholder: 'Politica De Privacidade' },
            { href: '/signin', placeholder: 'Já Tem Conta?' }
          ]} />
        </div>
      </main>
    </>
  );
}
