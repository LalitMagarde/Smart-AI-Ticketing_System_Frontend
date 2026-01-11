import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import TicketCard from './TicketCard';
import Button from '../common/Button';
import { asyncGetTickets } from '../../store/action/ticketAction';
import { useSelector } from 'react-redux';

const TicketsListPage = () => {

  const {user} = useSelector((store)=>store.userReducer);

  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setIsLoading(true);
        const data = await asyncGetTickets();
        console.log(data);
        setTickets(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch tickets.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-400">{error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
       {user.role==='user' && <h1 className="text-3xl font-bold text-white">My Support Tickets</h1>}
        {user.role!=='user' && <h1 className="text-3xl font-bold text-white">Assigned  Tickets</h1>}
        { user.role==='user' &&
          <Link to="/tickets/new">
          <Button>Create New Ticket</Button>
          </Link>

        }
        
      </div>
      { tickets.length === 0 ? (
        <div className="text-center py-10 bg-slate-800 rounded-lg">
          <p className="text-slate-400">You haven't created any tickets yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketsListPage;
