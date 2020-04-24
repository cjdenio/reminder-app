<template>
  <div class="remind-footer">
    <span :data-tooltip="syncing ? 'Syncing...' : 'Sync'" class="has-tooltip-left" @click="syncing = true">
      <i class="fas fa-sync fa-fw" :class="{'fa-spin': syncing}"></i>
    </span>
    <span data-tooltip="Settings" class="has-tooltip-left">
      <router-link to="/settings">
        <i class="fas fa-cog fa-fw"></i>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            syncing: false
        }
    }
}
</script>

<style scoped>
.remind-footer {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgb(245, 245, 245);
  /*box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.2);*/
  border-top-left-radius: 5px;

  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 40px;
}
</style>