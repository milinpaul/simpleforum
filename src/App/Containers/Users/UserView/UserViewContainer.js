import React from "react";
import styled from "styled-components";

import Spinner from "../../../Components/Spinner";
import Button from "../../../Components/Buttons";
import useRequest from "../../../Hooks/useRequest";
import { getSingleUserUrl } from "../../../helpers/apiUrl";

const UserViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 25rem;
`;

const UserViewCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 3rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserInfo = styled.div`
  display: flex;

  & h3 {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 400;
  }

  & label {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 1rem;
  }
`;

const UserViewContainer = ({ match, history }) => {
  const [user, loading] = useRequest({
    url: getSingleUserUrl(match?.params?.userId),
    method: { method: "GET" },
  });

  if (loading) {
    return <Spinner />;
  }

  const onGoBackClickHandler = () => {
    history.push("/");
  };

  return (
    <UserViewWrapper>
      <UserViewCard>
        <UserInfo>
          <label>Name: </label>
          <h3>{user.name}</h3>
        </UserInfo>
        <UserInfo>
          <label>Username: </label>
          <h3>{user.username}</h3>
        </UserInfo>
        <UserInfo>
          <label>Email: </label>
          <h3>{user.email}</h3>
        </UserInfo>
        <UserInfo>
          <label>Website: </label>
          <h3>{user.website}</h3>
        </UserInfo>
        <UserInfo>
          <label>Company Name: </label>
          <h3>{user.company?.name}</h3>
        </UserInfo>
        <Button onClick={onGoBackClickHandler}>Go Back</Button>
      </UserViewCard>
    </UserViewWrapper>
  );
};

export default UserViewContainer;
