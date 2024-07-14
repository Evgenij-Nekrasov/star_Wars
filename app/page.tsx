"use client";

import React, { useState, useEffect } from "react";
import CharacterCard from "./components/characterCard";
import Header from "./components/header";
import { fetchCharacters } from "./utils/api/request/starWars";
import styled from "styled-components";

const Container = styled.div`
   padding: 20px;
`;

const SearchInput = styled.input`
   margin-bottom: 20px;
   padding: 10px;
   width: 100%;
   max-width: 500px;
`;

const CharacterList = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
`;

const Home: React.FC = () => {
   const [characters, setCharacters] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [page, setPage] = useState(1);

   useEffect(() => {
      const getCharacters = async () => {
         const data = await fetchCharacters(searchTerm, page);
         setCharacters(data.results);
      };
      getCharacters();
   }, [searchTerm, page]);

   return (
      <Container>
         <Header />
         <SearchInput
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         <CharacterList>
            {characters.map((character, i) => (
               <CharacterCard key={i} character={character} />
            ))}
         </CharacterList>
         <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
         </button>
         <button onClick={() => setPage(page + 1)}>Next</button>
      </Container>
   );
};

export default Home;
