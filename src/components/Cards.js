import React, { useMemo } from "react";
import { Image } from "./Image";
import { Padding } from "./Padding";
import "../styles/Cards.css";

export const Cards = ({ type, image, header, description, origin }) => {
  // const type = 'primary' : 'tertiary' : 'secondary'
  const smallHeader = useMemo(
    () => (header?.length > 20 ? header.substring(0, 13) + "..." : header),
    [header]
  );
  const smallOrigin = useMemo(
    () => (origin?.length > 20 ? origin.substring(0, 13) + "..." : origin),
    [origin]
  );
  const smallDescription = useMemo(
    () =>
      description?.length > 100
        ? description.substring(0, 119) + "..."
        : description,
    [description]
  );
  const BigDescription = useMemo(
    () =>
      description?.length > 240
        ? description.substring(0, 240) + "..."
        : description,
    [description]
  );

  if (type === "primary") {
    return (
      <div className="contener">
        <div>
          <Padding size={[16, 16]}>
            {" "}
            <Image src={image} width="263.33" height="160" borderRadius="10" />
          </Padding>
          <Padding size={[15, 16]}>
            <div style={{ width: "263.33px" }}>
              <div className="CardBigText">{smallHeader}</div>
              <div className="CardSmallText" style={{ marginTop: "5px" }}>
                {smallDescription}
              </div>
            </div>
          </Padding>
        </div>

        <div>
          <div className="scratches" />

          <Padding size={[14, 16]}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "263px",
              }}
            >
              {/* {" "} */}
              {/* <Button w="100" h="40" style={{ color: ' #4FADE0' }} onClick={onClick} type={'tertiary-outlined'}className="CardSmallText">Try Now</Button> */}
            </div>
          </Padding>
        </div>
      </div>
    );
  }
  if (type === "tertiary") {
    return (
      <div className="contener">
        <Image width="295.33" height="204" borderRadius="10" src={image} />
        <Padding size={[0, 16, 0, 16]}>
          <div style={{ marginTop: "21px", width: "263.33px" }}>
            <div className="CardBigText">{smallHeader}</div>
            <div className="CardSmallText" style={{ marginTop: "8px" }}>
              {smallDescription}
            </div>
          </div>
        </Padding>

        <Padding size={[0, 0, 20, 0]}>
          {/* {" "} */}
          {/* <Button onClick={onClick} style={{ color: ' #4FADE0' }} className="CardSmallText"w="100" h="40" type={'tertiary-outlined'}>Try Now</Button> */}
        </Padding>
      </div>
    );
  }
  if (type === "secondary") {
    return (
      <div className="contener">
        <Padding size={[41, 16]}>
          <div className="CardSmallText" style={{ width: "263.33px" }}>
            {BigDescription}
          </div>
        </Padding>

        <div style={{ width: "263px" }}>
          <div className="scratches" />
          <Padding size={[28, 16, 13, 0]}>
            <Image className="rounded" src={image} />
          </Padding>
          <Padding size={[0, 0, 68, 0]}>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ maxWidth: " 130px" }}>
                <div className="CardBigText">{smallHeader}</div>
                <div className="CardSmallText">{smallOrigin}</div>
              </div>
              <div className="CardLogo" />
            </div>
          </Padding>
        </div>
      </div>
    );
  }
  return <div />;
};
export default Cards;
