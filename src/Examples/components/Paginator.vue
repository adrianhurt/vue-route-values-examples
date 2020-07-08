<template>
    <div class="Paginator">
        <a @click="$emit('input', value - 1)">&larr;</a>
        <div>{{ value }}</div>
        <a @click="$emit('input', value + 1)">&rarr;</a>
    </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name: 'Paginator',
    props: {
        value: VueTypes.number.isRequired,
    },
}
</script>

<style lang="scss" scoped>
.Paginator {
	display: flex;
	justify-content: center;
	& > * {
		display: block;
		margin: 0 15px;
		font-weight: bold;
		font-size: 20px;
	}
	a {
		color: #4fc08d;
		cursor: pointer;
	}
}
</style>
