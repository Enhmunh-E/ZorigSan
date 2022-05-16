import React from "react";
import styled from 'styled-components'
import { Text } from "../core";
import { motion, useAnimation } from "framer-motion";




const Box = ({ children, id }) => {
    const boxVariants = {
        offscreen: {
            opacity: '0',
            y: 0,
        },
        onscreen: {
            opacity: '1',
            transition: {
                bounce: 0.4,
                delay: id * 0.1,
                duration: 0.8,
                type: "spring",
            },
            y: -50,
        }
    };
    const control = useAnimation();
    return (
        <motion.div
            className="box"
            variants={boxVariants}
            initial="offscreen"
            animate={control}
            whileInView='onscreen'
        >
            <h1>{children} </h1>
        </motion.div>
    );
};

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

const data = [
    {
        number: '1998',
        text: 'ҮҮСГЭН БАЙГУУЛСАН',
    },
    {
        number: '2880+',
        text: 'НИЙТ ОЛГОСОН ТЭТГЭЛЭГ',
    },
    {
        number: '300+',
        text: 'НИЙГМИЙН ХӨГЖЛИЙН ТӨЦЛҮҮД',
    },
    {
        number: '5000+',
        text: 'ХӨТӨЛБРИЙН ТӨГСӨГЧИД',
    },
]

export const Analytic = () => {
    return (
        <Analytic_Container>
            <Name><Text color="#0C265C" type='Quote'>ЗОРИГ САН</Text></Name>
            <Analytic_Data>
                {data.map((el, ind) => {
                    return <Box key={ind} id={ind}>
                        <Group>
                            <Number><Text type='H1Bold' color="#0C265C">{el.number}</Text></Number>
                            <Fact><Text type='T2Bold' color="#0C265C">{el.text}</Text></Fact>
                        </Group>
                    </Box>
                })}
            </Analytic_Data>
        </Analytic_Container>
    )
}

export default Analytic;