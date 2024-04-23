import axios from "axios";

export default {
  state: {
    user: null,
    token: null,
    access: null,
  },
  getters: {
    User: (state) => state.user,
    Token: (state) => state.token,
    Access: (state) => state.access,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      const response = await axios.post("login", credentials);

      return dispatch("attempt", response.data.token);

      //   return dispatch("attempt", response.data.token);
    },
    async register(credentials) {
      await axios.post("register", credentials);
    },
    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("jwt", token);
      }
      if (!state.token) {
        axios.defaults.headers.common["Authorization"] = null;

        return localStorage.removeItem("jwt");
      }

      try {
        let response = await axios.get("user");
        commit("SET_USER", response.data);
        state.access = state.user.access;
      } catch (e) {
        localStorage.removeItem("jwt");
        commit("SET_USER", null);
        commit("SET_TOKEN", null);
      }
    },
    async logout({ commit }) {
      localStorage.removeItem("jwt");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
  },
};
