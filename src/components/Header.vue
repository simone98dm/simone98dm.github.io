<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">
        <h3>simone98dm</h3>
      </div>
      <div class="navbar-navigation">
        <ul class="navlink">
          <li class="navlink-item">
            <a href="#">Home</a>
          </li>
          <li class="navlink-item">
            <a href="#">Projects</a>
          </li>
          <li class="navlink-item">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-brand {
  float: left;
  text-transform: uppercase;
  color: var(--primary-color);
}
.navlink-item {
  display: inline;
  margin: 15px;

  border: 1px solid var(--bg-color);
  padding: 10px 15px;
  border-radius: 5px;
  transition: 0.35s;
}
.navlink-item a {
  text-decoration: none;
  color: var(--font-color);
}
.navlink-item:hover {
  cursor: pointer;
  border: 1px solid var(--primary-color);
}
</style>
