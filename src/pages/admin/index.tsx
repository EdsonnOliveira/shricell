import React, { useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";

import user from '@api/user';
import { LoginProps } from "@api/user/models";

import { IndexProps } from "./models";
import View from "./view";

const Home: React.FC<IndexProps> = ({
  setToken,
  setData
}) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [modalError, setModalError] = useState<boolean>(false)

  const clickLogin = () => {
    user.loginAdmin({ email, password })
    .then((data: LoginProps) => {
      setToken(data.access_token)
      setData({
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        type: 'admin'
      })
      router.push('/admin/dashboard')
    })
    .catch(() => setModalError(true))
  }

  return (
    <View
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      clickLogin={clickLogin}
      modalError={modalError}
      setModalError={setModalError}
    />
  )
}

const mapStateToProps = ({}) => {}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setToken: (token: string) => dispatch({ type: 'SET_LOGIN_TOKEN', payload: { token } }),
  setData: (data: LoginTypes['data']) => dispatch({ type: 'SET_LOGIN_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);