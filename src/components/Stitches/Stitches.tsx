import { useEffect, useState } from "react";
import { Box } from "./Box";
import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { Flex } from "./Flex";
import { darkTheme, globalStyles } from "./stitches.config";
import { Switch } from "./Switch";

export const Stitches = () => {
	const [theme, setTheme] = useState("light");

	globalStyles();

	useEffect(() => {
		const body = document.body;

		if (theme === "dark") {
			body.classList.add(darkTheme);
		} else {
			body.classList.remove(darkTheme);
		}
	}, [theme]);

	const isDark = theme === "dark";

	return (
		<Box css={{ padding: "20px" }}>
			Stitches CSS-in-JS
			<Flex css={{ justifyContent: "flex-end", width: "100%" }}>
				<Switch
					id="theme"
					label="Dark theme"
					checked={isDark}
					onCheckedChange={(checked) => {
						setTheme(checked ? "dark" : "light");
					}}
				/>
			</Flex>
			<Box>
				<Dialog
					title="Order completed."
					description="You'll receive a confirmation email in the next few minutes."
				>
					<Button color="blue" size="small">
						Open Dialog
					</Button>
				</Dialog>
				<Button color="blue" size="medium" outlined={true}>
					Close
				</Button>
				<Button color="gray" size="large">
					Something
				</Button>
			</Box>
		</Box>
	);
};
