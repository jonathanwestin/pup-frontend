<template>
  <div class="container article-references">
    <h2>References</h2>
    <div class="references-list">
      <div
        v-for="reference in references"
        :key="reference.id"
        class="references-item"
      >
        {{ reference.content }}
      </div>

      <div
        v-for="extra in extras"
        :key="extra.label"
        class="references-item references-extra"
      >
        <div class="extra-label">
          {{ extra.label }}
        </div>
        <span v-for="(item, i) in extra.items || [extra.item]" :key="i">
          {{ item }}<br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["references", "extras"],
};
</script>

<style lang="scss" scoped>
.article-references {
  margin: 2rem auto 0;

  .references-list {
    @media screen and (min-width: 1000px) {
      columns: 2 30px;
    }

    .references-item {
      margin-bottom: 1rem;
      padding-left: 0.7em;
      text-indent: -0.7em;

      .extra-label {
        font-weight: bold;
      }
    }
  }
}
</style>
