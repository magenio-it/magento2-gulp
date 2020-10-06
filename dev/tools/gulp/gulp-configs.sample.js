'use strict';

module.exports = {
    options: {
        liveReload: false,
        debug: false,
        browsersync: false,
        cache_disable: 'full_page block_html layout'
    },
    less: {
        singletheme: 'luma',
        sourcemap: true,
        minicss: false,
    },
    watch: {
    },
    supwatch: {
        extensionPermitted: ['png','jpg','jpeg','gif','svg','ico','bmp','tiff','eot','woff','woff2','exif','bat', 'html','js','json','less'],
        folderCustomTheme: 'app',
        notifyAll: true,
        notifyExt: ['xml','phtml','php']
    },
    exec: {
        singleTheme: 'luma',
        enableDefaultTask: true,
        defaultTask:  '--locale="it_IT" --area="frontend" --theme="Magento/luma"',
        staticFolderToClear: ['pub/static/frontend/Magento/luma/it_IT']
    },
    browsersync: {
        ghostmode: ['clicks: true, forms: true, scroll: true'],
        logPrefix: "Magenio_Gulp",
        open: false,
        reloadOnRestart: false,
        scrollProportionally: true
    }

};
