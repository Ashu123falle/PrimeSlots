// components/DateRangePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;

    // Close the calendar only after selecting end date
    if (start && end) {
      setCalendarOpen(false);
    }

    setStartDate(start);
    setEndDate(end);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div className="relative text-[Playfair] ">
      <div className='mt-3 rounded-lg flex items-center border border-gray-300 h-[35px] p-2 text-[] focus:outline-none text-[14px] max-w-[290px]'>
      <input
        type="text"
        value={startDate && endDate ? `${startDate.toDateString()} - ${endDate.toDateString()}` : ''}
        onClick={toggleCalendar}
        readOnly
        className=" w-[270px] h-[25px] bg-[#FAFAFF] focus:outline-none"
        placeholder='10/01/2024 - 10/01/2024'
      />
    <button onClick={toggleCalendar}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6668 2.49996H13.3335C14.0668 2.49996 14.6668 3.09996 14.6668 3.83329V14.5C14.6668 15.2333 14.0668 15.8333 13.3335 15.8333H2.66683C1.9335 15.8333 1.3335 15.2333 1.3335 14.5V3.83329C1.3335 3.09996 1.9335 2.49996 2.66683 2.49996H3.3335V1.83329C3.3335 1.46663 3.6335 1.16663 4.00016 1.16663C4.36683 1.16663 4.66683 1.46663 4.66683 1.83329V2.49996H11.3335V1.83329C11.3335 1.46663 11.6335 1.16663 12.0002 1.16663C12.3668 1.16663 12.6668 1.46663 12.6668 1.83329V2.49996ZM3.3335 14.5H12.6668C13.0335 14.5 13.3335 14.2 13.3335 13.8333V5.83329H2.66683V13.8333C2.66683 14.2 2.96683 14.5 3.3335 14.5Z" fill="#494E50"/>
    </svg>
    </button>
    </div>
      {calendarOpen && (
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          popperPlacement="bottom"
        />
      )}
    </div>
  );
};

export default DateRangePicker;
