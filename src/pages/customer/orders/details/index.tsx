import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import { green } from "@atomic/constants/colors";
import { TR } from "@atomic/constants/table";

import items from "@api/sales/items";
import { ItemsProps } from "@api/sales/items/models";

import { IndexProps } from "./models";
import View from "./view";
import { ItemStep } from "~/atomic/constants/steps";

const Orders: React.FC<IndexProps> = ({
    dataUser,
    dataSale,
}) => {
    const [dataItems, setDataItems] = useState<TR[]>([])
    const [totalQuantity, setTotalQuantity] = useState<string>('0')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        items.listAll({
            customerId: dataUser.id,
            saleId: dataSale.saleId
        })
        .then((data: ItemsProps[]) => {
            let totalQuantity = String(data.reduce((accumulator, value) => Number(accumulator) + Number(value.quantity), 0))
            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: item.model,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.storage,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.color,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontGray',
                                    bgColor: 'transparent',
                                    borderColor: item.color
                                }
                            },
                            {
                                description: item.quantity,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `$ ${item.salePrice}`,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `$ ${item.saleTotal}`,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontWhite',
                                    bgColor: green
                                }
                            },
                    ],
                }
            ))

            setTotalQuantity(totalQuantity)
            setDataItems(array)
        })
    }

    const steps: ItemStep[] = [
        {
            index: 0,
            description: 'Order placed',
            label: String(dataSale.dateTimeInsert),
            icon: ''
        },
        {
            index: 1,
            description: 'Waiting confirmation',
            label: '',
            icon: ''
        },
        {
            index: 2,
            description: `Success`,
            label: '',
            icon: ''
        },
    ]

    return (
        <View
            steps={steps}
            dataSale={dataSale}
            dataItems={dataItems}
            totalQuantity={totalQuantity}
        />
    )
}

const mapStateToProps = ({
    loginReducer,
    salesReducer,
}: {
    loginReducer: LoginTypes
    salesReducer: SalesTypes
}) => ({
    dataUser: loginReducer.data,
    dataSale: salesReducer.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Orders);