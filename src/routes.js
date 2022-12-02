import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import List from './pages/List';
import Redirect from './pages/Redirect';
import ForgotPassword from './pages/Forgot Password';
import ResetPassword from './pages/Reset Password';
import Account from './pages/Account';
import Edit from './pages/Edit Linker';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"                element={<Home           title="Atalho | Home"/>} forceRefresh={true} />
        <Route exact path="/home"            element={<Home           title="Atalho | Home"/>} />
        <Route exact path="/list"            element={<List           title="Atalho | Lista De Links"/>} />
        <Route exact path="/edit/:label"     element={<Edit           title="Atalho | Editar Label" />} />
        <Route exact path="/:label"          element={<Redirect       title="Atalho | Redirecionando..."/>} />
        <Route exact path="/signup"          element={<SignUp         title="Atalho | Sign Up"/>} />
        <Route exact path="/signin"          element={<SignIn         title="Atalho | Sign In"/>} />
        <Route exact path="/forgot-password" element={<ForgotPassword title="Atalho | Esqueceu A Senha?"/>} />
        <Route exact path="/reset-password"  element={<ResetPassword  title="Atalho | Redefinir Senha"/>} />
        <Route exact path="/signout"         element={<SignOut        title="Atalho | Sign Out"/>} />
        <Route exact path="/account"         element={<Account        title="Atalho | Conta"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
