import React, { useState, useEffect } from "react";
import styled from "styled-components";
import devices from "../breakpoints";
import LeaderBoardFooter from "./LeaderBoardFooter";
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

  width: 85%;
  margin: auto;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: white;
  background: #121212;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.m} {
    flex-direction: row;
  }
`;
const Title = styled.h1`
  flex: 1;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  @media ${devices.m} {
    font-size: 2rem;
  }
`;

const Description = styled.h2`
  flex: 1;
  font-size: 0.75rem;
  color: #f49b0b;
  @media ${devices.m} {
    font-size: 1rem;
  }
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
    console.log(leadersValue);
    var userIndex = leadersValue.docs.findIndex(
      (doc, index) => doc.data().mobileNumber === params.userId
    );
  }

  return (
    <Container>
      {/* <Title>LEADERBOARD</Title> */}
      <Heading>
        <Title>Our top Evangelists</Title>
        <Description>1 REFERRAL = 10 FINT COINS</Description>
      </Heading>
      <SubHeadings>
        <SubHeading>#</SubHeading>
        <SubHeading>Name</SubHeading>
        <SubHeading>Fint Coins</SubHeading>
      </SubHeadings>
      {leadersLoading && <div>Loading ...</div>}
      {leadersValue &&
        leadersValue.docs.slice(0, 5).map((doc, index) => {
          if (index === userIndex)
            return (
              <MyRank key={doc.id}>
                <Index>{userIndex + 1}</Index>
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
          <UserInfo>
            Out of {leadersValue.size + 250} sign-ups on the waitlist, your rank
            is {userIndex + 30} <br />
            You have access to{" "}
            {leadersValue.docs[userIndex].data().referCount * 10} Points
          </UserInfo>
        </div>
      )}
      {/* <LeaderBoardFooter /> */}
    </Container>
  );
};

export default LeaderBoard2;
