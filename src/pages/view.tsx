import React from "react";

import MainLogin from "@atomic/organisms/mainLogin";
import Input from "~/atomic/atoms/input";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";

import { ViewProps, RegisterProps, AttachmentProps } from "./models";

const View: React.FC<ViewProps> = ({
    steps,
    email,
    setEmail,
    password,
    setPassword,
    clickRegister,
    haveAccount,
    clickAttachment,
    clickFinalize
}) => {
    switch (steps) {
        case 'login':
            return (
                <MainLogin
                    title='Customer'
                    type='customer'
                    email={email}
                    onChangeEmail={setEmail}
                    password={password}
                    onChangePassword={setPassword}
                    clickRegister={clickRegister}
                />
            )
        case 'register':
            return (
                <StepRegister
                    haveAccount={haveAccount}
                    clickAttachment={clickAttachment}
                />
            )
        case 'attachment':
            return (
                <StepAttachment
                    haveAccount={haveAccount}
                    clickFinalize={clickFinalize}
                />
            )
    }
}

const StepRegister: React.FC<RegisterProps> = ({
    dunsNumber,
    setDunsNumber,
    haveAccount,
    clickAttachment
}) => (
    <MainLogin
        title='Register'
        type='customer'
    >
        <BoxCommon width='100%' height='450px' gap='10px' mt='20px' alignItems='center' style={{ overflow: 'auto' }}>
            <BoxCommon width='100%' flexDirection='row' flexDirection800='column' gap='10px'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='DUNS Number' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Federal Tax ID' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Company Legal Name' />
                </BoxCommon>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Phone' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='ZIP Code' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Company Address' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='State' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='City' />
                </BoxCommon>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Country' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='State of corporation' />
                </BoxCommon>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Type of industry' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px' flexDirection800='column'>
                <BoxCommon flex='1' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='E-mail' />
                </BoxCommon>
                <BoxCommon flex='.5' width='100%'>
                    <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Business identity' />
                </BoxCommon>
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px'>
                <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='Web site' />
            </BoxCommon>
            <BoxCommon width='100%' flexDirection='row' gap='10px'>
                <Input width='100%' value={dunsNumber} onChangeText={setDunsNumber} placeholder='How did you hear about us' />
            </BoxCommon>
        </BoxCommon>
        <BoxCommon width='50%' alignItems='center'>
            <Button text='I have a account' type='ghost' textColor='fontPrimary' onClick={haveAccount} />
            <Button text='Next step' type='secundaryLarge' onClick={clickAttachment} />
        </BoxCommon>
    </MainLogin>
)

const StepAttachment: React.FC<AttachmentProps> = ({
    haveAccount,
    clickFinalize,
}) => (
    <MainLogin
        title='Attachment'
        type='customer'
    >
        <BoxCommon width='100%' height='450px' gap='10px' mt='20px' alignItems='center' style={{ overflow: 'auto' }}>
            
        </BoxCommon>
        <BoxCommon width='50%' alignItems='center'>
            <Button text='I have a account' type='ghost' textColor='fontPrimary' onClick={haveAccount} />
            <Button text='Register' type='secundaryLarge' onClick={clickFinalize} />
        </BoxCommon>
    </MainLogin>
)

export default View;