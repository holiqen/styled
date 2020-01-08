import React from "react";
import Room from "./Room";
import styled from "styled-components";
import roomsDate from "./Rooms-data";
import Section from "../globals/Section";
import { media, setColor, setRem } from "../../styles";
import Title from "../globals/Title";

const Rooms = () => {
  return (
    <Section color={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {roomsDate.map(room => (
          <Room key={room.id} room={room} />
        ))}
      </RoomsCenter>
    </Section>
  );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.large`
        width: 100vw;
        max-width: 1170px;
    `};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
`;

export default Rooms;
