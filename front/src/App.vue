<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div id="header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">signIn</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div id="footer">Footer</div>
  </footer>
</template>
