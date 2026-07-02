import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Michel Dequick",
	subtitle: "Blog and Resume of Michel Dequick",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		// A single image, or a list of images to cycle through.
		// Any images placed in `src/assets/images/banners/` are also picked up
		// automatically and take priority over this value when present.
		src: "assets/images/banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		carousel: {
			enable: true, // Cycle through the banner images when more than one is available
			interval: 5, // Seconds between each image transition
		},
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Photo by Michel Dequick", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Resume,
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/michel-dequick/", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "GitHub",
			url: "https://github.com/MichelDequick", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/pp.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Michel Dequick",
	bio: "Research Engineer, Inventor, Photographer and Adventurer.",
	links: [
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/michel-dequick/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/MichelDequick",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false, // Enable or disable the license information on the post page
	// name: "CC BY-NC-SA 4.0",
	// url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
