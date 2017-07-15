import React, { Component } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import './Calendar.css';

class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: [],
      availableDays: [],
      monthWeeks: {},
    };

    this.buildCalendar = this.buildCalendar.bind(this);
    this.setDayAvailability = this.setDayAvailability.bind(this);
    this.checkDayAvailability = this.checkDayAvailability.bind(this);
  }

  componentWillMount(){
    const currentYear = moment().year();
    const currentMonth = moment().month();

    this.buildCalendar(currentYear, currentMonth);
  }

  buildCalendar(year, month){
    const daysInMonth = moment([year, month]).daysInMonth();

    let days = [];
    let monthWeeks = {};

    for (let i = 1; i <= daysInMonth; i += 1){

      let currentDay = {
        dateISO: moment([year, month, i]).format(),
        dayOfWeekString: moment([year, month, i]).format('dddd'),
        dayOfMonthNumber: moment([year, month, i]).format('DD'),
        dayOfWeekNumber: moment([year, month, i]).isoWeekday(),
        weekNumber: moment([year, month, i]).isoWeek(),
        isAvailable: false,
      }

      if (!(moment([year, month, i]).isoWeek() in monthWeeks)) {
        monthWeeks[moment([year, month, i]).isoWeek()] = [];
      }
      monthWeeks[moment([year, month, i]).isoWeek()].push(currentDay);

      days.push(currentDay);
    }

    this.setState({
      days: days,
      monthWeeks: monthWeeks,
    });
  }

  checkDayAvailability(dayOfMonthNumber){
    const { availableDays } = this.state;

    return availableDays.includes(dayOfMonthNumber);
  }

  setDayAvailability(dayOfMonthNumber, dateISO){
    const { availableDays } = this.state;
    const dayIsAvailable = this.checkDayAvailability(dayOfMonthNumber);

    if (dayIsAvailable) {
      let availableDayIndex = availableDays.indexOf(dayOfMonthNumber);
      availableDays.splice(availableDayIndex, 1);
    } else {
      availableDays.push(dayOfMonthNumber);
    }
    this.setState({
      availableDays: availableDays
    });
  }

  render(){
    const { days, monthWeeks } = this.state;

    let daysElements = days.map(day => {
      const isAvailableDay = this.checkDayAvailability(day.dayOfMonthNumber);
      let classnames = classNames({
        'day': true,
        'day--available': isAvailableDay,
        'day--last-of-week': day.dayOfWeekNumber === 7,
        'day--first-of-week': day.dayOfWeekNumber === 1,
      });
      return (
        <li
          className={classnames}
          key={day.dayOfMonthNumber}
          onClick={() =>
            this.setDayAvailability(day.dayOfMonthNumber, day.dateISO)
          }
          >
          <span className="day__number">{day.dayOfMonthNumber}</span>
          <br />
          <span className="day__string">{day.dayOfWeekString}</span>
        </li>
        )
    })

    return (
      <div className="calendar__container">
        <h2 className="calendar__header">{moment().format('MMMM')}</h2>
        <ul className="calendar">
          {daysElements}
        </ul>
      </div>
    )
  }
}

export default Calendar;
