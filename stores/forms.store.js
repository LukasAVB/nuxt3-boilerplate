import { defineStore } from 'pinia'

export const useFormsStore = defineStore('forms', {
	state: () => {
		return {
		}
	},
	getters: {
	},
	actions: {
		submitSubscribeForm(payload) {
			console.log('subscribe:', payload)
			return true
		}
	}
})