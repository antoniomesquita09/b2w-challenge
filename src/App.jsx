import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from 'states/store'

import Routes from './App.routes'
import 'styles/global.scss'

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position='top-left' />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}

export default App
