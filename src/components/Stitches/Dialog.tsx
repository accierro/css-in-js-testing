import * as DialogComponents from "@radix-ui/react-dialog";
import { FC, PropsWithChildren } from "react";
import { styled } from "./stitches.config";
import { Cross2Icon } from "@radix-ui/react-icons";

interface Props {
	title: string;
	description: string;
}

const StyledOverlay = styled(DialogComponents.Overlay, {
	position: "fixed",
	inset: 0,
	background: "$blackA9",
});

const StyledContent = styled(DialogComponents.Content, {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90vw",
	maxWidth: "450px",
	maxHeight: "85vh",
	padding: "24px",
	boxShadow: "$lg",
	background: "$slate2",
	borderRadius: "$3",
});

const StyledTitle = styled(DialogComponents.Title, {
	marginTop: 0,
});
const StyledDescription = styled(DialogComponents.Description, {
	marginBottom: 0,
	color: "$slate10",
});

const CloseButton = styled("button", {
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 25,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	top: 10,
	right: 10,
	outline: "none",
	border: "none",
	background: "$slate3",

	"&:hover": {
		backgroundColor: "$blue4",
		cursor: "pointer",
	},

	"&:focus": {
		boxShadow: " box-shadow: 0 0 0 2px $blue7",
	},

	"& svg path": {
		fill: "$slate12",
	},
});

export const Dialog: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	description,
}) => {
	return (
		<DialogComponents.Root>
			<DialogComponents.Trigger asChild={true}>
				{children}
			</DialogComponents.Trigger>
			<DialogComponents.Portal>
				<StyledOverlay>
					<StyledContent>
						<StyledTitle>{title}</StyledTitle>
						<StyledDescription>{description}</StyledDescription>
						<DialogComponents.Close asChild={true}>
							<CloseButton aria-label="Close">
								<Cross2Icon />
							</CloseButton>
						</DialogComponents.Close>
					</StyledContent>
				</StyledOverlay>
			</DialogComponents.Portal>
		</DialogComponents.Root>
	);
};
