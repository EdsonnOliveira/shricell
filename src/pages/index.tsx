import React, { useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";

import user from '@api/user';
import { LoginProps } from "@api/user/models";

import { IndexProps, Steps } from "./models";
import View from "./view";

const Home: React.FC<IndexProps> = ({
  setToken,
  setData
}) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [steps, setSteps] = useState<Steps>('login')

  const [dunsNumber, setDunsNumber] = useState<string>('')
  const [federalTax, setFederalTax] = useState<string>('')
  const [companyLegal, setCompanyLegal] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [zipCode, setZipCode] = useState<string>('')
  const [companyAddress, setCompanyAddress] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [stateCorporation, setStateCorporation] = useState<string>('')
  const [typeIndustry, setTypeIndustry] = useState<string>('')
  const [emailCorporation, setEmailCorporation] = useState<string>('')
  const [businessIdentity, setBusinessIdentity] = useState<string>('')
  const [webSite, setWebSite] = useState<string>('')
  const [aboutUs, setAboutUs] = useState<string>('')

  const [certificate, setCertificate] = useState<FileList | null>(null)
  const [photoID, setPhotoID] = useState<FileList | null>(null)
  const [resaleTax, setResaleTax] = useState<FileList | null>(null)
  const [modalError, setModalError] = useState<boolean>(false)

  const clickLogin = () => {
    user.loginCustomer({ email, password })
    .then((data: LoginProps) => {
      setToken(data.access_token)
      setData({
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        type: 'customer'
      })
      router.push('/customer/dashboard')
    })
    .catch(() => setModalError(true))
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
      modalError={modalError}
      setModalError={setModalError}
      dunsNumber={dunsNumber}
      setDunsNumber={setDunsNumber}
      federalTax={federalTax}
      setFederalTax={setFederalTax}
      companyLegal={companyLegal}
      setCompanyLegal={setCompanyLegal}
      phone={phone}
      setPhone={setPhone}
      zipCode={zipCode}
      setZipCode={setZipCode}
      companyAddress={companyAddress}
      setCompanyAddress={setCompanyAddress}
      state={state}
      setState={setState}
      city={city}
      setCity={setCity}
      country={country}
      setCountry={setCountry}
      stateCorporation={stateCorporation}
      setStateCorporation={setStateCorporation}
      typeIndustry={typeIndustry}
      setTypeIndustry={setTypeIndustry}
      emailCorporation={emailCorporation}
      setEmailCorporation={setEmailCorporation}
      businessIdentity={businessIdentity}
      setBusinessIdentity={setBusinessIdentity}
      webSite={webSite}
      setWebSite={setWebSite}
      aboutUs={aboutUs}
      setAboutUs={setAboutUs}
      certificate={certificate}
      setCertificate={setCertificate}
      photoID={photoID}
      setPhotoID={setPhotoID}
      resaleTax={resaleTax}
      setResaleTax={setResaleTax}
      haveAccount={haveAccount}
      clickAttachment={clickAttachment}
      clickFinalize={clickFinalize}
    />
  )
}

const mapStateToProps = ({}) => {}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setToken: (token: string) => dispatch({ type: 'SET_CUSTOMER_TOKEN', payload: {token} }),
  setData: (data: LoginTypes['data']) => dispatch({ type: 'SET_CUSTOMER_DATA', payload: {data} }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);