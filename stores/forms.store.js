import { defineStore } from 'pinia'

export const useFormsStore = defineStore('forms', {
	state: () => {
		return {
		}
	},
	getters: {
	},
	actions: {
		async submitSubscribeForm(payload, url) {
			console.log(payload)
			console.log(url)
			// return await fetch(url, {
      //   method: "POST",
      //   body: payload,
      // })
			// .then(() => {
			// 	return true
			// })
			// .catch(() => {
			// 	return false
			// })
		}
	}
})