<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="panel">
    <div class="container">
      <div class="head">
        <h4>{{title}}<small class="small">{{ subTitle }}</small></h4>
      </div>
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  background-color: #fff;

  .container {
    margin: 0;
    padding:0 10rem;
    width: 100%;

    .head {
      padding: 2.5rem 0;
      display: flex;
      align-items: flex-end;

      h4 {
        // flex: 1;
        font-size: 2rem;
        font-weight: normal;
        margin-left: .375rem;
        height: 2.1875rem;
        line-height: 2.1875rem;

        small {
          font-size: 1rem;
          color: #999;
          margin-left: 1.25rem;
        }
      }
    }
  }
}
</style>