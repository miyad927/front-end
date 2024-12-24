import axios from "axios";
import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservation", {
  state: () => ({}),

  actions: {
    async reservation(rsvData) {
      const response = await axios.post(
        "https://2deee6c7-ce64-440b-80cd-b66969cb5b6e.mock.pstmn.io/reservation",
        rsvData
      );
      return response.data;
    },
  },
});
