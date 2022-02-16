<template>
  <div>
    <cliant-only>
      <div class="infinite-scroll">
        <ul class="infinite-scroll-list">
          <li class="infinite-scroll-list-item" v-for="i in this.count" :key="i">scroll {{ i }}</li>
        </ul>
        <infinite-loading ref="infiniteLoading" slot="spinner" spinner="bubbles" @infinite="infiniteHandler">
          <div slot="no-results"/>
          <span slot="no-more">No more data</span>
        </infinite-loading>
      </div>
    </cliant-only>
  </div>
</template>

<script>
export default {
  name: 'InfiniteScroll',
  data() {
    return {
      count: 20
    }
  },
  methods: {
  infiniteHandler() {
      setTimeout(() => {
        if (this.count < 100) {
          this.count += 20
          this.$refs.infiniteLoading.stateChanger.loaded()
        } else {
          this.$refs.infiniteLoading.stateChanger.complete()
        }
      }, 1000)
    }
  }
}
</script>

