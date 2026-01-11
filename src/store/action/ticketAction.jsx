
import axios from '../../../api/config'


export const asyncCreateticket = async (info) =>{
    try{

        const data = await axios.post('/api/tickets/',info);

        console.log(data.message);

    }
    catch(error){
        console.log(error);
    }
}

export const asyncGetTicket = async (id)=>{
    try{
        const {data} = await axios.get(`/api/tickets/${id}`);

        console.log(data.ticket);
        return data.ticket;
    }
    catch(error){
        console.log(error);
    }
}


export const asyncUpdateTicket =  async (newData)=>{
   try{
       const {id,info} = newData;

      const {data} = axios.put(`/api/tickets/${id}`,info);

      console.log(data);
      return data;

   }
   catch(error){
    console.log(error);
   }
}


export const asyncUpdateTicketStatus = async (newData) =>{
    try{
        const {id,info} = newData;
        const {data} = axios.put(`/api/tickets/${id}/status`,info);

        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}


export const asyncGetTickets = async () => {
    try{
          const {data} = await axios.get('/api/tickets/');

          console.log(data.tickets);
          return data.tickets;
    }
    catch(error){
        console.log(error);
    }
}