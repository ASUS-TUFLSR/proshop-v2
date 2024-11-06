import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        profile: builder.mutation({
            query: (data) => {
            const token = JSON.parse(localStorage.getItem('userInfo'))?.token; // Retrieve the token from userInfo in localStorage

        return {
            url: `${USERS_URL}/profile`,
            method: 'PUT',
            body: data,
            headers: {
                Authorization: `Bearer ${token}`, // Add the token here
            },
        };
    },
        }),
    }) 
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useProfileMutation} = usersApiSlice;