<template>
  <div class="page">
    <div style="width:50%;min-width:300px;margin: 20px auto;">
      <h1 class="title">Create Event</h1>
    </div>

    <event-form @submit="handleSubmit" />
  </div>
</template>

<script>
import EventForm from "./EventForm.vue";

export default {
  methods: {
    handleSubmit(e) {
      this.$store.commit("createEvent", e);
      this.$router.push("/");
    }
  },
  components: {
    "event-form": EventForm
  }
};
</script>