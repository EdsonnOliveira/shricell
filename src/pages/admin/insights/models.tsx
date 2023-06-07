import { NextRouter } from "next/router";
import { TR } from "@atomic/constants/table";
import { SetIndex} from "@typing/set";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

export interface IndexProps {
    setDataSupplier: (data: SuppliersTypes['data']) => void
}

export interface ViewProps {
    router: NextRouter;
    data: TR[];
    stampSelected: number;
    setStampSelected: SetIndex;
    dataDevices: any;
    dataBrands: any;
}

export default function Return() {
    return <></>
}