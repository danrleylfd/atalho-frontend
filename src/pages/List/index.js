import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
//import Main from './styles';
import Footer from '../../components/Footer';
import LinkButton from '../../components/LinkButton';

import api from '../../services';

export default function List({ title }) {
  document.title = title;
  const token = sessionStorage.getItem('token');
  const user = sessionStorage.getItem('_id');
  const name = sessionStorage.getItem('name');
  const [linkers, setLinkers] = useState([]);
  useEffect(() => {
    async function loadLinkers(token, user) {
      const { data } = await api.get('/linkers/by-user', { headers: { Authorization: `Bearer ${token}` } });
      setLinkers(data);
    }
    loadLinkers(token, user);
  }, [token, user]);
  return (
    <main>
      <div className='content-box'>
        <Header secondaryText={token ? `Lista de Links de ${name}` : 'Faça login para continuar.'} />
        {token ? (
          <>
            <section>
              {linkers.map(({ label, link }) => (
                <article key={`${label}${link}`}>
                  <span>Acessar <LinkButton target='_blank' placeholder={`/${label}`} href={`/${label}`} /></span>
                  <span><LinkButton placeholder='Editar' href={`/edit/${label}`} /></span>
                </article>
              ))}
            </section>
            <Footer links={[
              { href: '/account', placeholder: 'Perfil' },
              { href: '/', placeholder: 'Criar Atalho' },
              { href: '/signout', placeholder: 'Deseja Sair?' }
            ]} />
          </>
        ) : (
          <Footer links={[
            { href: '/signin', placeholder: 'Já Tem Conta?' },
            { href: '/signup', placeholder: 'Não Tem Conta?' }
          ]} />
        )}
      </div>
    </main>
  )
}
