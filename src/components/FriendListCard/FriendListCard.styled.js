import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;

  margin: 0 auto 10px;
  width: 300px;
  height: 80px;
  background-color: rgb(247, 249, 242);
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(29, 29, 29, 0.5);

  &:hover {
    scale: 1.1;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const IsOnlineFriend = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${props => {
    return props.isOnline ? ' rgb(8, 178, 5)' : ' rgb(218, 5, 5)';
  }};
`;

export const Avatar = styled.img`
  margin-left: 15px;
`;

export const NemeFriend = styled.p`
  margin-left: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 2.14;
`;
