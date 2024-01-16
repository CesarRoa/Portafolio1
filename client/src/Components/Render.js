import styled from "styled-components";

const Render = ({ data }) => {
  const rankings = data.rankings;
  console.log(rankings)
  return (
    <Div>
      Render
      <Wrapper>
        {rankings.map((team) => {
          const primaryColor = team.team.teamColors.primary;
          const secondaryColor = team.team.teamColors.secondary;
          return <RankingDiv key={team.id} style={{ background: primaryColor, color: secondaryColor}}>
            {team.ranking} - {team.points}
            <div style={{color: secondaryColor}}>
            {team.team.shortName} - {team.team.country.alpha2}
            </div>

          </RankingDiv>;
        })}
      </Wrapper>
    </Div>
  );
};

export default Render;

const Div = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex; // Horizontal layout
  overflow-x: auto; // Scroll if content overflows
  gap: 20px; // Space between countries
`;

const RankingDiv = styled.div`
  border: 1px red dashed;
  width: 100px;
  height: 50px;
  align-content: center;
  padding: 10px 50px;
  
  transition: transform 0.3s ease; // Smooth transition

  &:hover {
    transform: scale(1.1); // Enlarge the item on hover
  }
`;
