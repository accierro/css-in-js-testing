import { styled } from "./stitches.config";

export const Button = styled("button", {
	padding: "6px 12px",
	borderRadius: "$round",
	fontWeight: "normal",
	outline: "none",
	textTransform: "uppercase",
	border: "2px solid",

	"&:hover": {
		cursor: "pointer",
	},

	variants: {
		color: {
			blue: {
				background: "$blue9",
				color: "$blue1",
				borderColor: "$blue9",

				"&:hover": {
					background: "$blue10",
				},
			},
			gray: {
				background: "$slate9",
				color: "$slate1",
				borderColor: "$slate9",

				"&:hover": {
					background: "$slate10",
				},
			},
		},
		size: {
			small: {
				fontSize: "1rem",
			},
			medium: {
				fontSize: "1.2rem",
				padding: "8px 16px",
			},
			large: { fontSize: "1.5rem", padding: "10px 20px" },
		},
		outlined: {
			true: {},
		},
	},

	defaultVariants: {
		color: "blue",
		size: "medium",
		outlined: false,
	},

	compoundVariants: [
		{
			outlined: true,
			color: "blue",
			css: {
				color: "$blue9",
				borderColor: "$blue9",
				background: "$slate1",

				"&:hover": {
					color: "$blue10",
					background: "$slate1",
					borderColor: "$blue10",
				},
			},
		},
		{
			outlined: true,
			color: "gray",
			css: {
				color: "$slate9",
				borderColor: "$slate9",
				background: "$slate1",

				"&:hover": {
					color: "$slate10",
					background: "$slate1",
					borderColor: "$slate10",
				},
			},
		},
	],
});
