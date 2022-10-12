import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Toolbar from './Toolbar';

const schedules = [
  {title: 'event 1', start: new Date('2022-10-01'), end: new Date('2022-10-01'),}, 
  {title: 'event 2', start: new Date('2022-10-02'), end: new Date('2022-10-02'),},
  {title: 'event 3', start: new Date('2022-10-03'), end: new Date('2022-10-03'),},
  {title: 'event 4', start: new Date('2022-10-04'), end: new Date('2022-10-04'),},
  {title: 'event 5', start: new Date('2022-10-05'), end: new Date('2022-10-05'),},
]

export default function OwnerSchedule() {
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);
    return (
      <div className="bg-light p-3 border">
        <h2 className="text-center my-3">일정 관리</h2>
        <Calendar
            localizer={localizer}
            events={schedules}
            style={{ height: 800 }}
            components={{
              toolbar: Toolbar,
            }}
        />
      </div>
    )
}