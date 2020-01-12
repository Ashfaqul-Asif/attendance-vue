<template>
  <div class="about">
  <!--   <Navbar/> -->
    <appbar/>
    <router-view></router-view>
    
  </div>
</template>

<script>
import appbar from '@/components/appbar'
/* import Navbar from '@/components/Navbar' */
export default {
  components:{
    appbar,
  }
}
</script>
