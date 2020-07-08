<template>
    <select @input="$emit('input', $event.target.value)">
        <option
            v-for="{ key, label } in options"
            :key="key"
            :value="key"
            :selected="key === value"
        >
            {{ label }}
        </option>
    </select>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name: 'SelectInput',
    props: {
        value: VueTypes.string.optional,
        options: VueTypes.arrayOf(VueTypes.shape({
            key: VueTypes.string,
            label: VueTypes.string,
        })),
    },
}
</script>
