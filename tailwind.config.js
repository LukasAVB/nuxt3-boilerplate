module.exports = {
	important: true,
	theme: {
		extend: {
      fontFamily: {
        'primary': ['Montserrat'],
			},
      fontSize: {
        'h1': ['var(--h1-font-size)', {
          lineHeight: 'var(--h1-line-height)',
          fontWeight: 'var(--h1-font-weight)'
        }],
        'h2': ['var(--h2-font-size)', {
          lineHeight: 'var(--h2-line-height)',
          fontWeight: 'var(--h2-font-weight)'
        }],
        'h3': ['var(--h3-font-size)', {
          lineHeight: 'var(--h3-line-height)',
          fontWeight: 'var(--h3-font-weight)'
        }],
        'h4': ['var(--h4-font-size)', {
          lineHeight: 'var(--h4-line-height)',
          fontWeight: 'var(--h4-font-weight)'
        }],
        'h5': ['var(--h5-font-size)', {
          lineHeight: 'var(--h5-line-height)',
          fontWeight: 'var(--h5-font-weight)'
        }],
        'h6': ['var(--h6-font-size)', {
          lineHeight: 'var(--h6-line-height)',
          fontWeight: 'var(--h6-font-weight)'
        }],
        'body': ['var(--body-font-size)', {
          lineHeight: 'var(--body-line-height)',
          fontWeight: 'var(--body-font-weight)'
        }],
        'label': ['var(--label-font-size)', {
          lineHeight: 'var(--label-line-height)',
          fontWeight: 'var(--label-font-weight)'
        }],
        'small': ['var(--small-font-size)', {
          lineHeight: 'var(--small-line-height)',
          fontWeight: 'var(--small-font-weight)'
        }],
      },
			colors: {
        'inherit': 'inherit'
			},
      spacing: {
      },
			borderWidth: {
				'1': '1px'
			},
			gridTemplateColumns: {
				'auto': 'auto',
				'min': 'min-content',
				'max': 'max-content',
			},
			gridTemplateRows: {
				'auto': 'auto',
				'min': 'min-content',
				'max': 'max-content',
			},
			screens: {
				'mobile-sm': '360px',
				'mobile-md': '516px',
				'tablet': '768px',
				'laptop': '1024px',
				'desktop': '1280px',
				'tv': '1920px',
			},
			borderRadius: {
				'default': 'var(--border-radius)'
			}
		},
	},
  variants: {},
	content: [
		'./app.vue',
		'./components/**/*.vue',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.js',
		'./nuxt.config.js',
	]
}