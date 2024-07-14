import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { BASE_URL } from "@/app/utils/api/request/starWars";

interface CharacterCardProps {
   character: {
      name: string;
      url: string;
   };
}

const Card = styled.div`
   border: 1px solid #ccc;
   padding: 10px;
   cursor: pointer;
   transition: transform 0.2s;

   &:hover {
      transform: scale(1.05);
   }
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
   const id = character.url.split("/").filter(Boolean).pop();
   return (
      <Link href={`${BASE_URL}/people/${id}`}>
         <Card>
            <h2>{character.name}</h2>
         </Card>
      </Link>
   );
};

export default CharacterCard;
