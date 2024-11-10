import { apiSlice } from './apiSlice';
import { ORDERS_URL, PAYPAL_URL } from '../constants';


export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL || '/api/orders',
        method: 'POST',
        body: { ...order },
      }),
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
          url: `${ORDERS_URL}/${orderId}` || `/api/orders/${orderId}`,
      }),
      keepUnusedDataFor: 5
    }),
    payOrder: builder.mutation({
      query: ({orderId, details}) => ({
        url: `${ORDERS_URL}/${orderId}/pay` || `/api/orders/${orderId}/pay`,
        method: 'PUT',
        body: {...details},
      })
    }), 
    getPayPalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
    query: () => {
          const token = JSON.parse(localStorage.getItem('userInfo'))?.token; // Retrieve the token from localStorage

          return {
          url: "/api/orders/mine",
          headers: {
          Authorization: `Bearer ${token}`, // Add the token here
         },
        };
       },
      keepUnusedDataFor: 5,
     }),
     getOrders: builder.query({
       query: () => ({
         url: '/api/orders' || `${ORDERS_URL}`
       }),
       keepUnusedDataFor: 5
     }),
     deliverOrder: builder.mutation({
      query: (orderId) => ({
        url:  `/api/orders/${orderId}/deliver` || `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT',
      }),
     }) 
  }),
});
export const { useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useGetPayPalClientIdQuery, useGetMyOrdersQuery, useGetOrdersQuery, useDeliverOrderMutation} = orderApiSlice;