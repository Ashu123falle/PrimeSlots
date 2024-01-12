import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const specialDates = [
    new Date(2024, 0, 5),
    new Date(2024, 0, 12),
    new Date(2024, 0, 19),
  ];

  const confirmedDates = [
    new Date(2024, 0, 23),
    new Date(2024, 0, 24),
    new Date(2024, 0, 25),
    new Date(2024, 0, 26),
  ];

  const markAsBooked = () => {
    // Implement your logic to mark the selected date as booked
    console.log('Mark as Booked clicked for date:', selectedDate);
  };

  const tileContent = ({ date }) => {
    const isSpecialDate = specialDates.some(d => d.toDateString() === date.toDateString());
    const isSelectedDate = date.getTime() === selectedDate.getTime();

    return (
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        {isSpecialDate && (
          <div
            style={{
              position: 'absolute',
              top: -2,
              right: 11,
              backgroundColor: 'orange',
              borderRadius: '50%',
              height: '8px',
              width: '8px',
            }}
          />
        )}
      </div>
    );
  };

  const tileClassName = ({ date }) => {
    const isConfirmedDate = confirmedDates.some(d => d.toDateString() === date.toDateString());
    const isStartRange = date.getTime() === confirmedDates[0].getTime();
    const isEndRange = date.getTime() === confirmedDates[confirmedDates.length - 1].getTime();

    if (isConfirmedDate) {
        if (isStartRange || isEndRange) {
          return 'confirmed';
        } else if (isStartRange) {
          return 'confirmed-start';
        } else if (isEndRange) {
          return 'confirmed-end';
        } else {
          return 'confirmed';
        }
      }
    

    return '';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <style>
        {`
          /* Set text color to grey for week names */
          .react-calendar__month-view__weekdays__weekday abbr {
            color: grey;
            text-decoration: none; /* Remove text decoration */
            font-family: 'figtree', sans-serif; /* Set font to 'figtree' */
          }

          /* Highlight today's date and selected date with a blue rounded style */
          .react-calendar__tile--now,
          .react-calendar__tile--active,
          .react-calendar__tile--active .react-calendar__tile__content,
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--now,
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--active {
            background-color: rgba(67, 57, 242, 1) !important; /* Pink hex code for selected and today's date */
            color: white !important;
            border-radius: 50% !important;
          }
          
          /* Add circular overlay for today's date */
          .react-calendar__tile--now::before {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            background-color: rgba(67, 57, 242, 0.7); /* Pink hex code for today's date */
            border-radius: 50%;
          }
          
          /* Add circular overlay for selected date */
          .react-calendar__tile--active::before,
          .react-calendar__tile--active .react-calendar__tile__content::before {
            content: '';
            display: block;
            width: 6px; /* Adjust the width as needed */
            height: 6px; /* Adjust the height as needed */
            background-color: rgba(67, 57, 242, 1); /* Pink hex code for selected date */
            border-radius: 50%;
          }
          

          /* Set text color to grey for days outside the current month */
          .react-calendar__tile--neighboringMonth {
            color: #d3d3d3 !important;
          }

          /* Add a single light grey line to separate week names and dates */
          .react-calendar__month-view__weekdays {
            border-bottom: 1px solid #d3d3d3; /* Light grey border */
          }

          /* Remove dotted lines below each week name */
          .react-calendar__month-view__weekdays__weekday:not(:last-child) {
            border-bottom: none;
          }

          /* Set text color to black for current month's weekends */
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--now,
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--active {
            color: black !important;
          }

          /* Set text color to grey for weekends outside the current month */
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--neighboringMonth {
            color: #d3d3d3 !important;
          }

          /* Highlight today's date and selected date with a blue rounded style */
          .react-calendar__tile--now,
          .react-calendar__tile--active,
          .react-calendar__tile--active .react-calendar__tile__content,
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--now,
          .react-calendar__month-view__days__day--weekend.react-calendar__tile--active {
            background-color: rgba(67, 57, 242, 1) !important; /* Pink hex code for selected and today's date */
            color: white !important;
            border-radius: 50% !important;
          }
          
          /* Styles for confirmed and selected dates */
          .confirmed {
            background-color: rgba(238, 218, 252, 1);
            width:120px ; /* Light pink hex code */
          }

          .confirmed-start {
            background-color: rgba(231, 128, 227, 1); /* Dark pink hex code for start of the range */
            border-radius: 50% 50% 50% 50% ;
          }

          .confirmed-end {
            background-color: rgba(231, 128, 227, 1) ; /* Dark pink hex code for end of the range */
            border-radius: 50% 50% 50% 50% ;
          }

          .confirmed-start-end {
            /* Styles for both start and end of the range */
            /* Customize this based on your requirements */
            background-color: rgba(231, 128, 227, 1); /* Dark pink hex code for both start and end of the range */
            border-radius: 50% 50% 50% 50%;
          }
          .b {
            background-color: rgba(105, 121, 248, 1);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
      <Calendar onChange={setSelectedDate} value={selectedDate} tileContent={tileContent} tileClassName={tileClassName} />
      <button onClick={markAsBooked} className=' mt-9 b w-[250px] mb-9'>Mark as Booked</button>
    </div>
  );
};

export default CalendarPage;
``
