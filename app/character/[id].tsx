import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CharacterDetails from "../components/characterDetails";
import Header from "../components/header";
import { fetchCharacterById } from "../utils/api/request/starWars";
import styled from "styled-components";

const Container = styled.div`
   padding: 20px;
`;

const CharacterPage: React.FC = () => {
   const [character, setCharacter] = useState(null);
   const router = useRouter();
   const { id } = router.query;

   useEffect(() => {
      const getCharacter = async () => {
         if (id) {
            try {
               const data = await fetchCharacterById(id as string);
               setCharacter(data);
               const viewedCharacters = JSON.parse(
                  sessionStorage.getItem("viewedCharacters") || "[]"
               );
               if (!viewedCharacters.includes(id)) {
                  viewedCharacters.push(id);
                  sessionStorage.setItem(
                     "viewedCharacters",
                     JSON.stringify(viewedCharacters)
                  );
               }
            } catch (error) {
               router.push("/404");
            }
         }
      };
      getCharacter();
   }, [id]);

   if (!character) return <div>Loading...</div>;

   return (
      <Container>
         <Header />
         <CharacterDetails character={character} />
         <button onClick={() => router.push("/")}>Back to Home</button>
      </Container>
   );
};

export default CharacterPage;
