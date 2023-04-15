import React from "react";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { LoginTypes } from "@redux/reducers/login/models";

import View from "./view";
import { IndexProps } from "./models";

const latestSales: TR[] = [
    {
        td: [
            {
                description: 'Ramon Raniere',
                textAlign: 'left',
                textWeight: '500',
                type: 'text'
            },
            {
                description: '4 cellphones',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: 'Today, 13:02',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: '$ 1350',
                textAlign: 'center',
                textWeight: '500',
                type: {
                    color: 'fontWhite',
                    bgColor: green
                }
            },
        ]
    },
    {
        td: [
            {
                description: 'Edson Pinheiro',
                textAlign: 'left',
                textWeight: '500',
                type: 'text'
            },
            {
                description: '1 cellphone',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: 'Today, 15:06',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: '$ 1000',
                textAlign: 'center',
                textWeight: '500',
                type: {
                    color: 'fontWhite',
                    bgColor: green
                }
            },
        ]
    },
]

const itemsPreview: HeaderItemsPreview[] = [
    {
        icon: '',
        title: 'Sales',
        value: '34'
    },
    {
        icon: '',
        title: 'Unfinished',
        value: '5'
    },
    {
        icon: '',
        title: 'Addition',
        value: '7.3%'
    },
    {
        icon: '',
        title: 'Visits',
        value: '61'
    },
]

const Dashboard: React.FC<IndexProps> = ({
    dataUser,
}) => {
    console.error(dataUser)
    return (
        <View
            nameUser={dataUser.name || 'Shri'}
            latestSales={latestSales}
            itemsPreview={itemsPreview}
        />
    )
}

const mapStateToProps = ({
    loginReducer
}: {
    loginReducer: LoginTypes
}) => ({
    token: loginReducer.token,
    dataUser: loginReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);