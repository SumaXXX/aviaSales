import classes from './TicketList.module.scss'
import Ticket from '../Ticket/Ticket'
import ShowMoreButton from './../ShowMoreButton/ShowMoreButton'
import { useSelector } from 'react-redux'

function TicketList() {
  const { status, error } = useSelector(state => state.aviaApp)
  const {visibleTickets, tickets} = useSelector(state => state.aviaApp)
  if (status === 'loading') return <h1>LOADING...</h1>
  if (status === 'rejected') return <h1>There is an error: {error}</h1>
  if (!tickets.length) return <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>
  if (status === 'resolved')
    return (
      <>
        <div className={classes['ticket-list']}>
          {visibleTickets.map(ticket => (
            <Ticket key={ticket.price} data={ticket} />
          ))}
          <ShowMoreButton />
        </div>
      </>
    )
}

export default TicketList
