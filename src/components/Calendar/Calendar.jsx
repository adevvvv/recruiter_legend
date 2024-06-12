import React, { useState } from 'react';
import styles from './Calendar.module.scss';
import { addDays, format, getDay } from 'date-fns';
import { ru } from 'date-fns/locale';

const Calendar = () => {
  const currentDate = new Date();

  const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  let dateRender = [];
  for (let i = 1; i < 31; i++) {
    dateRender.push(addDays(currentDate, i));
  }

  const onSelectDate = (i) => {
    setSelectedDate(i);
  };

  const onSelectedTime = (i) => {
    setSelectedTime(i);
  };

  return (
    <div className={styles['container']}>
      <h2>Выберите дату и время</h2>
      <div className={styles['scroll']}>
        {dateRender.map((date, i) => (
          <div
            className={`${styles['windowDate']} ${selectedDate === i ? styles['selectedDate'] : null}`}
            key={i}
            onClick={() => onSelectDate(i)}
          >
            {weekdays[getDay(date)]}
            <br />
            {format(date, 'd \n MMMM', { locale: ru })}
          </div>
        ))}
      </div>

      <div className={styles['blockTime']}>
        {[
          '12:30 - 12:45',
          '14:00 - 14:15',
          '14:30 - 14:45',
          '16:30 - 16:45',
        ].map((time, i) => (
          <div
            className={`${styles['time']} ${selectedTime === i ? styles['selectedTime'] : null}`}
            key={i}
            onClick={() => onSelectedTime(i)}
          >
            {time}
          </div>
        ))}
      </div>

      <button>Записаться</button>
    </div>
  );
};

export default Calendar;
