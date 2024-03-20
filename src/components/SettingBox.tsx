import styled from "styled-components";
import Curves from "./Curves";
import { useState } from "react";

interface SettingProps {
    isSettingOpen : boolean
}

function SettingBox({isSettingOpen} : SettingProps){
    const [num, setNum] = useState<number>(1);
    return (
        <Container className={isSettingOpen ? "setting" : ""}>
            <EmptyContainer/>
            <SettingPartContainer>
                <PartBox onClick={()=>{setNum(1);}}>1</PartBox>
                <PartBox onClick={()=>{setNum(2);}}>2</PartBox>
                <PartBox onClick={()=>{setNum(3);}}>3</PartBox>
                <PartBox onClick={()=>{setNum(4);}}>4</PartBox>
                <PartBox onClick={()=>{setNum(5);}}>5</PartBox>
            </SettingPartContainer>
            <BlankContainer/>
            <SettingDetailContainer>
                {num === 1 ? <Curves/> : null}
            </SettingDetailContainer>
        </Container>
    );
}

export default SettingBox;

const Container = styled.div`
    height: 100%;
    width: 35rem;
    position: fixed;
    left: -50%;
    transition: 0.5s ease;
    z-index:3;
    &.setting{
        left: 8rem;
        transition: 0.5s ease;
        z-index:1;
    }
`

const EmptyContainer = styled.div`
    width:100%;
    height: 40%;
`;

const SettingPartContainer = styled.div`
    width:100%;
    height: 5%;
    background: #D8D8D8;
    display: flex;
    flex-dircetion: row;
`;

const PartBox = styled.div`
    width: 15%;
    height: 98%;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items:center;
    &:hover{
        background-color:#8D8D8D;
    }
`;

const BlankContainer = styled.div`
    width:100%;
    height: 1%;
`;

const SettingDetailContainer = styled.div`
    width:100%;
    height:54%;
    background: #D8D8D8;
`;