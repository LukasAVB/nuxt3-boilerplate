<template>
	<form 
		class="text-center flex flex-col gap-x2 text-12px"
		@submit.prevent="submit"
	>
		<template v-if="!isSuccess && !isError">
			<header>
				<p v-if="title">{{ title }}</p>
			</header>
			<section>
				<div class="border-b-1 border-white">
					<input 
						class="text-center p-default" 
						type="email" 
						placeholder="EMAIL" 
						required
						v-model="payload.email"
					/>
				</div>
			</section>
			<footer>
				<button class="px-x3 py-default bg-white text-black">
					SUBSCRIBE
				</button>
			</footer>
		</template>
		<template v-else-if="isSuccess">
			<p>THANK YOU FOR SUSCRIBING</p>
			<p>WE LOOK FORWARD TO SEEING YOU SOON</p>
		</template>
		<template v-else-if="isError">
			<p>AN ERROR HAS OCCURED</p>
			<p>PLEASE TRY AGAIN LATER</p>
		</template>
	</form>
</template>

<script setup>
import { useFormsStore } from '@/stores'
import useGoogleRecaptcha, {
  RecaptchaAction,
} from "@/composables/useGoogleRecaptcha"
import { allRows } from '@/composables/useSheet'

const sheetData = await allRows().data
const { executeRecaptcha } = useGoogleRecaptcha()
const { submitSubscribeForm } = useFormsStore()
const config = useRuntimeConfig()

onMounted(() => {
	console.log(sheetData)
})

const props = defineProps({
	title: {
		type: String,
		default: null
	}
})

const isError = ref(false)
const isSuccess = ref(false)

const payload = ref({
	email: ''
})

const submit = async () => {
	const { token } = await executeRecaptcha(RecaptchaAction.login);
	console.log(token)
	
	const output = {}
	
	Object.keys(payload.value)
		.forEach((key) => {
			output[config.public[`google_field_${ key }`]] = payload.value[key] 
		})

	const status = true
	// const status = await submitSubscribeForm(output, config.public.google_form_id)

	if (status) isSuccess.value = true
	else isError.value = true

	setTimeout(() => {
		isSuccess.value = false
		isError.value = false
		payload.value.email = ''
	}, 2000)
}
</script>

<style scoped>
form {
	width: 100%;
	max-width: 320px;
}
</style>