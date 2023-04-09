import React, { useState } from "react";

import { TR } from "@atomic/constants/table";
import { green, primary, red } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import View from "./view";
import { useRouter } from "next/router";

const itemsPreview: HeaderItemsPreview[] = [
    {
        icon: '',
        title: 'Total',
        value: '74'
    },
]

const Customers: React.FC = ({
}) => {
    const router = useRouter();

    const data: TR[] = [
        {
            td: [
                    {
                        description: 'iTech',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'email@email.com',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '+55 (00) 00000-000',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Brazil, DF, Brasília',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Approved',
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
                    pathname: '/customers/details',
                    query: {
                        isEdit: true,
                        idCustomer: 1
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: 'iTech',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'email@email.com',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '+55 (00) 00000-000',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Brazil, DF, Brasília',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Rejected',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: red
                        }
                    },
            ],
            onClick: () => {
                router.push({
                    pathname: '/customers/details',
                    query: {
                        isEdit: true,
                        idCustomer: 1
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: 'iTech',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'email@email.com',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '+55 (00) 00000-000',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Brazil, DF, Brasília',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Approved',
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
                    pathname: '/customers/details',
                    query: {
                        isEdit: true,
                        idCustomer: 1
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: 'iTech',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'email@email.com',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '+55 (00) 00000-000',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Brazil, DF, Brasília',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Approved',
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
                    pathname: '/customers/details',
                    query: {
                        isEdit: true,
                        idCustomer: 1
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: 'iTech',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'email@email.com',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '+55 (00) 00000-000',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Brazil, DF, Brasília',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Approved',
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
                    pathname: '/customers/details',
                    query: {
                        isEdit: true,
                        idCustomer: 1
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: 'iTech',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: 'email@email.com',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '+55 (00) 00000-000',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Brazil, DF, Brasília',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Pending',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: primary
                        }
                    },
            ],
            onClick: () => {
                router.push({
                    pathname: '/customers/details',
                    query: {
                        isEdit: true,
                        idCustomer: 1
                    }}
                )
            }
        },
    ]

    const [modalAdd, setModalAdd] = useState<boolean>(false)

    return (
        <View
            router={router}
            data={data}
            itemsPreview={itemsPreview}
            modalAdd={modalAdd}
            setModalAdd={setModalAdd}
        />
    )
}

export default Customers;