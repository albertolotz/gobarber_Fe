import React, {useState, useMemo, useEffect} from 'react';
import {format, subDays, addDays, setHours, setMinutes, setSeconds, isBefore, isEqual, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import api from '~/services/api';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {utcToZonedTime} from 'date-fns-tz';

import { Container, Time } from './styles';

const range  = [8,9,10,11,12,13,14,15,16,17,18,19,20];

export default function Dashboard() {

const [schedule, setSchedule] = useState([]);
const [date, setDate] = useState(new Date());

const dateFormated = useMemo(
  ()=> format(date, "d 'de' MMMM", {locale:pt}),
  [date]
);


useEffect(()=>{
  async function loadSchedule(){
    const response= await api.get('schedule', {params:{date}});

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;


    const data = range.map(hour=>{
      const checkDate  =  setSeconds(setMinutes(setHours(date, hour),0),0);
      const compareDate = utcToZonedTime(checkDate, timezone);

        const x = response.data.map(m=>
        console.tron.log(m.date + '***'+compareDate +' ==' + isEqual(parseISO(m.date), compareDate))
        );


      return{
        time: `${hour}:00h`,
        past: isBefore(compareDate, new Date()),
        appointment: response.data.find(a=>
            isEqual(parseISO(a.date), compareDate),
          )
      }
    });
    console.tron.log(response);
    console.tron.log(data);
    setSchedule(data);
  }
  loadSchedule();
},[date])

function handlePrevDay(){
  setDate(subDays(date,1));
}

function handleNextDay(){
  setDate(addDays(date,1));
}

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff"/>
        </button>
          <strong>{dateFormated}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff"/>
        </button>
      </header>

      <ul>
        {schedule.map(time=>(
          <Time key={time.time} past={time.past} available={!time.appointment}>
          <strong> {time.time}</strong>
          <span> {time.appointment ? time.appointment.user.nome: 'Em Aberto...'}</span>
        </Time>
        ))}
      </ul>
    </Container>
  );
}
