<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-size: 20px;
}
body {
  color: black;
  background: rgb(234, 234, 231);
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-weight: 300;
  line-height: 1.3;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 100;
  line-height: 1;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1.75rem;
}
a,
a:hover {
  color: #368fa5;
  text-decoration: none;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
