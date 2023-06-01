import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  border-radius: 8px;
  margin: 20px auto;

  width: 320px;
  background-color: rgb(247, 249, 242);
  overflow: hidden;
  box-shadow: 0px 5px 10px 0px rgba(29, 29, 29, 0.5);
`;

export const Description = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: rgb(51, 45, 57);
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 35px;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.14;
  margin-bottom: 10px;
`;

export const InfoUser = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 1.86;
  color: rgba(128, 128, 128, 0.784);

  svg {
    vertical-align: middle;
    margin-right: 6px;
    color: inherit;
  }
`;

export const WrapperStats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);

  justify-content: space-around;
  background-color: rgb(235, 230, 230);
  height: 90px;
  margin: 15px;
  padding: 0;
  border-radius: 8px;
`;
export const WrapperItemStats = styled.li`
  list-style: none;
  margin: 0;
`;
export const InfoLabel = styled.span`
  display: block;
  text-align: center;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.86;
  color: rgba(95, 94, 94, 0.784);
  padding-top: 9px;
`;
export const Quanteti = styled.span`
  display: block;
  text-align: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.86;
  color: black;
  padding-top: 0;
`;
