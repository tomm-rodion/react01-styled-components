import styled from 'styled-components';

export const StatisticsBlock = styled.section`
  margin: 0 auto 30px;
  width: 500px;
  background-color: rgb(247, 249, 242);
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(29, 29, 29, 0.5);
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  padding: 12px 0;
  color: rgb(51, 45, 57);
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-around;
  background-color: rgb(235, 230, 230);
  margin: 15px;
  padding: 12px;
  border-radius: 8px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  align-items: center;
  justify-content: center;
  height: 80px;
  border-radius: 8px;
`;

export const StatisticsInfo = styled.span`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.5;
  padding-left: 8px;
  padding-right: 8px;

  svg {
    size: 18px;
    margin-left: 2px;
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 4576103)
    .toString(16)
    .padStart(6, 0)}`;
}
