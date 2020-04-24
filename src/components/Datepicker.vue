<template>
  <input type="date" placeholder="Pick a date and time" />
</template>
<script>
import bulmaCalendar from "bulma-calendar";
import { DateTime } from "luxon";

export default {
  props: ["value"],
  mounted() {
    var calendars = bulmaCalendar.attach(this.$el, {
      startDate: this.value.toFormat("yyyy/LL/dd"),
      type: "datetime",
      displayMode: "dialog",
      validateLabel: "Save",
      showClearButton: false
    });

    calendars[0].on("select", () => {
      console.log(DateTime.fromFormat(calendars[0].startTime, "EEE MMM dd yyyy HH:mm:ss").toString())
    });
  },
  beforeDestroy() {}
};
</script>