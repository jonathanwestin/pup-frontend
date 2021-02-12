<template>
  <div class="dropbutton" @blur="toggle(false)">
    <button @click="toggle">{{ label }}</button>
    <div v-show="active" class="dropbutton-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropbutton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle(activate = null) {
      this.active = activate !== null ? !this.active : activate;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropbutton {
  position: relative;
  display: inline-block;
}
.dropbutton-menu {
  position: absolute;
  right: 0;
  border: thin solid #333;
  border-radius: 2px;
}
</style>
