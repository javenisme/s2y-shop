"use client";

import { useEffect } from "react";

export function StagewiseToolbarClient() {
	useEffect(() => {
		if (process.env.NODE_ENV === "development") {
			console.log("Initializing Stagewise toolbar...");

			// Try to load and initialize the toolbar
			import("@stagewise/toolbar")
				.then(({ initToolbar }) => {
					const config = {
						plugins: [],
					};

					console.log("Stagewise toolbar config:", config);
					initToolbar(config);
					console.log("Stagewise toolbar initialized successfully");
				})
				.catch((error) => {
					console.error("Failed to initialize Stagewise toolbar:", error);
				});
		}
	}, []);

	return null;
}
