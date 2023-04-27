import React, { useState } from "react";
import { useRouter } from "next/router";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CustomersTypes } from "@redux/reducers/customers/models";

import { green } from "@atomic/constants/colors";
import { TR } from "@atomic/constants/table";

import { IndexProps } from "./models";
import View from "./view";

const CustomersDetails: React.FC<IndexProps> = ({
    dataCustomer
}) => {
    const router = useRouter()

    const latestSales: TR[] = [
        {
            td: [
                    {
                        description: '#134',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'iTech',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '28/03/2023',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '10:43',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ],
            onClick: () => {
                router.push({
                    pathname: '/sales/details',
                    query: {
                        idSale: 134
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: '#134',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'iTech',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '28/03/2023',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '10:43',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ],
        },
    ]

    const [modalDetails, setModalDetails] = useState<boolean>(false)

    return (
        <View
            isEdit={!!router.query.isEdit}
            dataCustomer={dataCustomer}
            latestSales={latestSales}
            modalDetails={modalDetails}
            setModalDetails={setModalDetails}
        />
    )
}

const mapStateToProps = ({
    customersReducer
}: {
    customersReducer: CustomersTypes
}) => ({
    dataCustomer: customersReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CustomersDetails);