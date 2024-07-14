import React from "react";
import styled from "styled-components";

interface CharacterDetailsProps {
   character: {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
   };
}

const Details = styled.div`
   padding: 20px;
`;

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => (
   <Details>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
   </Details>
);

export default CharacterDetails;
