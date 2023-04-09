import React from "react";
import Head from "next/head";

import MainLogin from "@atomic/organisms/mainLogin";
import Input from "@atomic/atoms/input";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";
import FileDnD from "@atomic/mocelules/fileDnD";
import Modal from "@atomic/mocelules/modal";

import { ViewProps, RegisterProps, AttachmentProps } from "./models";

const View: React.FC<ViewProps> = ({
    steps,
    email,
    setEmail,
    password,
    setPassword,
    clickLogin,
    clickRegister,
    modalError,
    setModalError,
    dunsNumber,
    setDunsNumber,
    federalTax,
    setFederalTax,
    companyLegal,
    setCompanyLegal,
    phone,
    setPhone,
    zipCode,
    setZipCode,
    companyAddress,
    setCompanyAddress,
    state,
    setState,
    city,
    setCity,
    country,
    setCountry,
    stateCorporation,
    setStateCorporation,
    typeIndustry,
    setTypeIndustry,
    emailCorporation,
    setEmailCorporation,
    businessIdentity,
    setBusinessIdentity,
    webSite,
    setWebSite,
    aboutUs,
    setAboutUs,
    certificate,
    setCertificate,
    photoID,
    setPhotoID,
    resaleTax,
    setResaleTax,
    haveAccount,
    clickAttachment,
    clickFinalize
}) => {
    switch (steps) {
        case 'login':
            return (
                <>
                    <Head>
                        <title>ShriCell</title>
                    </Head>
                    <MainLogin
                        title='Customer'
                        type='customer'
                        email={email}
                        onChangeEmail={setEmail}
                        password={password}
                        onChangePassword={setPassword}
                        clickLogin={clickLogin}
                        clickRegister={clickRegister}
                    />
                    <Modal
                        title="Incorrect credentials"
                        visible={modalError}
                        onClose={() => setModalError(false)}
                        type='error'
                        firstButton={
                            {
                                text: 'Ok',
                                type: 'redLightLarge',
                                onClick: () => setModalError(false)
                            }
                        }
                    >
                        <h4 className="fontCenter">Incorrect <b>username</b> or <b>password</b>. <br />Please try again.</h4>
                    </Modal>
                </>
            )
        case 'register':
            return (
                <StepRegister
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
                    haveAccount={haveAccount}
                    clickAttachment={clickAttachment}
                />
            )
        case 'attachment':
            return (
                <StepAttachment
                    certificate={certificate}
                    setCertificate={setCertificate}
                    photoID={photoID}
                    setPhotoID={setPhotoID}
                    resaleTax={resaleTax}
                    setResaleTax={setResaleTax}
                    haveAccount={haveAccount}
                    clickFinalize={clickFinalize}
                />
            )
    }
}

const StepRegister: React.FC<RegisterProps> = ({
    dunsNumber,
    setDunsNumber,
    federalTax,
    setFederalTax,
    companyLegal,
    setCompanyLegal,
    phone,
    setPhone,
    zipCode,
    setZipCode,
    companyAddress,
    setCompanyAddress,
    state,
    setState,
    city,
    setCity,
    country,
    setCountry,
    stateCorporation,
    setStateCorporation,
    typeIndustry,
    setTypeIndustry,
    emailCorporation,
    setEmailCorporation,
    businessIdentity,
    setBusinessIdentity,
    webSite,
    setWebSite,
    aboutUs,
    setAboutUs,
    haveAccount,
    clickAttachment
}) => (
    <MainLogin
        title='Register'
        type='customer'
    >
        <Head>
            <title>Register - ShriCell</title>
        </Head>
        <BoxCommon width='100%' height='450px' gap='10px' mt='20px' alignItems='center' style={{ overflow: 'auto' }}>
            <BoxCommon width='100%' flexDirection='row' flexDirection800='column' gap='10px'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='DUNS Number' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={federalTax} onChangeText={setFederalTax} placeholder='Federal Tax ID' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={companyLegal} onChangeText={setCompanyLegal} placeholder='Company Legal Name' />
                </BoxCommon>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={phone} onChangeText={setPhone} placeholder='Phone' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={zipCode} onChangeText={setZipCode} placeholder='ZIP Code' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={companyAddress} onChangeText={setCompanyAddress} placeholder='Company Address' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={state} onChangeText={setState} placeholder='State' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={city} onChangeText={setCity} placeholder='City' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={country} onChangeText={setCountry} placeholder='Country' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={stateCorporation} onChangeText={setStateCorporation} placeholder='State of corporation' />
                </BoxCommon>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={typeIndustry} onChangeText={setTypeIndustry} placeholder='Type of industry' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={emailCorporation} onChangeText={setEmailCorporation} placeholder='E-mail' />
                </BoxCommon>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={businessIdentity} onChangeText={setBusinessIdentity} placeholder='Business identity' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px'>
                <Input width='100%' value={webSite} onChangeText={setWebSite} placeholder='Web site' />
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px'>
                <Input width='100%' value={aboutUs} onChangeText={setAboutUs} placeholder='How did you hear about us' />
            </BoxCommon>
        </BoxCommon>
        <BoxCommon width='50%' alignItems='center'>
            <Button text='I have a account' type='ghost' textColor='fontPrimary' onClick={haveAccount} />
            <Button text='Next step' type='secundaryLarge' onClick={clickAttachment} />
        </BoxCommon>
    </MainLogin>
)

const StepAttachment: React.FC<AttachmentProps> = ({
    certificate,
    setCertificate,
    photoID,
    setPhotoID,
    resaleTax,
    setResaleTax,
    haveAccount,
    clickFinalize,
}) => (
    <MainLogin
        title='Attachment'
        type='customer'
    >
        <Head>
            <title>Attachment - ShriCell</title>
        </Head>
        <BoxCommon width='100%' height='450px' gap='10px' mt='20px' style={{ overflow: 'auto' }}>
            <h2>Certificate of incorporation</h2>
            <FileDnD file={certificate} setFile={setCertificate} mb='10px' />
            <h2>Photo ID</h2>
            <FileDnD file={photoID} setFile={setPhotoID} mb='10px' />
            <h2>Resale or tax exempt certificate</h2>
            <FileDnD file={resaleTax} setFile={setResaleTax} />
        </BoxCommon>
        <BoxCommon width='50%' alignItems='center'>
            <Button text='I have a account' type='ghost' textColor='fontPrimary' onClick={haveAccount} />
            <Button text='Register' type='secundaryLarge' onClick={clickFinalize} />
        </BoxCommon>
    </MainLogin>
)

export default View;