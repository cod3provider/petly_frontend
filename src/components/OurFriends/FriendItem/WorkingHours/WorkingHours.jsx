import PropTypes from 'prop-types';
import { WorkList, WorkSpan, WorkText } from './WorkingHours.styled.js';

export const WorkingHours = ({ workingDays }) => {
  return (
    <WorkList>
      {workingDays.map((item, idx) => (
        <li key={idx}>
          {item?.isOpen ? (
            <WorkText>
              <WorkSpan>{item.day}</WorkSpan> <WorkSpan>{item.from}-{item.to}</WorkSpan>
            </WorkText>
          ) : (
            <WorkText>
              <WorkSpan>{item.day}</WorkSpan> <WorkSpan>closed</WorkSpan>
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