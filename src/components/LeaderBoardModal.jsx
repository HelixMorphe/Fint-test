import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, query, orderBy } from "@firebase/firestore";
import styled from "styled-components";
import devices from "../breakpoints";
const Container = styled.div`
  width: 100%;
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
  font-size: 1rem;
  margin-bottom: 0.5rem;
  @media ${devices.m} {
    font-size: 1.25rem;
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
  /* border: 1px solid black; */
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
const LeaderBoardModal = () => {
  const usersCollectionRef = collection(db, "users");

  const q1 = query(usersCollectionRef, orderBy("referCount", "desc"));
  const [leadersValue, leadersLoading] = useCollection(q1, {});
  if (!leadersLoading) {
    console.log(leadersValue.docs[0].data());
  }

  return (
    <Container>
      <Heading>
        <Title>Our top Evangelists</Title>
        <Description>1 REFERRAL = 10 FINT COINS</Description>
      </Heading>
      <SubHeadings>
        <SubHeading>#</SubHeading>
        <SubHeading>Name</SubHeading>
        <SubHeading>Fint Coins</SubHeading>
      </SubHeadings>
      {leadersLoading && <p>Loading...</p>}
      {!leadersLoading &&
        leadersValue.docs.slice(0, 5).map((doc, index) => {
          return (
            <Rank key={doc.id}>
              <Index>{index + 1}</Index>
              <Name>{doc.data().fullName}</Name>
              <Points>{(doc.data().referCount + 1) * 10}</Points>
            </Rank>
          );
        })}
    </Container>
  );
};

export default LeaderBoardModal;
