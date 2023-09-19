import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
	state: () => {
		return {
			screenSize: null,
			isPageLoading: false,
			isMenuVisible: false,
			theme: 'dark'
		}
	},
	getters: {
	},
	actions: {
		setTheme(mode) {
			this.theme = mode
		},
		pageLoaded() {
			this.isPageLoading = false
		},
		pageLoading() {
			this.isPageLoading = true
		},
		setScreenSize(width) {
			if (width >= 1920) this.screenSize = 'tv'
			else if (width >= 1280 && width < 1920) this.screenSize = 'desktop'
			else if (width >= 1024 && width < 1280) this.screenSize = 'laptop'
			else if (width >= 768 && width < 1024) this.screenSize = 'tablet'
			else this.screenSize = 'mobile'
		},
		showMenu() {
			this.isMenuVisible = true
		},
		hideMenu() {
			this.isMenuVisible = false
		},
	}
})