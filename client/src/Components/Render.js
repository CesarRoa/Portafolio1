import styled from "styled-components";

const Render = ({ data }) => {
  const rankings = data.rankings;

  return (
    <Div>
      Render
      <CountriesWrapper>
        {rankings.map((country) => {
          return <CountryDiv key={country.id}>{country.ranking}</CountryDiv>;
        })}
      </CountriesWrapper>
    </Div>
  );
};

export default Render;

const Div = styled.div`
  padding: 20px;
`;

const CountriesWrapper = styled.div`
  display: flex; // Horizontal layout
  overflow-x: auto; // Scroll if content overflows
  gap: 20px; // Space between countries
`;

const CountryDiv = styled.div`
  padding: 10px 20px;
  transition: transform 0.3s ease; // Smooth transition

  &:hover {
    transform: scale(1.1); // Enlarge the item on hover
  }
`;
