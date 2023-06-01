import { AiOutlinePercentage } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsInfo,
} from './Statistics.styled';

export const Statistics = ({ title, statis }) => {
  return (
    <>
      <StatisticsBlock>
        <StatisticsTitle>{title}</StatisticsTitle>

        <StatisticsList>
          {statis.map(item => (
            <StatisticsItem key={item.id}>
              <StatisticsInfo>{item.label}</StatisticsInfo>
              <StatisticsInfo>
                {item.percentage}
                <AiOutlinePercentage />
              </StatisticsInfo>
            </StatisticsItem>
          ))}
        </StatisticsList>
      </StatisticsBlock>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statis: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
