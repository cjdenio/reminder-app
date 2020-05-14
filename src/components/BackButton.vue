<template>
  <button class="back-button button is-primary" @click="toIndex ? $router.push('/') : $router.back()">
    <span class="icon">
      <i class="fas fa-angle-left"></i>
    </span>
    <span>Back</span>
  </button>
</template>

<script>
export default {
  props: ["toIndex"]
}
</script>