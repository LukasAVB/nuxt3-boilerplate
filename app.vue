<template>
  <div 
		id="app" 
		class="relative w-full h-full"
	>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
  </div>
</template>

<script setup>
import '@/assets/css/main.css'

import { storeToRefs } from 'pinia'
import { useGeneralStore } from '@/stores'

const { theme } = storeToRefs(useGeneralStore())

const config = useRuntimeConfig()

const favicon = ref(config.public.favicon || '')
const title = ref(config.public.site_title || 'Site Title')
const description = ref(config.public.site_description || '')
const site_url = ref(config.public.site_url || '')
const og_image = ref(config.public.og_image || '')
const og_image_width = ref(config.public.og_image_width || '1200')
const og_image_height = ref(config.public.og_image_height || '630')
const twitter_user = ref(config.public.twitter_user || '')
const twitter_image = ref(config.public.twitter_image || '')

// This will be reactive even you change title/description above
useHead({
  title,
	htmlAttrs: {
		lang: 'en'
	},
  meta: [
		{
			name: 'description',
			content: description
		},
		{
			name: 'robots',
			content: 'index, follow'
		},
		{
			name: 'og:locale',
			content: 'en_US'
		},
		{
			name: 'og:type',
			content: 'website'
		},
		{
			name: 'og:title',
			content: title
		},
		{
			name: 'og:description',
			content: description
		},
		{
			name: 'og:url',
			content: site_url
		},
		{
			name: 'og:site_name',
			content: title
		},
		{
			name: 'og:image',
			content: og_image
		},
		{
			name: 'og:image:width',
			content: og_image_width
		},
		{
			name: 'og:image:height',
			content: og_image_height
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			name: 'twitter:domain',
			content: site_url
		},
		{
			name: 'twitter:url',
			content: site_url
		},
		{
			name: 'twitter:title',
			content: title
		},
		{
			name: 'twitter:description',
			content: description
		},
		{
			name: 'twitter:creator',
			content: twitter_user
		},
		{
			name: 'twitter:image',
			content: twitter_image
		},
		{
			name: 'twitter:image:alt',
			content: description
		},
		{
			name: 'twitter:site',
			content: twitter_user
		}
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: favicon },
		{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
	],
	script: [
		{
			src: config.public.web_components_url,
			body: true,
			defer: true,
			async: true
		},
		{
			src: config.public.widget_getter_url,
			body: true,
			defer: true,
			async: true
		}
	]
})
</script>