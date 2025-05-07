// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lar group Blog',

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kromzatura/larg-blog'			}],
			sidebar: [
				{
					label: 'Blog',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'welcome/intro' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
