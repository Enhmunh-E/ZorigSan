import React from 'react';
import {
  Padding,
  Border,
  // Button,
  Image,
  Margin,
  SelectButtons,
  TooltipComp,
  Cards,
} from '../components';
import { Input } from '../components/Input';

function Test() {
  return (
    <div style={{
      display: 'flex', width: '100vw', height: '200vh', justifyContent: 'space-around', flexDirection: 'column',
    }}
    >
      <Padding size={[ 16, 16, 16, 16 ]}><div style={{ backgroundColor: 'black', height: '50px', color: '#fff' }}>Padding</div></Padding>
      <Border height="50" width="200" borderColor="black" borderWidth="2px" borderStyle="solid">Border</Border>
      {/* <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <Button type="primary">Button</Button>
                <Button type="primary-outlined">Button</Button>
                <Button type="secondary">Button</Button>
                <Button type="secondary-outlined">Button</Button>
                <Button type="tertiary">Button</Button>
                <Button type="tertiary-outlined">Button</Button>
            </div> */}
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <Input placeholder="Input" type="search" label="Input" hint="Optional Hint" />
        <Input placeholder="Input" type="send" />
        <Input placeholder="Input" optional="error" />
      </div>
      <Image src="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg" width="100px" height="100px" />
      <Margin size={[ 16, 16, 16, 16 ]}><div style={{ backgroundColor: 'black', height: '50px', color: '#fff' }}>Margin</div></Margin>
      <SelectButtons
        items={[ 'neg', 'hoyr', 'gurav' ]}
        buttonHandler={() => {
          console.log('select');
        }}
      />
      <TooltipComp placement="left" content="adasdsy"><div style={{ width: '300px', height: '300px', backgroundColor: 'red' }} /></TooltipComp>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <Cards type="primary" image="https://pbs.twimg.com/media/A4KimPICAAAmFs-.jpg" header="Booking System" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Cards type="tertiary" image="https://pbs.twimg.com/media/A4KimPICAAAmFs-.jpg" header="Booking System" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed" />
        <Cards type="secondary" image="https://pbs.twimg.com/media/A4KimPICAAAmFs-.jpg" origin="MGL Ambassador" header="Guy Hawkins" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam.”" />
      </div>
    </div>
  );
}
export default Test;
