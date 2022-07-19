<template>
  <div id="form_log">
    <h1>Connectez vous</h1>
    <form method="post">
      <input type="email" name="email" id="" placeholder="email" required />
      <input type="password" name="password" placeholder="password" required />
      <div>
        <input type="submit" value="Sign up" />
        <router-link :to="{ name: 'signIn' }">
          <input type="button" value="Sign in" />
        </router-link>
      </div>
    </form>
  </div>
</template>