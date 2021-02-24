<template>
  <div class="meta-item">
    <span class="label">{{ label }}</span
    >:
    <span class="value"><slot /></span>
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style>
.meta-item {
  font-family: Signika, sans-serif;
  font-weight: 400;
  line-height: 1.5;
}
.value {
  font-weight: 300;
}
</style>
