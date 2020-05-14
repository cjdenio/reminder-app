<template>
  <form @submit.prevent="handleSubmit" style="width:50%;min-width:300px;margin: 20px auto;">
    <div class="field">
      <label class="label">Event Name</label>
      <div class="control">
        <input type="text" class="input" v-model="form.name" />
      </div>
    </div>
    <div class="field">
      <label class="label">
        Notes
        <span class="tag">Optional</span>
      </label>
      <div class="control">
        <textarea class="textarea" v-model="form.notes" />
      </div>
      <span class="help">
        Jot down anything you want. We support
        <a
          href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
        >Markdown!</a>
      </span>
    </div>
    <div class="field">
      <label class="label">
        Event Link
        <span class="tag">Optional</span>
      </label>
      <div class="control">
        <input type="text" class="input" v-model="form.url" />
      </div>
      <span class="help">You'll be brought to this URL when you click the notification.</span>
    </div>
    <div class="field">
      <label class="label">Event Date</label>
      <div class="control">
        <datetime
          v-model="form.date"
          input-class="input"
          type="datetime"
          use12-hour
          class="remind-datepicker"
          auto
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Notify me when?</label>
      <div class="control">
        <slider v-model="form.notify" />
        <span class="help">
          <b>{{ form.notify }}</b> minutes before the event starts
        </span>
      </div>
    </div>

    <button
      class="button is-primary"
      :class="{'is-loading': submitLoading}"
      :disabled="!shouldSubmit"
      :title="!shouldSubmit ? 'Please provide an event name and date.' : null"
    >Save</button>
    <button class="button" type="button" @click="$router.back()">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ["name", "notes", "url", "date", "notify"],
  data() {
    return {
      submitLoading: false,
      form: {
        name: this.name || "",
        notes: this.notes || "",
        url: this.url || "",
        date: this.date || "",
        notify: this.notify || 10
      }
    };
  },
  methods: {
    handleSubmit(e) {
      this.$emit("submit", this.form);
    }
  },
  computed: {
    shouldSubmit() {
      return this.form.date != "" && this.form.name != "";
    }
  }
};
</script>