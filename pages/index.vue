<template>
	<div class="p-x4 flex flex-col gap-x4 items-center">
		<UiLogo 
			width="50%"
			max-width="280px"
		/>
		<p class="text-12px">32 W 39TH STREET</p>
		<h5 class="text-24px font-semibold">COMING SOON</h5>
		<div class="text-center flex flex-col gap-x2 text-12px">
			<a :href="subscribeUrl">
				<button class="px-x3 py-default bg-white text-black">
					SUBSCRIBE TO STAY UPDATED
				</button>
			</a>
		</div>
	</div>
</template>

<script setup>
const config = useRuntimeConfig()

const subscribeUrl = computed(() => {
	return `https://docs.google.com/forms/d/e/${ config.public.google_form_id }/viewform`
})
</script>

<style>

</style>