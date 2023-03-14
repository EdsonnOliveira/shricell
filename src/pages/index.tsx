import React, { useState } from "react";
import { useRouter } from "next/router";

import user from '@api/user';
import { LoginProps as LoginType } from '@api/user/models'

import { Steps } from "./models";
import View from "./view";

const Home: React.FC = ({
}) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('shricell@gmail.com')
  const [password, setPassword] = useState<string>('12345678')
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

  const clickLogin = () => {
    // router.push('/dashboard')
    // return
    user.login({ email, password })
    .then((res) => {
      // alert(JSON.stringify(res))
      // if (!res.access_token) return
      // router.push('/dashboard')
    })
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

export default Home;