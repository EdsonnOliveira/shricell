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

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        customer.listAll()
        // @ts-ignore
        .then((data: CustomerProps[]) => {
            setItemsPreview([
                {
                    icon: '',
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

    return (
        <View
            data={data}
            itemsPreview={itemsPreview}
            modalAdd={modalAdd}
            setModalAdd={setModalAdd}
        />
    )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataCustomer: (data: CustomersTypes['data']) => dispatch({ type: 'SET_CUSTOMER_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Customers);