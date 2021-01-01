<template>
  <div class="app-wrap">
    <navWrap />
    <router-view> </router-view>
  </div>
</template>

<script>
import navWrap from "@/components/navWrap.vue";
// this.sockets.subscribe("roomList", (packet) => {
//   console.log(packet);
// });

export default {
  name: "main",
  components: {
    navWrap,
  },
};
</script>
