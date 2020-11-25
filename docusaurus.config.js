module.exports = {
	title: "Akhila C R",
	tagline: "Hi, I'm a front-end developer :)",
	url: "https://github.com/akhilalekha",
	baseUrl: "/",
	onBrokenLinks: "throw",
	favicon: "_",
	organizationName: "akhilalekha", // Usually your GitHub org/user name.
	projectName: "website-ds", // Usually your repo name.
	// #9DFF63
	themeConfig: {
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
				// {
				// 	href: "https://github.com/facebook/docusaurus",
				// 	label: "GitHub",
				// 	position: "right"
				// }
			],
			hideOnScroll: true
		},
		footer: {
			style: "dark",
			links: [
				// {
				// 	title: "Docs",
				// 	items: [
				// 		{
				// 			label: "Style Guide",
				// 			to: "docs/"
				// 		},
				// 		{
				// 			label: "Second Doc",
				// 			to: "docs/doc2/"
				// 		}
				// 	]
				// },
				{
					title: "Find me at",
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
			copyright: `Made with ♥ by me using Docusaurus | Copyright © ${new Date().getFullYear()} Akhila C R.`
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
	// scripts: [
	// 	"https://kit.fontawesome.com/2077184b1c.js"
	// 	// Object format.
	// 	{
	// 		src: "https://use.fontawesome.com/releases/v5.15.1/js/all.js",
	// 		async: true
	// 	}
	// ]
};
