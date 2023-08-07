// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	nitro: {
		prerender: {
			ignore: [
				'/test/',
			]
		}
	},
	runtimeConfig: {
		public: {
			base_url: process.env.BASE_URL,
			site_title: process.env.SITE_TITLE,
			site_description: process.env.SITE_DESCRIPTION,
			site_url: process.env.SITE_URL,
			og_image: process.env.OG_IMAGE,
			og_image_width: process.env.OG_IMAGE_WIDTH,
			og_image_height: process.env.OG_IMAGE_HEIGHT,
			twitter_image: process.env.TWITTER_IMAGE,
			twitter_user: process.env.TWITTER_USER,
			logo_primary: process.env.LOGO_PRIMARY,
			logo_secondary: process.env.LOGO_SECONDARY,
			favicon: process.env.FAVICON,
			google_api_key: process.env.GOOGLE_API_KEY,
			google_sheet_id: process.env.GOOGLE_SHEET_ID,
			google_form_id: process.env.GOOGLE_FORM_ID,
			google_field_email: process.env.GOOGLE_FIELD_EMAIL,
			recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
			recaptcha_secret_key: process.env.RECAPTCHA_SECRET_KEY,
		}
	},
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
	],
	buildModules: [
	],
})
