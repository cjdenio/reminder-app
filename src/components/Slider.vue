<template>
    <input class="slider is-fullwidth" step="5" min="0" max="60" :value="value" @input="updateValue($event.target.value)" type="range">
</template>

<script>
export default {
    props: ["value"],
    methods: {
        updateValue(value){
            this.$emit("input", value)
        }
    }
}
</script>