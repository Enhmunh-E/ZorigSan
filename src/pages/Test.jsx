import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header/Header";
import {
  Cards,
  Card,
  Carousel,
  SelectButtons,
  Title,
} from "../components/body";
import {
  Border,
  Button,
  Image,
  Margin,
  Opacity,
  Stack,
  TooltipComp,
  Padding,
} from "../components/core";
import { Input } from "../components/body/Input";

const images = [
  {
    name: "Bataa",
    src: "https://images2.alphacoders.com/110/1109233.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.",
  },
  {
    name: "Dorj",
    src: "https://images5.alphacoders.com/112/1123013.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.",
  },
  {
    name: "Tsetsgee",
    src: "https://images.alphacoders.com/110/1109227.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.",
  },
  {
    name: "Dulmaa",
    src: "https://images.alphacoders.com/113/1131281.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.",
  },
  {
    name: "Nergui",
    src: "https://images3.alphacoders.com/110/1105694.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.",
  },
];

const Test = () => {
  return (
    <Stack
      alignItems="center"
      display="flex"
      flexDirection="column"
      style={{ overflow: "hidden" }}
    >
      {/* -------------------- Header -------------------- */}
      <Margin
        size={[80, 0, 0, 0]}
      >
        <Header />
      </Margin>

      {/* -------------------- Card -------------------- */}
      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack
          alignItems="center"
          display="flex"
          flexDirection="column"
          style={{ paddingBottom: "20px" }}
        >
          <Title
            width={"100vw"}
            title={"Card"}
            subtitle={"Is an Image, header & Text with an optional line"}
          />
          <Card
            line={true}
            image={images[1].src}
            first="image"
            text="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra."
            header="Lorem ipsum dolor"
          ></Card>
        </Stack>
      </Border>

      {/* -------------------- Carousel -------------------- */}
      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack alignItems="center" display="flex" flexDirection="column">
          <Title
            width={"100vw"}
            title={"Carousel"}
            subtitle={'Has a multiple "Card"-s each with an Image & Text'}
          />
          <Carousel arr={images} WrapperWidth={"75vw"}>
            {images.map((el, i) => (
              <div key={i}>
                <Image
                  src={el.src}
                  alt={"Oops, Seems we cant render this image for some reason"}
                  width={"50%"}
                  height={"80%"}
                  borderRadius={"8px"}
                />
                <div>
                  {el.text} {el.name}
                </div>
              </div>
            ))}
          </Carousel>
        </Stack>
      </Border>

      {/* -------------------- Cards -------------------- */}
      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack
          alignItems="center"
          display="flex"
          flexDirection="column"
          style={{ paddingBottom: "20px" }}
        >
          <Title
            width={"100vw"}
            title={"Cards"}
            subtitle={
              "Is a rectangular card with an Image, border-shadow, Header, Text, & a line; It has 3 different types"
            }
          />
          <Stack
            alignItems="center"
            display="flex"
            flexDirection="row"
            gap="50px"
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
          </Stack>
        </Stack>
      </Border>

      {/* ---------------------------------------- Buttons ---------------------------------------- */}
      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="row"
          gap="10vw"
          style={{
            paddingBottom: "20px",
          }}
        >
          <Stack
            alignItems="center"
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            {/* -------------------- SelectButtons -------------------- */}
            <Title
              width={"30vw"}
              title={"SelectButtons"}
              subtitle={
                "A small array of how many buttons you choose, which you can select one of"
              }
            />
            <SelectButtons
              items={["neg", "hoyr", "gurav"]}
              buttonHandler={() => {
                console.log("select");
              }}
            />
          </Stack>
          <Stack
            alignItems="center"
            display="flex"
            flexDirection="column"
            gap="20px"
          >
            {/* -------------------- Button -------------------- */}
            <Title
              width={"30vw"}
              title={"Button"}
              subtitle={"A Button, with many types and colors"}
            />
            <Stack
              alignItems="center"
              display="flex"
              flexDirection="row"
              gap="20px"
            >
              <Button type="primary">Button</Button>
              <Button type="primary-outlined">Button</Button>
              <Button type="secondary">Button</Button>
            </Stack>
            <Stack
              alignItems="center"
              display="flex"
              flexDirection="row"
              gap="20px"
            >
              <Button type="secondary-outlined">Button</Button>
              <Button type="tertiary">Button</Button>
              <Button type="tertiary-outlined">Button</Button>
            </Stack>
          </Stack>
        </Stack>
      </Border>
      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
      >
        {/* -------------------- Input -------------------- */}
        <Stack
          borderWidth="2px"
          width="30000"
          borderColor="black"
          borderStyle="solid"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "10vw",
          }}
        >
          <Title
            width={"30vw"}
            title={"Input"}
            subtitle={
              "An Input with placeholders, optional hints, optional back-arrows & an error message"
            }
          />
          <Stack
            alignItems="center"
            display="flex"
            flexDirection="column"
            gap="20px"
            style={{ padding: "20px" }}
          >
            <Input
              placeholder="Input"
              type="search"
              label="Input"
              hint="Optional Hint"
            />
            <Input placeholder="Input" type="send" />
            <Input placeholder="Input" optional="error" />
          </Stack>
        </Stack>
      </Border>

      {/* -------------------- Opacity -------------------- */}
      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="row"
          style={{
            background: "linear-gradient(lightblue ,green",
            width: "80vw",
          }}
        >
          <Opacity opacity="25%">
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "20px",
                height: "200px",
                width: "300px",
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                style={{ height: "90%" }}
              >
                <Title
                  width={"100%"}
                  title={"this one is 25%"}
                />
              </Stack>
            </div>
          </Opacity>
          <Opacity opacity="50%">
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "20px",
                height: "200px",
                width: "300px",
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                style={{ height: "90%" }}
              >
                <Title
                  width={"100%"}
                  title={"Opacity"}
                  subtitle={
                    "A component that wraps other components, changing their opacity; this one is 50%"
                  }
                />
              </Stack>
            </div>
          </Opacity>
          <Opacity opacity="100%">
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "20px",
                height: "200px",
                width: "300px",
              }}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                style={{ height: "90%" }}
              >
                <Title
                  width={"100%"}
                  title={"this one is 100%"}
                />
              </Stack>
            </div>
          </Opacity>
        </Stack>
      </Border>

      <Border
        borderWidth="2px"
        width="30000"
        borderColor="black"
        borderStyle="solid"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        {/* -------------------- TooltipComp -------------------- */}
        <Stack
          alignItems="center"
          display="flex"
          flexDirection="row"
          gap="250px"
        >
          <Stack alignItems="center" display="flex" flexDirection="column">
            <Title
              width={"500px"}
              title={"TooltipComp"}
              subtitle={
                "A component that wraps other components, Making it so if you put your mouse over it; a Tooltip appears"
              }
            />
            <TooltipComp
              placement="right"
              content="This is a Tooltip, Set to the right!"
            >
              <div
                style={{
                  backgroundColor: "rgb(100,100,255)",
                  height: "100px",
                  width: "200px",
                }}
              >
                <Stack
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                  gap="20px"
                  style={{
                    fontWeight: "900",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  HOVER YOUR MOUSE OVER ME!
                </Stack>
              </div>
            </TooltipComp>
          </Stack>
          <Stack alignItems="center" display="flex" flexDirection="column">
            {/* -------------------- Padding -------------------- */}
            <Title
              width={"500px"}
              title={"Padding"}
              subtitle={
                "A component that wraps other components, Putting space inside of the component (The Box Has paddingLeft 300px)"
              }
            />
            <Padding size={[0, 0, 0, 300]}>
              <div
                style={{
                  backgroundColor: "rgb(100,100,255)",
                  height: "100px",
                  width: "200px",
                }}
              />
            </Padding>
          </Stack>
        </Stack>
      </Border>
      {/* -------------------- Footer -------------------- */}
      <Footer />
    </Stack>
  );
};

export default Test;