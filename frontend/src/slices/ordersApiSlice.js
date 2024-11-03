import { apiSlice } from './apiSlice';
import { ORDERS_URL } from '../constants';

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
    })
  }),
});
export const { useCreateOrderMutation, useGetOrderDetailsQuery } = orderApiSlice;