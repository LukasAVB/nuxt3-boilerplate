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
			google_form: process.env.GOOGLE_FORM,
			google_field_email: process.env.GOOGLE_FIELD_EMAIL,
			recaptcha_key: process.env.RECAPTCHA_KEY,
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
