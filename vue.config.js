module.exports = {
    // options...
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Kolmar Vine Liftovi";
                return args;
            })
    }
}