import styled from "styled-components";

import { blue } from "@atomic/constants/colors";

export const Main = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Round = styled.div`
    width: 65px;
    height: 65px;
    background-color: ${blue};
    border-radius: 70px;
`

export const Text = styled.hgroup`
    gap: 5px;
`