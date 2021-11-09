import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import devices from "../breakpoints";

const Container = styled.div`
  width: 100%;
  margin: auto;
  @media ${devices.m} {
    width: 70%;
  }
`;
const Item = styled.div`
  background-color: white;
  /* border-radius: 10px; */
  min-height: 300px;
`;
const CarouselWrapper = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const Image = styled.img`
    height: 100px;
    object-fit: contain;
    margin: auto;
    flex: 2;
  `;
  const ImageTitle = styled.h2`
    text-align: center;
    flex: 1;
    @media ${devices.m} {
      text-align: left;
    }
  `;
  const ItemContent = styled.div`
    padding: 2rem;
    text-align: center;
    height: 250px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    @media ${devices.m} {
      text-align: left;
    }
  `;
  const ImageContent = styled.p`
    flex: 1;
  `;
  return (
    <Container>
      <Slider {...settings}>
        <Item>
          <ItemContent>
            <Image src="http://fint.money/images/goingup.png" />
            <ImageTitle>Invest</ImageTitle>
            <ImageContent>
              Personalized according to your needs. It’s your money,so we
              believe that the decision making power should be in your hands.
            </ImageContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <Image src="http://fint.money/images/coins.png" />
            <ImageTitle>Earn</ImageTitle>
            <ImageContent>
              Earn up to 20% cashback Rewards, reinvest to give yourself a pat
              on the back.
            </ImageContent>
          </ItemContent>
        </Item>
        <Item>
          <ItemContent>
            <Image src="http://fint.money/images/peace2.png" />
            <ImageTitle>Celebrate</ImageTitle>
            <ImageContent>
              Crush your financial goals and say goodbye to the feeling of FOMO.
              It’s your time to show off on insta 😛
            </ImageContent>
          </ItemContent>
        </Item>
      </Slider>
    </Container>
  );
};

export default CarouselWrapper;
