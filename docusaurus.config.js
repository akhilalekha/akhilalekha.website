module.exports = {
	title: "Akhila C R",
	tagline: "Hi, I'm a full-stack developer :)",
	url: "https://akhilalekha.netlify.app",
	baseUrl: "/",
	onBrokenLinks: "throw",
	favicon: "_",
	organizationName: "akhilalekha", // Usually your GitHub org/user name.
	projectName: "akhilalekha.website", // Usually your repo name.

	themeConfig: {
		plugins: ["@docusaurus/plugin-google-analytics"],
		navbar: {
			title: "Akhila C R",
			logo: {
				alt: "my-logo",
				src: "img/web_development.svg"
			},
			items: [
				{
					to: "https://drive.google.com/file/d/1k1o3IFMfreI62kW-VA_qZT_Xr0uQhZTv/view",
					label: "Resume",
					position: "left"
				},
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
			copyright: `May the force ❤ be with me · © ${new Date().getFullYear()}`
			//· Copyright © ${new Date().getFullYear()} Akhila C R
		},
		googleAnalytics: {
			trackingID: "G-4KLZ0K700E"
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
