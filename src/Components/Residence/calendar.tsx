import * as React from 'react';

interface ICalendarState {
    date: string;
    time: string;
    dateTime: string;
    datesRange: string;
}

class DateTimeForm extends React.Component<{}, ICalendarState> {
    render() {
        return (
            <div>
                <h3>Verfügbarkeit</h3>
                <div className="ui calendar" id="residenceCalendar">
                    <div className="ui input left icon">
                        <i className="calendar icon"></i>
                        <input type="text" placeholder="Date/Time" />
                    </div>
                </div>
            </div>
        )
    }
}

export default DateTimeForm;