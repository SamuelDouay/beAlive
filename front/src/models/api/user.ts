import { Promise } from "es6-promise";
import { createStore } from "vuex";
import INSTANCE_API from ".";

const userStore = createStore({
  state: {
    status: "",
    user: {
      userId: -1,
      token: "",
    },
    userInfo: {
      name: "",
      age: 0,
      email: "",
    },
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      INSTANCE_API.defaults.headers.common["x-access-token"] = user.token;
      state.user = user;
    },
    userInfo: function (state, userInfo) {
      state.userInfo = userInfo;
    },
    logOut: function (state) {
      state.user = {
        userId: -1,
        token: "",
      };
    },
  },
  actions: {
    login: ({ commit }, userInfo) => {
      commit("setStatus", "loading");
      return new Promise((resolve, reject) => {
        INSTANCE_API.post("/login", userInfo)
          .then((response) => {
            commit("setStatus", "");
            commit("logUser", response.data);
            resolve(response);
          })
          .catch(function (error) {
            commit("setStatus", "error_login");
            reject(error);
          });
      });
    },
    createAccount: ({ commit }, userInfo) => {
      commit("setStatus", "loading");
      return new Promise((resolve, reject) => {
        INSTANCE_API.post("/register", userInfo)
          .then((response) => {
            commit("setStatus", "created");
            resolve(response);
          })
          .catch(function (error) {
            commit("setStatus", "error_created");
            reject(error);
          });
      });
    },
  },
});

export default userStore;
