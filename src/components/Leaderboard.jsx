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
import ClipBoard from "./ClipBoard";

const Container = styled.div`
  border-radius: 1rem;

  width: 95%;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 1.5rem;
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
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
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
const UserInfo = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0;
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
        <SubHeading>#</SubHeading>
        <SubHeading>Name</SubHeading>
        <SubHeading>Points</SubHeading>
      </SubHeadings>
      {leadersLoading && <div>Loading ...</div>}
      {leadersValue &&
        leadersValue.docs.slice(0, 5).map((doc, index) => {
          if (index === userIndex)
            return (
              <MyRank key={doc.id}>
                <Index>{userIndex}</Index>
                <Name>{doc.data().fullName}</Name>
                <Points>{doc.data().referCount * 10}</Points>
              </MyRank>
            );
          else {
            return (
              <Rank key={doc.id}>
                <Index>{index + 1}</Index>
                <Name>{doc.data().fullName}</Name>
                <Points>{doc.data().referCount * 10}</Points>
              </Rank>
            );
          }
        })}
      {userIndex > 5 && (
        <div>
          <UserInfo>There are {userIndex} people ahead of you.</UserInfo>
          <ClipBoard />
        </div>
      )}
    </Container>
  );
};

export default LeaderBoard2;
