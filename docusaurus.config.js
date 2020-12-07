module.exports = {
	title: "Akhila C R",
	tagline: "Hi, I'm a front-end developer :)",
	url: "https://akhilalekha.github.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	favicon: "_",
	organizationName: "akhilalekha", // Usually your GitHub org/user name.
	projectName: "akhilalekha.github.io", // Usually your repo name.

	themeConfig: {
		plugins: ["@docusaurus/plugin-google-analytics"],
		navbar: {
			title: "Akhila C R",
			logo: {
				alt: "my-logo",
				src: "img/web_development.svg"
			},
			items: [
				{ to: "resume/", label: "Resume", position: "left" },
				{ to: "showcase/", label: "Showcase", position: "left" },
				{ to: "blog", label: "Blog", position: "left" }
			],
			hideOnScroll: true
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Reach me at",
					items: [
						{
							label: "LinkedIn",
							href: "https://www.linkedin.com/in/akhila-c-r/"
						},
						{
							label: "GitHub",
							href: "https://github.com/akhilalekha"
						}
					]
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "blog"
						}
					]
				}
			],
			copyright: `Made with ♥ by me using Docusaurus · Copyright © ${new Date().getFullYear()}`
			//· Copyright © ${new Date().getFullYear()} Akhila C R
		},
		googleAnalytics: {
			trackingID: "G-QDPNFZWV9K"
			// measurementID: "G-QDPNFZWV9K",
			// Optional fields.
		}
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: false,
				blog: {
					showReadingTime: true
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			}
		]
	]
};
