import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'PakePlus',
    description: 'PakePlus Docs',
    outDir: './',
    vite: {
        server: {
            host: '0.0.0.0',
        },
    },
    head: [['link', { rel: 'icon', href: './app.svg' }]],
    themeConfig: {
        logo: {
            src: './app.svg',
            alt: 'PakePlus',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Sjj1024/PakePlus' },
        ],
    },
})
