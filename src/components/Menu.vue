<template>
  <ul>
    <MenuItem v-for="(item, index) in items" 
      :key="index"  
      :path="item.path"
      :icon="item.icon" 
      />
  </ul>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  components: { MenuItem },
  data: function () {
    return {
      items: [
        {path: "/", icon: "far fa-address-card"},
        {path: "/competences", icon: "fas fa-code"},
        {path: "/", icon: "far fa-folder-open"},
        {path: "/", icon: "fas fa-graduation-cap"},
      ]
    }
  }
}
</script>