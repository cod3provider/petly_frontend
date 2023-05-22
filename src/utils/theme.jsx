export const theme = {
	baseColors: {
		accentColor: '#54ADFF',
		titleColor: '#000000',
		textColor: '#111111',
		labelBgColor: '#CCE4FB',
		accentButtonColor: '#54ADFF',
		buttonHoverBgColor: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
		buttonBgTransparent: 'transparent',
		buttonColorTransparent: '#54ADFF',
		buttonTextColor: '#FEF9F9',
		filterNonActiveBgColor: '#CCE4FB',
		filterNonActiveTextColor: '#54ADFF',
		filterActiveBgColor: '#54ADFF',
		filterActiveTextColor: '#FEF9F9',
	}, 

	fontSizes: {
		xs: '12px',
		s: '14px',
		m: '18px',
		ml: '20px',
		l: '24px',
		lx: '28px',
		x: '32px',
		xl: '36px',
		xxl: '48px',
		MainTitle: '68px',
	},

	breakpoints: {
		mobile: {
			media: '(max-width: 767px)',
			width: '320px',
		},
		tablet: {
			media: '(min-width: 768px) and (max-width: 1279px)',
			width: '768px',
		},
		desktop: {
			media: '(min-width: 1280px)',
			width: '1280px',
		},
	},

	fonts: {
		main: 'Manrope',
		secondary: 'Inter',
		logo: 'Poppins',
	},

	transition: {
		color: 'color 250ms linear',
		bg: 'background 250ms linear',
	},
}