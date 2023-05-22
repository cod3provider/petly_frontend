import PropTypes from 'prop-types';
import { WorkList, WorkSpan, WorkText } from './WorkingHours.styled.js';

export const WorkingHours = ({ workingDays }) => {
  return (
    <WorkList>
      {workingDays.map((workDay, idx) => (
        <li key={idx}>
          {workDay?.isOpen ? (
            <WorkText>
              <WorkSpan>{workDay.day}</WorkSpan> <WorkSpan>{workDay.from}-{workDay.to}</WorkSpan>
            </WorkText>
          ) : (
            <WorkText>
              <WorkSpan>{workDay.day}</WorkSpan> <WorkSpan>closed</WorkSpan>
            </WorkText>
          )}
        </li>
      ))}
    </WorkList>
  );
};

export default WorkingHours;

WorkingHours.propTypes = {
  workingDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool,
      day: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
    }).isRequired
  ).isRequired,
};