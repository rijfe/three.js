import styled from "styled-components";
import ListCard from "./ListCard";

interface PartListProps {
    isPartOpen : boolean,
    lineNum: number,
}

function PartList({isPartOpen, lineNum} : PartListProps){
    const dumyData = [
        {
            title: "Dumy1",
            material: "Dumy_Block",
            w: 15.0,
            h: 32.0,
            d: 15.0
        },
        {
            title: "Dumy2",
            material: "Dumy_Block",
            w: 19.4,
            h: 39.0,
            d: 15.4
        },
        {
            title: "Dumy3",
            material: "Dumy_Block",
            w: 15.2,
            h: 40.0,
            d: 15.2
        },
        {
            title: "Dumy4",
            material: "Dumy_Block",
            w: 12.0,
            h: 15.0,
            d: 10.0
        },
        {
            title: "Dumy5",
            material: "Dumy_Block",
            w: 15.4,
            h: 32.0,
            d: 15.0
        },
        {
            title: "Dumy6",
            material: "Dumy_Block",
            w: 14.0,
            h: 18.0,
            d: 12.0
        },
        {
            title: "Dumy7",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy8",
            material: "Dumy_Block",
            w: 15.9,
            h: 18.0,
            d: 17.3
        },
        {
            title: "Dumy9",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy10",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy11",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy12",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy13",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy14",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
        {
            title: "Dumy15",
            material: "Dumy_Block",
            w: 10.0,
            h: 15.0,
            d: 8.0
        },
    ];
    return (
        <PartListContainer className = {isPartOpen ? "part":""}>
            <PartContainer
                style={{height:`${lineNum*4.5}%`}}
            >
                <PartBox style={{height:`${100/lineNum}%`}}>
                    <Part onClick={(e)=>{console.log(e.target);}}><PartDeco>pos1</PartDeco></Part>
                    <Part onClick={(e)=>{console.log(e.target);}}><PartDeco>pos2</PartDeco></Part>
                    <Part onClick={(e)=>{console.log(e.target);}}><PartDeco>pos3</PartDeco></Part>
                    <Part onClick={(e)=>{console.log(e.target);}}><PartDeco>pos4</PartDeco></Part>
                    <Part onClick={(e)=>{console.log(e.target);}}><PartDeco>pos5</PartDeco></Part>
                </PartBox>
                <PartBox style={{height:`${100/lineNum}%`}}>
                    <Part onClick={(e)=>{console.log(e.target);}}><PartDeco>pos6</PartDeco></Part>
                </PartBox>
            </PartContainer>
            <BlankContainer></BlankContainer>
            <ListContainer>
                <BlankContainer/>
                {/* {dumyData.map((ele)=>(
                    <ListCard title={ele.title} material={ele.material} w={ele.w} h={ele.h} d={ele.d}/>
                ))} */}
                <ListCard title={"title"} material={"material"} w={1} h={1} d={1}/>
            </ListContainer>
        </PartListContainer>
    );
}

export default PartList;

const PartListContainer = styled.div`
    width: 35rem;
    height: 100%;
    position: fixed;
    left: -50%;
    transition: 0.5s ease;
    z-index:-1;
    &.part{
        left: 8rem;
        transition: 0.5s ease;
        z-index:1;
    }
`

const PartContainer = styled.div`
    width:100%;
    background: #D8D8D8;
    display: flex;
    flex-direction: column;
`;

const BlankContainer = styled.div`
    width:100%;
    height: 1%;
`;

const ListContainer = styled.div`
    width:100%;
    background: #D8D8D8;
    display: flex;
    align-items: center;
    flex-direction: column;
    height:90%;
`;

const ListOverflow = styled.div`

`;

const PartBox = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
`;

const Part = styled.div`
    width:20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.5rem;
`;

const PartDeco = styled.div`
    width:85%;
    height: 85%;
    background: #a7a7a7;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        border-bottom: 0.2rem solid #ff0000;
    }
`; 