<template>
  <div style="text-align:center;padding-bottom:20px;" class="page">
    <div class="pageloader" :class="{'is-active': $store.state.appLoading}">
      <span class="title">Loading</span>
    </div>
    <div class="create-event" @click="$router.push('/new')">
      <span>Create an event</span>
      <button class="button is-static create-event-icon">
        <i class="fas fa-plus" />
      </button>
    </div>
    <ul class="block-list is-left" style="width:50%;min-width:300px;margin: 0 auto">
      <li class="block-list-group">
        <span class="tag is-primary is-light">Today</span>
      </li>
      <li
        v-for="(event, index) in $store.state.events"
        :key="index"
        @click="$router.push({name: 'event', params: {id: event.id}})"
        class="event-item"
      >
        <span
          style="overflow:hidden;margin-right:10px;text-overflow:ellipsis;white-space:nowrap"
        >{{ event.name }}</span>
        <span class="tag is-primary" style="margin-left:auto">{{ renderTime(event.date) }}</span>
      </li>
    </ul>
    <remind-footer />
  </div>
</template>

<script>
var ipcRenderer = window.require("electron").ipcRenderer;

import marked from "marked";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      loading: true,
      events: []
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
  methods: {
    renderMrkdwn(text) {
      return marked(text);
    },
    renderTime(isoString) {
      return DateTime.fromISO(isoString).toFormat("h:mm a")
    }
  }
};
</script>

<style scoped>
.create-event {
  border: 1px solid rgb(200, 200, 200);
  background-color: rgb(245, 245, 245);
  display: inline-block;
  padding: 10px;
  width: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  margin: 20px auto;
  cursor: pointer;

  transition: all 150ms;

  position: sticky;
  top: 0;
  z-index: 10;
}
.create-event:hover {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  /*transform: translateY(-3px);*/
}
.create-event-icon {
  margin-left: auto;
  font-size: 20px;
  transition: all 150ms;
  padding: 10px 15px;
  border-radius: 5px;
}

.block-list-group {
  background-color: unset;
  padding-left: 0;
  padding-right: 0;
  display: flex;

  align-items: center;

  position: sticky;
  top: 70px;
  background-color: white;
}
.block-list-group span.tag {
  position: relative;
}
.block-list-group::after {
  content: "";
  background-color: rgb(200, 200, 200);
  height: 1px;
  width: 150px;
  flex-grow: 1;
  margin-left: 10px;
}
.block-list > li:not(.block-list-group) {
  cursor: pointer;
  transition: all 150ms;
}
.block-list > li:not(.block-list-group):hover {
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
}

.event-item {
  display: flex;
}
</style>