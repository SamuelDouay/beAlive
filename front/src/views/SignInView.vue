<template>
  <div id="form_log">
    <h1>Créer votre compte</h1>
    <form method="post">
      <input type="text" name="name" placeholder="name" required />
      <input type="text" name="age" placeholder="age" required />
      <input type="email" name="email" id="" placeholder="email" required />
      <input type="password" name="password" placeholder="password" required />
      <div>
        <input type="submit" value="Sign in" />
        <router-link :to="{ name: 'signUp' }">
          <input type="button" value="Sign up" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 350px;
  width: 450px;
}

form > input {
  height: 35px;
  border-radius: 8px;
}
</style>
