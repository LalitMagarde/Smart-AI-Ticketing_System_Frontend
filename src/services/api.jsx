

// const API_BASE_URL = import.meta.env.VITE_API_URL;

// const getAuthToken = () => localStorage.getItem('authToken');

// const fetchWithAuth = async (url, options = {}) => {
//   const token = getAuthToken();
//   const headers = {
//     'Content-Type': 'application/json',
//     ...options.headers,
//   };
//   if (token) headers['Authorization'] = `Bearer ${token}`;

//   const response = await fetch(`${API_BASE_URL}${url}`, { ...options, headers });

//   if (!response.ok) {
//     if (response.status === 401) {
//       localStorage.removeItem('authToken');
//       window.location.hash = '/login';
//     }
//     const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
//     throw new Error(errorData.message || 'API request failed');
//   }

//   return response;
// };

// export const api = {
//   login: async (credentials) => {
//     const response = await fetchWithAuth('/auth/login', {
//       method: 'POST',
//       body: JSON.stringify(credentials),
//     });
//     return response.json();
//   },

//   signup: async (userData) => {
//     const response = await fetchWithAuth('/auth/signup', {
//       method: 'POST',
//       body: JSON.stringify(userData),
//     });
//     return response.json();
//   },

//   getProfile: async () => {
//     const response = await fetchWithAuth('/auth/profile');
//     return response.json();
//   },

//   getTickets: async () => {
//     const response = await fetchWithAuth('/tickets');
//     return response.json();
//   },

//   getTicketById: async (id) => {
//     const response = await fetchWithAuth(`/tickets/${id}`);
//     const data = await response.json();
//     return data.ticket;
//   },

//   createTicket: async (data) => {
//     const response = await fetchWithAuth('/tickets', {
//       method: 'POST',
//       body: JSON.stringify(data),
//     });
//     const resData = await response.json();
//     return resData.ticket;
//   },

//   getAllUsers: async () => {
//     const response = await fetchWithAuth('/auth/users');
//     return response.json();
//   },

//   updateUser: async (data) => {
//     const response = await fetchWithAuth('/auth/update-user', {
//       method: 'POST',
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   },

//   updateTicket: async (id, data) => {
//     const response = await fetchWithAuth(`/tickets/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(data),
//     });
//     const resData = await response.json();
//     return resData.ticket;
//   },

//   updateTicketStatus: async (id, data) => {
//     const response = await fetchWithAuth(`/tickets/${id}/status`, {
//       method: 'PUT',
//       body: JSON.stringify(data),
//     });
//     const resData = await response.json();
//     return resData.ticket;
//   },
// };




import React from 'react'

const api = () => {
  return (
    <div>api</div>
  )
}

export default api