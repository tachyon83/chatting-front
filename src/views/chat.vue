<template>
  <div class="view-wrap">
    <modalWrap />
    <infoWrap />
    <router-view />
  </div>
</template>

<script>
import infoWrap from "@/components/infoWrap.vue";
import modalWrap from "@/components/modalWrap.vue";

export default {
  created() {
    //this does not work
    // this.$socket.on("roomListResponse", (packet) => {
    //   console.log(packet);
    // });
    this.sockets.subscribe("roomListResponse", (packet) => {
      console.log(packet);
    });
    this.$socket.emit("roomList");
  },
  name: "chat",
  components: {
    infoWrap,
    modalWrap,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.view-wrap {
  display: flex;
  width: 100%;
}
</style>
