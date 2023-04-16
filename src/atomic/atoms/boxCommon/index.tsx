import styled from "styled-components";
import { AlignmentsStyledProps } from "@atomic/constants/align";
import { MarginsStyledProps, PaddingsStyledProps, PositionStyledProps } from "@atomic/constants/spacing";
import { IndexStyledProps } from "./models";

const BoxCommon = styled.div`
    width: ${( props: IndexStyledProps ) => ( props.width ? props.width : 'null' )};
    height: ${( props: IndexStyledProps ) => ( props.height ? props.height : 'null' )};
    flex: ${( props: IndexStyledProps ) => ( props.flex ?? 'none' )};
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor ?? 'transparent' )};
    overflow: ${( props: IndexStyledProps ) => ( props.scroll ?? 'unset' )};

    flex-direction: ${( props: AlignmentsStyledProps ) => ( props.flexDirection ?? 'column' )};
    justify-content: ${( props: AlignmentsStyledProps ) => ( props.justifyContent ?? 'flex-start' )};
    align-items: ${( props: AlignmentsStyledProps ) => ( props.alignItems ?? 'flex-start' )};
    gap: ${( props: AlignmentsStyledProps ) => ( props.gap ?? '0px' )};
    flex-wrap: ${( props: AlignmentsStyledProps ) => ( props.flexWrap ?? 'unset' )};

    cursor: ${( props: IndexStyledProps ) => ( props.onClick ? 'pointer' : 'default' )};

    @media only screen and (max-width: 800px) {
        & {
            width: ${( props: IndexStyledProps ) => ( props.width800 ?? props.width )};
            flex-direction: ${( props: AlignmentsStyledProps ) => ( props.flexDirection800 ?? props.flexDirection )};
        }
    }

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    padding-top: ${( props: PaddingsStyledProps ) => (props.pt ?? 0)};
    padding-left: ${( props: PaddingsStyledProps ) => (props.pl ?? 0)};
    padding-right: ${( props: PaddingsStyledProps ) => (props.pr ?? 0)};
    padding-bottom: ${( props: PaddingsStyledProps ) => (props.pb ?? 0)};

    top: ${( props: PositionStyledProps ) => (props.top ?? 0)};
    left: ${( props: PositionStyledProps ) => (props.left ?? 0)};
    right: ${( props: PositionStyledProps ) => (props.right ?? 0)};
    bottom: ${( props: PositionStyledProps ) => (props.bottom ?? 0)};
`

export default BoxCommon;