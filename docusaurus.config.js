module.exports = {
	title: "Akhila C R",
	tagline: "Hi, I'm a front-end developer :)",
	url: "https://github.com/akhilalekha",
	baseUrl: "/",
	onBrokenLinks: "throw",
	favicon: "_",
	organizationName: "akhilalekha", // Usually your GitHub org/user name.
	projectName: "my-github", // Usually your repo name.
	// #9DFF63
	themeConfig: {
		navbar: {
			title: "Akhila C R",
			logo: {
				alt: "My Site Logo",
				src: "img/working_remotely.svg"
			},
			items: [
				// {
				//   to: 'docs/',
				//   activeBasePath: 'docs',
				//   label: 'Docs',
				//   position: 'left',
				// },
				{ to: "blog", label: "Blog", position: "left" }
				// {
				// 	href: "https://github.com/facebook/docusaurus",
				// 	label: "GitHub",
				// 	position: "right"
				// }
			]
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
					title: "Internet Profiles",
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
			copyright: `Copyright © ${new Date().getFullYear()} Akhila C R.`
		}
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: false,
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/"
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			}
		]
	]
};
