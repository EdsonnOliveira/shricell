import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CustomersTypes } from "@redux/reducers/customers/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import { green, red, yellow } from "@atomic/constants/colors";
import { TR } from "@atomic/constants/table";

import sales from "@api/sales";
import { SaleProps } from "@api/sales/models";

import { IndexProps } from "./models";
import View from "./view";
import customer from "~/services/api/customer";
import { OptionsType } from "~/atomic/constants/select";
import Alert from "~/atomic/atoms/alert";
import { AlertType } from "~/atomic/constants/alert";

const statusItems: OptionsType[] = [
    {
        label: 'APPROVED',
        value: 'APPROVED'
    },
    {
        label: 'DENIED',
        value: 'DENID'
    }
]

const CustomersDetails: React.FC<IndexProps> = ({
    dataCustomer,
    setDataSale
}) => {
    const router = useRouter()

    const [dunsNumber, setDunsNumber] = useState<string>(dataCustomer.dunsNumber)
    const [federalTax, setFederalTax] = useState<string>(dataCustomer.federalTaxId)
    const [companyLegal, setCompanyLegal] = useState<string>(dataCustomer.companyName)
    const [phone, setPhone] = useState<string>(dataCustomer.phone)
    const [zipCode, setZipCode] = useState<string>(dataCustomer.zipCode)
    const [companyAddress, setCompanyAddress] = useState<string>(dataCustomer.companyAddress)
    const [state, setState] = useState<string>(dataCustomer.state)
    const [city, setCity] = useState<string>(dataCustomer.city)
    const [country, setCountry] = useState<string>(dataCustomer.country)
    const [stateCorporation, setStateCorporation] = useState<string>(dataCustomer.stateCorporation)
    const [typeIndustry, setTypeIndustry] = useState<string>(dataCustomer.typeIndustry)
    const [emailCorporation, setEmailCorporation] = useState<string>(dataCustomer.email)
    const [businessIdentity, setBusinessIdentity] = useState<string>(dataCustomer.businessIdentify)
    const [webSite, setWebSite] = useState<string>(dataCustomer.website)
    const [status, setStatus] = useState<string>(dataCustomer.status)

    const [billedAmount, setBilledAmount] = useState<string>('0,00')
    const [latestSales, setLatestSales] = useState<TR[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        sales.customerMonthly({ customerId: dataCustomer.customerId })
        // @ts-ignore
        .then((data: SaleProps) => setBilledAmount(data))

        sales.listAllCustomer({ customerId: dataCustomer.customerId })
        // @ts-ignore
        .then((data: SaleProps[]) => {
            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: `#${item.saleId}`,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.dateTimeInsert,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.status,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontGray',
                                    bgColor: 'transparent',
                                    borderColor: item.status === 'APPROVED'
                                            ? green
                                            : item.status === 'PENDING'
                                            ? yellow
                                            : red,
                                }
                            },
                            {
                                description: `$ ${item.saleValue}`,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontWhite',
                                    bgColor: green
                                }
                            },
                    ],
                    onClick: () => {
                        // @ts-ignore
                        setDataSale(data[index])
                        router.push('/admin/sales/details')
                    }
                }
            ))
            // @ts-ignore
            setLatestSales(array)
        })
    }

    const [modalDetails, setModalDetails] = useState<boolean>(false)

    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [alertType, setAlertType] = useState<AlertType>('error')
    const [alertText, setAlertText] = useState<string>('')

    const approve = () => {
        customer.verify({ customerId: dataCustomer.customerId, status: 'APPROVED' })
        .then(() => router.push('/admin/customers'))
    }

    const deny = () => {
        customer.verify({ customerId: dataCustomer.customerId, status: 'DENIED' })
        .then(() => router.push('/admin/customers'))
    }

    const update = () => {
        customer.update({
            customerId: dataCustomer.customerId,
            phone,
            email: emailCorporation,
            website: webSite,
            address: companyAddress,
            city,
            state,
            zipCode,
            status
        }).then(() => {
            setModalDetails(false)
            setAlertType('success')
            setAlertText('Customer updated successfully!')
            setAlertVisible(true)
            setTimeout(() => {
                router.push('/admin/customers')
            }, 1500);
        })
    }

    return (
        <>
            <View
                isEdit={!!router.query.isEdit}
                dataCustomer={dataCustomer}
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
                statusItems={statusItems}
                status={status}
                setStatus={setStatus}
                latestSales={latestSales}
                modalDetails={modalDetails}
                setModalDetails={setModalDetails}
                billedAmount={billedAmount}
                approve={approve}
                deny={deny}
                update={update}
            />
            <Alert
                type={alertType}
                text={alertText}
                visible={alertVisible}
                setVisible={setAlertVisible}
            />
        </>
    )
}

const mapStateToProps = ({
    customersReducer
}: {
    customersReducer: CustomersTypes
}) => ({
    dataCustomer: customersReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataSale: (data: SalesTypes['data']) => dispatch({ type: 'SET_SALE_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomersDetails);