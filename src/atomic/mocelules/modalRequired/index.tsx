import React from "react";

import Modal from "../modal";

import { IndexProps } from "./models";

const ModalRequired: React.FC<IndexProps> = ({
    field,
    visible,
    onClose,
    onShow
}) => (
    <Modal
        title='Required field'
        visible={visible}
        onClose={onClose}
        onShow={onShow}
        type='error'
        firstButton={
            {
                text: 'Ok',
                type: 'redLightLarge',
                onClick: onClose
            }
        }
    >
        <h4 className="fontW400 fontCenter"><b>{ field }</b> field not filled in.<br />Please, fill in the field!</h4>
    </Modal>
)

export default ModalRequired;