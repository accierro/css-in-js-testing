import { createStitches } from "@stitches/react";
import { blue, slate, blueDark, slateDark, blackA } from "@radix-ui/colors";

const { styled, css, createTheme, globalCss } = createStitches({
	theme: {
		colors: {
			...blue,
			...slate,
			...blackA,
		},
		fonts: {
			sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;',
		},
		space: {
			px: "1px",
			0: "0px",
			"1-2": "0.125rem",
			1: "0.25rem",
			2: "0.5rem",
			3: "0.75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
			11: "2.75rem",
			12: "3rem",
			14: "3.5rem",
			16: "4rem",
			20: "5rem",
			24: "6rem",
			28: "7rem",
			32: "8rem",
			36: "9rem",
			40: "10rem",
			44: "11rem",
			48: "12rem",
			52: "13rem",
			56: "14rem",
			60: "15rem",
			64: "16rem",
			72: "18rem",
			80: "20rem",
			96: "24rem",
		},
		radii: {
			1: "2px",
			2: "4px",
			3: "8px",
			round: "9999px",
		},
		shadows: {
			xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
			sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
			md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
			lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
			xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
			"2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
			inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
			none: "none",
		},
	},

	utils: {
		bg: (value: any) => ({
			backgroundColor: value,
		}),
	},
});

const globalStyles = globalCss({
	body: {
		margin: 0,
		color: "$slate12",
		bg: "$slate1",
		height: "100vh",
	},
	"*": {
		boxSizing: "border-box",
		fontFamily: "$sans",
	},
});

const darkTheme = createTheme({
	colors: {
		...blueDark,
		...slateDark,
		...blackA,
	},
});

export { styled, css, globalStyles, darkTheme };
