<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nobile:wght@400;500;700&display=swap");

html {
  font-size: 20px;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
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
  font-family: "Signika", sans-serif;
}

.title {
  font-family: "Nobile", sans-serif;
  font-weight: 600;
  line-height: 1.3;
}

h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.75rem;
}

a,
a:hover {
  color: #159cea;
  text-decoration: none;
}
a.blind,
a.blind:hover {
  color: inherit;
  text-decoration: inherit;
}
.popout {
  transition: transform 150ms ease;
  &:hover {
    transform: scale(1.05);
  }
}

.container {
  width: 95%;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 80%;
  }
}

.dark {
  background-color: #333;
  color: #f4f4f4;

  a {
    color: white;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
}

pre,
code {
  font-family: "Signika", sans-serif;
  font-size: 0.9em;
}
</style>
