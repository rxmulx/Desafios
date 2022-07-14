import React from 'react';
import { Header } from './components/Header';
import { Formlogin } from './components/Form';
import { Main } from './components/Main';
import { Aside } from './components/Aside';
import './styles/style.scss';

export function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Aside/>
    </>
  );
}

export default App;
