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

const CustomersDetails: React.FC<IndexProps> = ({
    dataCustomer,
    setDataSale
}) => {
    const router = useRouter()

    const [billedAmount, setBilledAmount] = useState<string>('0,00')
    const [latestSales, setLatestSales] = useState<TR[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        sales.customerMonthly({ customerId: dataCustomer.customerId })
        .then((data: SaleProps) => setBilledAmount(data))

        sales.listAllCustomer({ customerId: dataCustomer.customerId })
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
                        setDataSale(data[index])
                        router.push('/admin/sales/details')
                    }
                }
            ))
            setLatestSales(array)
        })
    }

    const [modalDetails, setModalDetails] = useState<boolean>(false)

    return (
        <View
            isEdit={!!router.query.isEdit}
            dataCustomer={dataCustomer}
            latestSales={latestSales}
            modalDetails={modalDetails}
            setModalDetails={setModalDetails}
            billedAmount={billedAmount}
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataSale: (data: SalesTypes['data']) => dispatch({ type: 'SET_SALE_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomersDetails);