// import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Feature } from "../components/Feature";
import { FeatureIcon } from "../assets/icons/featureIcon"
const IndexPage = () => {
  return (
    <div><Feature pic={<FeatureIcon/>}  title={'Хөтөлбөрүүд'} subtitle={'Жилээс жилд бидний зохион байгуулдаг хөтөлбөрүүдийн амжилттай төгөгчидтэй танилцна уу.'} text={'Feature1'}subtext={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} /></div>
    // <div><Comments author={'-Дорж'} position={'Zorig Хөтөлбөрийн төгсөгч'} imageUrl={Pic} text={'Hahoaho ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis viverra.'}/></div>
  ); 
};

export default IndexPage;
