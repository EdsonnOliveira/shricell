import { Item, ItemBoxIcon, Main, Row } from "./style";
import { IndexProps } from "./models";

const Steps: React.FC<IndexProps> = ({
    items,
    currentStep
}) => {
    return (
        <Main>
            {
                items.map((item) => (
                    <>
                        <Item>
                            <h6 className="fontGray fontSmall">{ item.label }</h6>
                            <ItemBoxIcon selected={currentStep > item.index}></ItemBoxIcon>
                            <h5 className="">{ item.description }</h5>
                        </Item>
                        { item.index < items.length-1 && <Row selected={currentStep > item.index} /> }
                    </>
                ))
            }
        </Main>
    )
}

export default Steps;