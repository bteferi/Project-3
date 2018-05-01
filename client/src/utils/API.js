import axios from "axios";

export default {
  // Gets all journals
  getJournals: function() {
    return axios.get("/api/jornals");
  },
  // Gets the journal with the given id
  getJournal: function(id) {
    return axios.get("/api/jornals/" + id);
  },
  // Deletes the journal with the given id
  deleteJournal: function(id) {
    return axios.delete("/api/jornals/" + id);
  },
  // Saves a journal to the database
  saveJournal: function(journalData) {
    return axios.post("/api/jornals", journalData);
  }
};
