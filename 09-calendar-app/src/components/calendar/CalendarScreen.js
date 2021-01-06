import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import moment from 'moment';

import { AddNewFab } from '../ui/AddNewFab';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import { Navbar } from '../ui/Navbar';
import { eventCleanActiveEvent, eventSetActive } from '../../actions/events';
import { messages } from '../../helpers/calendar-messages-es';
import { uiOpenModal } from '../../actions/ui';

moment.locale('es');

const localizer = momentLocalizer(moment) // or globalizeLocalizer


export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);

  const [lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'month')

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  }

  const onSelectEvent = (e) => {
    dispatch( eventSetActive( e ))
  }

  const onViewChange = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e);
  }

  const onSelectSlot = (e) =>{
    dispatch(eventCleanActiveEvent());
  }



  const eventStyleGetter = ( event, start, end, idSelected) => {

    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
        onSelectSlot={ onSelectSlot }
        selectable={ true }
        view={ lastView }
        components={{
            event: CalendarEvent
        }}
      />

      <CalendarModal />

      {
        (activeEvent)
        &&
        (<DeleteEventFab />)
      }

      <AddNewFab />
    </div>
  )
}
