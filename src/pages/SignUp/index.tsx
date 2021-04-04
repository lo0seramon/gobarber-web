import React from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input icon={FiUser} name="nome" placeholder="Nome" />

        <Input icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="create">
        <FiArrowLeft />
        Voltar para o login
      </a>
    </Content>
  </Container>
);

export default SignUp;
