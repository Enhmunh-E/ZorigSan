import React from "react";
import styled from 'styled-components'
import { Text } from "../core";

const Analytic_Container = styled.div`
    width: 100%;
    height: 473px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: rgba(192, 199, 207, 0.11);
    @media (max-width: 675px) {
        height: 552px;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
`
const Name = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 675px) {
        display: none;
    }
`

const Analytic_Data = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 675px) {
        height: 416px;
        width: 90%;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
`

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 74px;
    justify-content: space-between;
    @media (max-width: 675px) {
        width: 100%;
        justify-content: space-around;
    }
`

const Number = styled.div`
    letter-spacing: 0.25px;
    text-align: center;
`

const Fact = styled.div`
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: center;
    padding-left: 4px;
    padding-right: 4px;
`

export const Analytic = () => {
    return(
        <Analytic_Container>
            <Name><Text color="#0C265C" type='Quote'>ЗОРИГ САН</Text></Name>
            <Analytic_Data>
                <Group>
                    <Number><Text type='H1Bold' color="#0C265C">1998</Text></Number>
                    <Fact><Text type='T2Bold' color="#0C265C">ҮҮСГЭН БАЙГУУЛСАН</Text></Fact>
                </Group>

                <Group>
                    <Number><Text type='H1Bold' color="#0C265C">2880+</Text></Number>
                    <Fact><Text type='T2Bold' color="#0C265C">НИЙТ ОЛГОСОН ТЭТЭГЛЭЛ</Text></Fact>
                </Group>

                <Group>
                    <Number><Text type='H1Bold' color="#0C265C">300+</Text></Number>
                    <Fact><Text type='T2Bold' color="#0C265C">НИЙГМИЙН ХӨГЖЛИЙН ТӨЦЛҮҮД</Text></Fact>
                </Group>

                <Group>
                    <Number><Text type='H1Bold' color="#0C265C">5000+</Text></Number>
                    <Fact><Text type='T2Bold' color="#0C265C">ХӨТӨЛБРИЙН ТӨГСӨГЧИД</Text></Fact>
                </Group>
            </Analytic_Data>
        </Analytic_Container>
    )
}

export default Analytic;