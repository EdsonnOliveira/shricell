import { HeaderItemsPreview } from "@atomic/constants/header";
import { LoginTypes } from "@redux/reducers/login/models";
import { BankProps } from "@api/bank/models";
import { SetBoolean, SetFile, SetVoid } from "@types/set";
import { GetFile } from "@types/get";

export interface IndexProps {
    dataUser: LoginTypes['data']
}

export interface ViewProps {
    itemsPreview: HeaderItemsPreview[];
    banks: BankProps[];
    payment: GetFile;
    setPayment: SetFile;
    finishCart: SetVoid;
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;
}