module.exports = {
	important: true,
	theme: {
		extend: {
      fontFamily: {
        'primary': ['Jost'],
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
        'body-2': ['var(--body-2-font-size)', {
          lineHeight: 'var(--body-2-line-height)',
          fontWeight: 'var(--body-2-font-weight)'
        }],
        'subtitle-1': ['var(--subtitle-1-font-size)', {
          lineHeight: 'var(--subtitle-line-height)',
          fontWeight: 'var(--subtitle-font-weight)'
        }],
        'subtitle-2': ['var(--subtitle-2-font-size)', {
          lineHeight: 'var(--subtitle-2-line-height)',
          fontWeight: 'var(--subtitle-2-font-weight)'
        }],
        'small': ['var(--small-font-size)', {
          lineHeight: 'var(--small-line-height)',
          fontWeight: 'var(--small-font-weight)'
        }],
        'tiny': ['var(--tiny-font-size)', {
          lineHeight: 'var(--tiny-line-height)',
          fontWeight: 'var(--tiny-font-weight)'
        }],
				'8px': '8px',
				'10px': '10px',
				'12px': '12px',
				'14px': '14px',
				'16px': '16px',
				'18px': '18px',
				'20px': '20px',
				'22px': '22px',
				'24px': '24px',
				'26px': '18px',
				'28px': '28px',
				'30px': '30px',
				'32px': '32px',
				'34px': '34px',
				'36px': '36px',
				'38px': '38px',
				'40px': '40px',
      },
			colors: {
        'inherit': 'inherit',
				'black': 'var(--color-black)',
				'gray-001': 'var(--color-gray-001)',
				'gray-002': 'var(--color-gray-002)',
				'gray-003': 'var(--color-gray-003)',
				'gray-004': 'var(--color-gray-004)',
				'gray-005': 'var(--color-gray-005)',
				'white': 'var(--color-white)',
				'primary': 'var(--color-primary)',
				'secondary': 'var(--color-secondary)',
				'teritary': 'var(--color-teritary)'
			},
      spacing: {
				'default': 'var(--gap)',
				'x0.5': 'calc(var(--gap) / 2)',
				'x1': 'calc(var(--gap) * 1)',
				'x1.5': 'calc(var(--gap) * 1.5)',
				'x2': 'calc(var(--gap) * 2)',
				'x2.5': 'calc(var(--gap) * 2.5)',
				'x3': 'calc(var(--gap) * 3)',
				'x3.5': 'calc(var(--gap) * 3.5)',
				'x4': 'calc(var(--gap) * 4)',
				'x4.5': 'calc(var(--gap) * 4.5)',
				'x5': 'calc(var(--gap) * 5)',
				'x5.5': 'calc(var(--gap) * 5.5)',
				'x6': 'calc(var(--gap) * 6)',
				'x6.5': 'calc(var(--gap) * 6.5)',
				'x7': 'calc(var(--gap) * 7)',
				'x7.5': 'calc(var(--gap) * 7.5)',
				'x8': 'calc(var(--gap) * 8)',
				'x8.5': 'calc(var(--gap) * 8.5)',
				'x9': 'calc(var(--gap) * 9)',
				'x9.5': 'calc(var(--gap) * 9.5)',
				'x10': 'calc(var(--gap) * 10)',
				'nav': 'var(--nav-height)',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
				'20px': '20px',
				'30px': '30px',
				'40px': '40px',
				'50px': '50px',
				'60px': '60px',
				'70px': '70px',
				'80px': '80px',
				'90px': '90px',
				'100px': '100px',
				'200px': '200px',
				'300px': '300px',
				'400px': '400px',
				'500px': '500px',
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
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: false,
    content: [
			'./app.vue',
			'./components/**/*.vue',
			'./layouts/**/*.vue',
			'./pages/**/*.vue',
			'./plugins/**/*.js',
			'./nuxt.config.js',
		],
    options: {
      safelist: {
        standard: [/([a-zA-Z0-9\-:_])*/],
        deep: [/([a-zA-Z0-9\-:_])*/],
        greedy: [/([a-zA-Z0-9\-:_/])*/],
      }
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    }
  }
}