(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['url-ponyfill'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('url-ponyfill'));
    } else {
        root.returnExports = factory(root.urlPonyfill);
    }
}(typeof self !== 'undefined' ? self : this, function (urlPonyfill) {
    return {
        URL: urlPonyfill.hasNativeURL() ? self.URL : urlPonyfill.URL
    };
}));
