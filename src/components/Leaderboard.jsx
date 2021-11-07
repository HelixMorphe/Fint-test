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
  padding: 3rem;
  width: 80%;
  margin: auto;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  background: skyblue;
  padding: 2rem 0;
`;
const SubHeadings = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const SubHeading = styled.p`
  text-align: center;
  flex: 1;
  padding: 1rem 0;
  background: white;
  color: black;
  border-bottom: 1px solid black;
`;

const Rank = styled.div`
  /* border: 1px solid black; */
  /* border-radius: 1rem; */
  display: flex;
  border-bottom: 1px lightslategray solid;
  justify-content: space-around;
  padding: 1rem;

  margin: auto;
  /* margin-bottom: 0.5rem; */
  background: white;
`;
const MyRank = styled.div`
  display: flex;
  border-bottom: 1px lightslategray solid;
  justify-content: space-around;
  padding: 1rem;

  margin: auto;
  /* margin-bottom: 0.5rem; */
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
  const [userExists, setUserExists] = useState(false);
  const [user, setUser] = useState(false);
  const usersCollectionRef = collection(db, "users");
  //   const currentUserRef = doc(usersCollectionRef)
  const params = useParams();
  const findUser = async () => {
    const docRef = doc(db, "users", params.userId);
    const findCurrentUser = await getDoc(docRef);
    setUserExists(findCurrentUser.exists());
    // setUser()
  };

  useEffect(() => {
    findUser();
  }, []);

  const q1 = query(usersCollectionRef, orderBy("referCount", "desc"));
  const [leadersValue, leadersLoading, leadersError] = useCollection(q1, {});
  if (!leadersLoading && userExists) {
    var userIndex = leadersValue.docs.findIndex(
      (doc, index) => doc.data().mobileNumber === params.userId
    );
  }

  return (
    <Container>
      <Title>LEADERBOARD</Title>
      <SubHeadings>
        <SubHeading>Rank</SubHeading>
        <SubHeading>Name</SubHeading>
        <SubHeading>Points</SubHeading>
      </SubHeadings>
      {leadersLoading && <div>Loading ...</div>}
      {leadersValue &&
        leadersValue.docs.slice(0, 10).map((doc, index) => {
          if (index === userIndex)
            return (
              <MyRank key={doc.id}>
                <Index>{index + 1}</Index>
                <Name>{doc.data().fullName}</Name>
                <Points>{doc.data().referCount * 10}</Points>
              </MyRank>
            );
          else {
            return (
              <Rank key={doc.id}>
                <Index>{userIndex}</Index>
                <Name>{doc.data().fullName}</Name>
                <Points>{doc.data().referCount * 10}</Points>
              </Rank>
            );
          }
        })}
      {/* {userIndex > 10 && <div>pK</div>} */}
    </Container>
  );
};

export default LeaderBoard2;
