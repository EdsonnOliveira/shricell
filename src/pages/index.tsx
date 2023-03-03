import React, { useState } from "react";

import user from "../services/api/user";

import { Steps } from "./models";
import View from "./view";

const Home: React.FC = ({
}) => {
  const [email, setEmail] = useState<string>('shricell@gmail.com')
  const [password, setPassword] = useState<string>('12345678')
  const [steps, setSteps] = useState<Steps>('login')

  const [dunsNumber, setDunsNumber] = useState<string>('')

  const [certificate, setCertificate] = useState<FileList | null>(null)

  const clickLogin = () => {
    user.login({ email, password })
    .then((res) => console.warn(res))
    .catch((res) => console.log(res))
  }

  const clickRegister = () => {
    setSteps('register')
  }

  const haveAccount = () => {
    setSteps('login')
  }

  const clickAttachment = () => {
    setSteps('attachment')
  }

  const clickFinalize = () => {
    setSteps('success')
  }

  return (
    <View
      steps={steps}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      clickLogin={clickLogin}
      clickRegister={clickRegister}
      dunsNumber={dunsNumber}
      setDunsNumber={setDunsNumber}
      certificate={certificate}
      setCertificate={setCertificate}
      haveAccount={haveAccount}
      clickAttachment={clickAttachment}
      clickFinalize={clickFinalize}
    />
  )
}

export default Home;