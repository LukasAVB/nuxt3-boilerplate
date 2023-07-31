<template>
	<img 
		:src="src" 
		:width="width"
	/>
</template>

<script setup>
const config = useRuntimeConfig()

const props = defineProps({
	type: {
		type: String,
		default: 'Primary'
	},
	width: {
		type: String,
		default: 'auto'
	}
})

const src = computed(() => {
	return props.type === 'Secondary'
		? config.public.logo_secondary
		: config.public.logo_primary
})
</script>