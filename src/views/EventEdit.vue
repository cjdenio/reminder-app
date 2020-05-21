<template>
  <div class="page">
    <div style="width:50%;min-width:300px;margin: 20px auto;">
      <h1 class="title">Edit Event</h1>
    </div>

    <event-form
      @submit="handleSubmit"
      :name="event.name"
      :date="event.date"
      :notify="event.notify"
      :url="event.url"
      :notes="event.notes"
    />

    <div style="width:50%;min-width:300px;margin: 20px auto;">
      <button class="button is-danger" @click="deleteEvent">
          <span class="icon">
              <i class="fas fa-trash"></i>
          </span>
          <span>Delete Event</span>
      </button>
    </div>
  </div>
</template>

<script>
import EventForm from "./EventForm.vue";

export default {
  computed: {
    event() {
      return this.$store.state.events.find(i => i.id == this.$route.params.id);
    }
  },
  methods: {
    handleSubmit(e) {
        this.$store.commit('editEvent', {...e, id: this.$route.params.id})
        this.$router.back()
    },
    deleteEvent(){
        this.$buefy.dialog.confirm({
            title: 'Delete Event',
            message: 'Are you sure you want to delete this event?',
            type: 'is-danger',
            onConfirm: () => {
              this.$store.commit('deleteEvent', this.$route.params.id)
              this.$router.push('/')
            }
        })
    }
  },
  components: {
    "event-form": EventForm
  }
};
</script>