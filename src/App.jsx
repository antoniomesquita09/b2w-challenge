import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import store from 'states/store'

import Routes from './App.routes'
// import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ToastContainer autoClose={3000} position='top-left' />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}

export default App
