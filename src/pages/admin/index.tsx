import React, { useState } from "react";
import { useRouter } from "next/router";

import user from '@api/user';

import { Steps } from "../admin/models";
import View from "../admin/view";

const Home: React.FC = ({
}) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [modalError, setModalError] = useState<boolean>(false)

  const clickLogin = () => {
    user.login({ email, password })
    .then(() => router.push('/admin/dashboard'))
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

export default Home;