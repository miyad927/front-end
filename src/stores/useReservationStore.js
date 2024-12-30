import axios from "axios";
import { defineStore } from "pinia";

export const useReservationStore = defineStore("reservation", {
  state: () => ({}),

  actions: {
    async reservation(rsvData) {
      const response = await axios.post(
        "https://run.mocky.io/v3/1d5b480c-87a9-4ff1-b001-a8a2b951eab0",
        rsvData
      );
      return response.data;
    },
  },
});
