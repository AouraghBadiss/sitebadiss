<template>
  <li>
    <router-link :to="path">
      <i :class="icon"></i>
    </router-link>
  </li>
</template>
<script>
export default {
    props: {
        path: String,
        icon: String,
    }
}
</script>