import * as SwitchComponent from "@radix-ui/react-switch";
import { FC } from "react";
import { styled } from "./stitches.config";

const StyledSwitchThumb = styled(SwitchComponent.Thumb, {
	height: "16px",
	width: "16px",
	background: "$slate9",
	display: "block",
	borderRadius: "$round",
	transform: "translateX(1px)",
	transition: "transform 100ms",
	willChange: "transform",
	boxShadow: "xs",

	"&[data-state='checked']": {
		background: "$blue9",
		transform: "translate(16px)",
	},
});

const StyledSwitchRoot = styled(SwitchComponent.Root, {
	height: "20px",
	width: "35px",
	borderRadius: "$round",
	border: "1px solid $slate7",
	background: "$slate3",
	padding: 0,

	"&:focus": {
		outline: "2px solid $slate7",
	},

	"&:hover": {
		borderColor: "$slate8",
		cursor: "pointer",
	},

	"&[data-state='checked']": {
		background: "$slate2",
	},
});

const Label = styled("label", {});

interface Props {
	id: string;
	label: string;
	checked: boolean;
	onCheckedChange: SwitchComponent.SwitchProps["onCheckedChange"];
}

export const Switch: FC<Props> = ({ label, id, checked, onCheckedChange }) => {
	return (
		<>
			<Label htmlFor={id} css={{ marginRight: "8px" }}>
				{label}
			</Label>
			<StyledSwitchRoot
				id={id}
				checked={checked}
				onCheckedChange={onCheckedChange}
			>
				<StyledSwitchThumb />
			</StyledSwitchRoot>
		</>
	);
};
