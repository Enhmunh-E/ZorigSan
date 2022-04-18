import React from "react";
import styled from 'styled-components'

const Analytic_Container = styled.div`
    width: 100%;
    height: 473px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: rgba(192, 199, 207, 0.11);
    @media (max-width: 675px) {
    height: 600px;
    width: 100%;
    align-items: center;
    justify-content: center;
    }
`
const Name = styled.div`
    font-family: Montserrat;
    font-size: 100px;
    font-weight: 600;
    letter-spacing: -1.25px;
    display: flex;
    justify-content: center;
    color: #0C265C;
    font-style: normal; 
    @media (max-width: 675px) {
    font-size: 64px;
    }
`

const Analytic_Data = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 675px) {
    height: 504px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    }
`

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 72px;
    justify-content: space-between;
`

const Number = styled.div`
    font-family: Montserrat;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 0.25px;
    text-align: center;
    color: #0C265C;
`

const Fact = styled.div`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #0C265C;
    padding-left: 4px;
    padding-right: 4px;
`

export const Analytic = () => {
    return(
        <Analytic_Container>
            <Name>ЗОРИГ САН</Name>
            <Analytic_Data>
                <Group>
                    <Number>1998</Number>
                    <Fact>ҮҮСГЭН БАЙГУУЛСАН</Fact>
                </Group>

                <Group>
                    <Number>2880+</Number>
                    <Fact>НИЙТ ОЛГОСОН ТЭТЭГЛЭЛ</Fact>
                </Group>

                <Group>
                    <Number>300+</Number>
                    <Fact>НИЙГМИЙН ХӨГЖЛИЙН ТӨЦЛҮҮД</Fact>
                </Group>

                <Group>
                    <Number>5000+</Number>
                    <Fact>ХӨТӨЛБРИЙН ТӨГСӨГЧИД</Fact>
                </Group>
            </Analytic_Data>
        </Analytic_Container>
    )
}

export default Analytic;