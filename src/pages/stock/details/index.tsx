import React from "react";
import { useRouter } from "next/router";

import View from "./view";

const StockDetails: React.FC = ({
}) => {
    const router = useRouter().query

    console.log(router)

    return (
        <View
            isEdit={!!router.isEdit}
            stock={{
                name: String(router.stockName) || null
            }}
        />
    )
}

export default StockDetails;