<template>
  <div id="app">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-2 d-flex align-items-center menu">
            <Menu />
          </div>
          <div class="col-md-10 home-content">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
