import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CustomersTypes } from "@redux/reducers/customers/models";

import { TR } from "@atomic/constants/table";
import { green, red, yellow } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import customer from "@api/customer";
import { CustomerProps } from "@api/customer/models";

import View from "./view";
import { IndexProps } from "./models";

const Customers: React.FC<IndexProps> = ({
    setDataCustomer
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [data, setData] = useState<TR[]>([])

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

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        customer.listAll()
        // @ts-ignore
        .then((data: CustomerProps[]) => {
            setItemsPreview([
                {
                    icon: 'person',
                    title: 'Customers',
                    value: String(data.length)
                },
            ])

            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: item.companyName,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.email,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.phone,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.companyAddress,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.phone,
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
                    ],
                    onClick: () => {
                        // @ts-ignore
                        setDataCustomer(data[index])
                        router.push({
                            pathname: '/admin/customers/details',
                            query: {
                                isEdit: true,
                            }}
                        )
                    }
                }
            ))
            // @ts-ignore
            setData(array)
        })
    }

    const [modalAdd, setModalAdd] = useState<boolean>(false)

    const saveCustomer = () => {
        customer.insert({
            duns: dunsNumber,
            taxID: federalTax,
            name: companyLegal,
            phone,
            zipCode,
            address: companyAddress,
            state,
            city,
            country,
            stateCorporation,
            typeIndustry,
            email: emailCorporation,
            businessID: businessIdentity,
            website: webSite,
        })
    }

    return (
        <View
            data={data}
            itemsPreview={itemsPreview}
            modalAdd={modalAdd}
            setModalAdd={setModalAdd}
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
            saveCustomer={saveCustomer}
        />
    )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataCustomer: (data: CustomersTypes['data']) => dispatch({ type: 'SET_CUSTOMER_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Customers);