import { baseApi } from "./base/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (build: any) => ({
        login: build.mutation({
            query: (data: any) => ({
                url: '/auth/login',
                method: 'POST',
                contentType: 'multipart/form-data',
                data
            })
        })
    }),
    // invalidatesTags: [tagTypes.auth]
});


export const {
    useLoginMutation
} = authApi;