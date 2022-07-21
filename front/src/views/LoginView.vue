<template>
  <div id="form_log">
    <h1>Créer votre compte</h1>
    <div id="form">
      <input type="text" name="name" placeholder="name" required />
      <input type="text" name="age" placeholder="age" required />
      <input type="email" name="email" id="" placeholder="email" required />
      <input type="password" name="password" placeholder="password" required />
      <div>
        <span v-if="status == 'loading'">Création en cours...</span>
        <input @click="createAccount()" type="button" value="Sign in" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "login_page",
  data: function () {
    return {
      name: "",
      age: "",
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      const self = this;
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(
          function () {
            self.$router.push("/profile");
          },
          function (error) {
            console.log(error);
          }
        );
    },
    createAccount: function () {
      const self = this;
      this.$store
        .dispatch("createAccount", {
          name: this.name,
          age: this.age,
          email: this.email,
          password: this.password,
        })
        .then(
          function () {
            self.login();
          },
          function (error) {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 350px;
  width: 450px;
}

#form > input {
  height: 35px;
  border-radius: 8px;
}
</style>
