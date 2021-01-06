import moment from 'moment';

import { types } from '../types/types';


const initialState = {
  events: [{
    title: 'cumple del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'comprar regalo',
    user: {
      id: '123',
      name: 'Raul'
    }

  }],
  activeEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload
      }

    case types.eventAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.eventCleanActiveEvent:
      return {
        ...state,
        activeEvent: null
      }

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map(
          event => ( event.id === action.payload.id ) ? action.payload : event
        )
      }

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter(
          event => ( event.id !== state.activeEvent.id )
        ),
        activeEvent: null
      }


    default:
      return state;

  }

}
