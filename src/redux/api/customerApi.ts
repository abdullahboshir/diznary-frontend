import { tagTypes } from "../tag-taypes";
    import { baseApi } from "./base/baseApi";
    
    const customerApi = baseApi.injectEndpoints({
      endpoints: (build: any) => ({
        createCustomer: build.mutation({
          query: (data: any) => ({
            url: "/customer/createCustomer",
            method: "POST",
            contentType: "multipart/form-data",
            data,
          }),
          providesTags: [tagTypes.customer],
        }),
        getCustomers: build.query({
          query: () => ({
           url: "/customer/getCustomers",
            method: "GET",
          }),
          providesTags: [tagTypes.customer],
        }),
          updateCustomer: build.mutation({
            query: (data: any) => ({
              url: `/customer/${data?.id}`,
              method: "PATCH",
              data: data.body,
            }),
            invalidatesTags: [tagTypes.subCategory],
          }),
      }),
    });
    
    export const { useCreateCustomerMutation, useGetCustomersQuery, useUpdateCustomerMutation } = customerApi;
    