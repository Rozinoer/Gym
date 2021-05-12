import React, {useState} from 'react';
import { ClientState } from './src/context/client/ClientState';
import { MainLayout } from './src/MainLayout'


export default function App() {

  return (
    <ClientState>
      <MainLayout />
    </ClientState>
  )
}
