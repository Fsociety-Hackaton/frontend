// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const JobCard = styled.button`
  width: 96%;
  height: 120px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dfe1e5;
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const JobImage = styled.img`
  width: 84px;
  height: 86px;
  margin-left: 10px;
`;

export const JobCardContainer = styled.div`
  width: 100%;
  p {
    font-size: 87%;
  }
`;
