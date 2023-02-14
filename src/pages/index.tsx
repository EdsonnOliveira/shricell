import React, { useState } from "react";
import { Steps } from "./models";

import View from "./view";

const Home: React.FC = ({
}) => {
  const [title, setTitle] = useState<string>('Register')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [steps, setSteps] = useState<Steps>('login')

  const [dunsNumber, setDunsNumber] = useState<string>('')

  const clickRegister = () => {
    setSteps('register')
  }

  const haveAccount = () => {
    setSteps('login')
  }

  return (
    <View
      steps={steps}
      title={title}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      clickRegister={clickRegister}
      dunsNumber={dunsNumber}
      setDunsNumber={setDunsNumber}
      haveAccount={haveAccount}
    />
  )
}

export default Home;