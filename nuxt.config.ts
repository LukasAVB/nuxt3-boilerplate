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
			prod_url: process.env.PROD_URL,
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
			web_components_url: process.env.WEB_COMPONENTS_URL,
			widget_getter_url: process.env.WIDGET_GETTER_URL,
			analytics_api_url: process.env.ANALYTICS_API_URL,
			reference_data_api_url: process.env.REFERENCE_DATA_API_URL,
			homepage_data_api_url: process.env.HOMEPAGE_DATA_API_URL,
			user_profile_api_url: process.env.USER_PROFILE_API_URL,
			suite_web_url: process.env.SUITE_WEB_URL,
			claim_credit_url: process.env.CLAIM_CREDIT_URL
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
