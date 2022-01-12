import React, {useState} from 'react';
import StyledWrapper from './StyledWrapper';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
 
const DateSelector = ({getNeoData, isLoading}) => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const getBeforeRange = () => {
    if (toDate) {
      let d = new Date(toDate)
      d.setDate(d.getDate() - 7);
      return d
    }
  }

  const getAfterRange = () => {
    if (fromDate) {
      let d = new Date(fromDate)
      d.setDate(d.getDate() + 7);
      return d
    }
  }

  const handleBtnClick = () => {
    const FORMAT = "yyyy-MM-DD";

    function formatDate(date) {
      return moment(date).format(FORMAT);
    }

    getNeoData(formatDate(fromDate), formatDate(toDate));
  };

  const isDateEntered = fromDate && toDate;

  return (
    <StyledWrapper>
      <div>
        <h1 className="mt-8">Select a date range</h1>
        <div className="flex datepicker justify-center mt-6">
          <div className="flex flex-col from-date"> 
            <span className="font-semibold">From Date</span>
            <div className="date-input" >
              <DayPickerInput
                className="text-center"
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder="DD/MM/YYYY"
                inputProps={{readOnly: true}} 
                dayPickerProps={{
                  modifiers: {
                    disabled: [{
                      before: getBeforeRange(),
                      after: toDate ? new Date(toDate) : null
                    }]
                  }
                }}
                onDayChange={day =>setFromDate(day)}
              />
            </div>
          </div>

          <div className="flex flex-col to-date ml-4"> 
            <span className="font-semibold">To Date</span>
            <div className="date-input" >
              <DayPickerInput
                className="text-center"
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder="DD/MM/YYYY"
                inputProps={{readOnly: true}}
                dayPickerProps={{
                  modifiers: {
                    disabled: [{
                      before: fromDate ? new Date(fromDate) : null,
                      after: getAfterRange()
                    }]
                  }
                }}
                onDayChange={day =>setToDate(day)}
              />
            </div>
          </div> 
        </div>
        <div className="mt-8 flex justify-center items-center">
          <button
            className="flex search bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={handleBtnClick}
            disabled={isLoading || !isDateEntered}
          >
            <span className="mr-2">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default DateSelector;