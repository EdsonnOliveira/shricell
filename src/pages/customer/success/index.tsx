import React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import View from "./view";

const Success: React.FC = ({}) => {
    return <View />
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Success);