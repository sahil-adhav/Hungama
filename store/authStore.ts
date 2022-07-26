 import create from 'zustand';

 //for user to stay loggedin after refreshing the page
 import { persist } from 'zustand/middleware';
 import axios from 'axios';
 import { BASE_URL } from '../utils';

 const authStore = (set: any) => ({
    userProfile: null,
    allUsers: [],

    addUser: (user: any) => set({userProfile: user}),
    removeUser: () => set({userProfile: null}),

    fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`);

        //zustand function
        set({allUsers: response.data})
    }
 });

const useAuthStore = create(
    persist(authStore, {
        name: 'auth'
    })
)
//helps to call authStore as a hook
export default useAuthStore;
