import { useState } from 'react';

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
 * @param {selectedDay} selected day state
 * @param {setSelectedDay} day selection function
 * @returns
 */
const DatePicker = ({ selectedDay, setSelectedDay }) => {
  // const [selectedDay, setSelectedDay] = useState();

  const footer = selectedDay ? (
    <p>Selected {format(selectedDay, 'PPP')}.</p>
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
        selected={selectedDay}
        onSelect={setSelectedDay}
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
