import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import './styles.css';

/**
 * используй useState там где будешь использовать календарь
 * передай пропсы selectedDay и setSelectedDay
 *
 * const [selectedDay, setSelectedDay] = useState();
 *
 * @param {selectedDay} state selected day state
 * @param {setSelectedDay} setState day selection function
 */
const DatePicker = ({ setSelectedDay }) => {
  const [Day, setDay] = useState();

  useEffect(() => {
    if (!Day) {
      return;
    }

    setSelectedDay(format(Day, 'yyyy-MM-dd'));
  }, [Day, setSelectedDay]);

  const footer = Day ? (
    <p>Selected {format(Day, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  const today = new Date();

  const disabledDays = {
    after: today,
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '270px',
        borderRadius: '40px ',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
      }}
    >
      <DayPicker
        mode="single"
        selected={Day}
        onSelect={setDay}
        footer={footer}
        hidden={disabledDays}
        fromYear={1900}
        toDate={today}
        captionLayout="dropdown"
        fixedWeeks
        showOutsideDays
        styles={{
          tfoot: { fontWeight: 'bold' },
        }}
      />
    </div>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  setSelectedDay: PropTypes.func.isRequired,
};
