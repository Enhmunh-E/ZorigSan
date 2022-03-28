import React from "react";
import {
  Padding,
  Border,
  Button,
  Image,
  Margin,
  SelectButtons,
  TooltipComp,
  Cards,
  Header,
  Footer,
<<<<<<< HEAD
  Carousel
} from "../components";
import { Input } from "../components/Input";

const images = [
  {
    name: 'Bataa',
    src: 'https://images2.alphacoders.com/110/1109233.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.'
  },
  {
    name: 'Dorj',
    src: 'https://images5.alphacoders.com/112/1123013.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.'
  },
  {
    name: 'Tsetsgee',
    src: 'https://images.alphacoders.com/110/1109227.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.'
  },
  {
    name: 'Dulmaa',
    src: 'https://images.alphacoders.com/113/1131281.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.'
  },
  {
    name: 'Nergui',
    src: 'https://images3.alphacoders.com/110/1105694.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.'
  }]

=======
} from "../components";
import { Input } from "../components/Input";

>>>>>>> b501384 (fixed)
const Test = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "200vh",
        justifyContent: "space-around",
        width: "100vw",
      }}
    >
      <Header />
      <Padding size={[16, 16, 16, 16]}>
        <div
          style={{ backgroundColor: "black", color: "#fff", height: "50px" }}
        >
          Padding
        </div>
      </Padding>
      <Border
        height="50"
        width="200"
        borderColor="black"
        borderWidth="2px"
        borderStyle="solid"
      >
        Border
      </Border>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button type="primary">Button</Button>
        <Button type="primary-outlined">Button</Button>
        <Button type="secondary">Button</Button>
        <Button type="secondary-outlined">Button</Button>
        <Button type="tertiary">Button</Button>
        <Button type="tertiary-outlined">Button</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Input
          placeholder="Input"
          type="search"
          label="Input"
          hint="Optional Hint"
        />
        <Input placeholder="Input" type="send" />
        <Input placeholder="Input" optional="error" />
      </div>
      <Image
        src="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg"
        height="100px"
        width="100px"
      />
      <Margin size={[16, 16, 16, 16]}>
        <div
          style={{ backgroundColor: "black", color: "#fff", height: "50px" }}
        >
          Margin
        </div>
      </Margin>
      <SelectButtons
        items={["neg", "hoyr", "gurav"]}
        buttonHandler={() => {
          console.log("select");
        }}
      />
      <TooltipComp placement="left" content="adasdsy">
        <div
          style={{ backgroundColor: "red", height: "300px", width: "300px" }}
        />
      </TooltipComp>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Cards
          type="primary"
          image="https://pbs.twimg.com/media/A4KimPICAAAmFs-.jpg"
          header="Booking System"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          type="tertiary"
          image="https://pbs.twimg.com/media/A4KimPICAAAmFs-.jpg"
          header="Booking System"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        />
        <Cards
          type="secondary"
          image="https://pbs.twimg.com/media/A4KimPICAAAmFs-.jpg"
          origin="MGL Ambassador"
          header="Guy Hawkins"
          description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam.”"
        />
      </div>
      <Footer />
<<<<<<< HEAD
      <Carousel arr={images} WrapperWidth={"75vw"}>
        {images.map((el, i) => (
          <div key={i}>
            <Image
              src={el.src}
              alt={""}
              width={"50%"}
              height={"100%"}
              borderRadius={"1%"}
            />
            <div>
              {el.text} {el.name}
            </div>
          </div>
        ))}
      </Carousel>
=======
>>>>>>> b501384 (fixed)
    </div>
  );
};

<<<<<<< HEAD
export default Test;
=======
export default Test;
>>>>>>> b501384 (fixed)
