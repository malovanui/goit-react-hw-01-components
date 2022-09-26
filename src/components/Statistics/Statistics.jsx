import PropTypes from 'prop-types';
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.flatMap(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercent>{percentage}</StatisticsPercent>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsCard>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(PropTypes.object.isRequired),
// };
