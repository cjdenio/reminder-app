<template>
  <div class="page">
    <div style="margin-top:20px">
      <back-button />
    </div>
    <div style="width:50%;min-width:300px;margin: 0 auto;padding:20px 0;">
      <h1 class="title page-header">
        <span>{{ event.name }}</span>

        <span class="icon has-tooltip-bottom" style="margin-left: auto" data-tooltip="Edit" @click="edit">
          <i class="fas fa-edit fa-fw edit-icon"></i>
        </span>
      </h1>

      <div class="remind-section">
        <div class="remind-section-header">
          <span class="tag is-primary is-light">Date</span>
        </div>
        <div class="remind-section-content">{{ parsedDate }}</div>
      </div>

      <div class="remind-section" v-if="event.notes && event.notes != ''">
        <div class="remind-section-header">
          <span class="tag is-primary is-light">Notes</span>
        </div>
        <div class="remind-section-content content" v-html="renderedNotes" />
      </div>

      <div class="remind-section" v-if="event.url && event.url != ''">
        <div class="remind-section-header">
          <span class="tag is-primary is-light">Event Link</span>
        </div>
        <div class="remind-section-content">
          <a :href="event.url">{{event.url}}</a>
        </div>
      </div>

      <div class="remind-section">
        <div class="remind-section-header">
          <span class="tag is-primary is-light">Other Info</span>
        </div>
        <div class="remind-section-content">
          I'll notify you <b>{{ event.notify }}</b> minutes before this event starts.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import { DateTime } from "luxon";

export default {
  methods: {
    edit(){
      this.$router.push(`/event/${this.event.id}/edit`)
    }
  },
  computed: {
    event() {
      return this.$store.state.events.find(i => i.id == this.$route.params.id);
    },
    renderedNotes() {
      return marked(this.event.notes);
    },
    parsedDate() {
      return DateTime.fromISO(this.event.date).toFormat("LLL d, yyyy, h:mm a");
    }
  }
};
</script>