import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://wasteof.live',
	integrations: [mdx(), sitemap()],

	redirects: {
		"/discord": "https://discord.gg/tdyBstPtFV"
	}
});
