<template>
  <aside id="header">
    <div class="left"></div>
    <div class="middle">
      <router-link to="/">
        Biennial International Conference for the Craft Sciences
      </router-link>
    </div>
    <div class="right"></div>
  </aside>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
#header {
  background-color: #333;
  color: #eaeae7;
  font-family: Signika, sans-serif;
  display: flex;
  padding: 10px 0;
}

a {
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}

.left,
.right {
  width: 10%;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: right;
}

.middle {
  flex: 2;
}

.right {
  flex: 1;
}
</style>
