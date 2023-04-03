import { HeaderItemsPreview } from "@atomic/constants/header";
import { NextRouter } from "next/router";
import { TR } from "@atomic/constants/table";

export interface ViewProps {
    router: NextRouter;
    data: TR[];
    itemsPreview: HeaderItemsPreview[]
    modalAdd: boolean;
    setModalAdd: (visible: boolean) => void;
}