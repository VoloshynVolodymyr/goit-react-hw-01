import PropTypes from 'prop-types';
import { StatisticItem, StatisticLabel } from './statistics.styled';
import getRandomColor from 'Utils/getRandomColor';

const Statistics = props => {
  const { label, percentage } = props;
  return (
    <StatisticItem 
      style={{
        backgroundColor: `${getRandomColor()}`,
      }}
    >
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticLabel>{percentage}%</StatisticLabel>
    </StatisticItem>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
