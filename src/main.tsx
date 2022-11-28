import {
	createReactRouter,
	createRouteConfig,
	Link,
	Outlet,
	RouterProvider,
} from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home";
import { Stitches } from "./components/Stitches";
import { Vanilla } from "./components/Vanilla";

const rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({
	path: "/",
	component: Home,
});

const vanillaRoute = rootRoute.createRoute({
	path: "/vanilla",
	component: Vanilla,
});

const stitchesRoute = rootRoute.createRoute({
	path: "/stitches",
	component: Stitches,
});

const routeConfig = rootRoute.addChildren([
	indexRoute,
	vanillaRoute,
	stitchesRoute,
]);

const router = createReactRouter({ routeConfig });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} basepath="/">
			<Link to="/vanilla">Vanilla</Link>
			<Link to="/stitches">Stitches</Link>
			<Outlet />
		</RouterProvider>
	</React.StrictMode>,
);
