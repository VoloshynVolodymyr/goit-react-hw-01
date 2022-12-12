import PropTypes from 'prop-types';
import Statistics from './Statistics';
import { StatisticWrapper } from './Statistics.styled';

const StatisticsList = ({ items }) => {
  return (
    <StatisticWrapper>
      {items.map(({id, label, percentage}) => (
        <li key={id}>
          <Statistics  
          id={id} 
          label={label} 
          percentage={percentage} />
        </li>
      ))}
    </StatisticWrapper>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
