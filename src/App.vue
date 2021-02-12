<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: { Header },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nobile:wght@400;500;700&display=swap");

html {
  font-size: 20px;
}
body {
  color: black;
  background: white;
  font-family: "Cardo", Garamond, serif;
  font-weight: 300;
  line-height: 1.3;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nobile", sans-serif;
  font-weight: 600;
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
  color: #159cea;
  text-decoration: none;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
