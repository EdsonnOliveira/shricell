import React, { useState } from "react";
import { useRouter } from "next/router";

import { green } from "@atomic/constants/colors";
import { TR } from "@atomic/constants/table";

import { DataType } from "./models";
import View from "./view";

const CustomersDetails: React.FC = ({
}) => {
    const router = useRouter()

    const data: DataType = {
        name: 'iTech',
        phone: '+55 (00) 00000-0000',
        email: 'email@email.com',
        status: {
            description: 'Approved',
            bgColor: green
        }
    }

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
            data={data}
            latestSales={latestSales}
            modalDetails={modalDetails}
            setModalDetails={setModalDetails}
        />
    )
}

export default CustomersDetails;