import axios from "axios";
import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservation", {
  state: () => ({}),

  actions: {
    async reservation(rsvData) {
      const response = await axios.post(
        "https://6b780f16-632b-4655-9324-f7b16531d032.mock.pstmn.io/reservation",
        rsvData
      );
      return response.data;
    },
  },
});
