const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    // options...
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('prerender-spa-plugin')
                .use(PrerenderSPAPlugin, [
                    {
                        staticDir: path.join(__dirname, 'dist'),
                        routes: ['/', '/onama', '/fotografije', '/kontakt'], // List of routes to prerender.
                        renderer: new PrerenderSPAPlugin.PuppeteerRenderer() // without this line does not work in my case
                    }
                ])
        } else {
            config
                .plugin('html')
                .tap(args => {
                    args[0].title = "Kolmar Vine Liftovi";
                    return args;
                })
        }
    }
}