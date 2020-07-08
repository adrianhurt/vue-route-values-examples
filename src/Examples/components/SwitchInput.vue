<template>
    <div class="Switch">
        <label>{{ label }}</label>
        <div
            class="SwitchInput"
            :class="[size, { active: value }]"
            @click="$emit('input', !value)"
        />
    </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name: 'SwitchInput',
    props: {
        label: VueTypes.string.isRequired,
        value: VueTypes.bool.def(false),
        size: VueTypes.string.optional,
    },
}
</script>

<style lang="scss" scoped>
$thumbSize: 26px;
$thumbSizeSmall: 13px;
$padding: 4px;
$paddingSmall: 2px;
$animDuration: 0.4s;

.Switch {
	display: flex;
	justify-content: center;
	align-items: center;
	label {
		font-style: italic;
		margin-right: 15px;
	}
}
.SwitchInput {
	position: relative;
	width: 2 * ($thumbSize + $padding);
	height: $thumbSize + 2 * $padding;
	border-radius: $thumbSize;
	background-color: #2c3e50;
	transition: background-color $animDuration;
	cursor: pointer;

	&:before {
		content: '';
		position: absolute;
		top: $padding;
		left: $padding;
		transition: left $animDuration;
		width: $thumbSize;
		height: $thumbSize;
		border-radius: $thumbSize;
		background-color: white;
	}
	&.active {
		background: #3eaf7c;
		&:before {
			left: $padding + $thumbSize;
		}
	}

	&.small {
		width: 2 * ($thumbSizeSmall + $paddingSmall);
		height: $thumbSizeSmall + 2 * $paddingSmall;
		&:before {
			top: $paddingSmall;
			left: $paddingSmall;
			width: $thumbSizeSmall;
			height: $thumbSizeSmall;
		}
		&.active {
			&:before {
				left: $paddingSmall + $thumbSizeSmall;
			}
		}
	}
}
</style>
