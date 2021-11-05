import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import { useCollection } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";

const Container = styled.div`
  border-radius: 1rem;
  background: linear-gradient(to right, #d044ef, #9c35eb);
  padding: 3rem;
  width: 80%;
  margin: auto;
`;
const Title = styled.h1`
  text-align: center;
`;

const Rank = styled.div`
  /* border: 1px solid black; */
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  width: 70%;
  margin: auto;
  margin-bottom: 0.5rem;
  background: white;
`;
const MyRank = styled.div`
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  width: 70%;
  margin: auto;
  margin-bottom: 0.5rem;
  background: lightblue;
  cursor: pointer;
`;
const Index = styled.div`
  flex: 1;
  text-align: center;
`;
const Name = styled.div`
  flex: 1;
  text-align: center;
`;
const Points = styled.div`
  flex: 1;
  text-align: center;
`;

const LeaderBoard2 = () => {
  const usersCollectionRef = collection(db, "users");
  //   const currentUserRef = doc(usersCollectionRef)
  const params = useParams();
  const findUser = async () => {
    const docRef = doc(db, "users", params.userId);
    const findCurrentUser = await getDoc(docRef);
    console.log(findCurrentUser.data());
  };

  useEffect(() => {
    findUser();
  }, []);

  const q1 = query(usersCollectionRef, orderBy("referCount", "desc"));
  const [leadersValue, leadersLoading, leadersError] = useCollection(q1, {});

  return (
    <Container>
      {leadersLoading && <div>Loading ...</div>}
      {leadersValue &&
        leadersValue.docs.slice(0, 10).map((doc, index) => (
          <Rank key={doc.id}>
            <Index>{index + 1}</Index>
            <Name>{doc.data().fullName}</Name>
            <Points>{doc.data().referCount * 10}</Points>
          </Rank>
        ))}
    </Container>
  );
};

export default LeaderBoard2;
