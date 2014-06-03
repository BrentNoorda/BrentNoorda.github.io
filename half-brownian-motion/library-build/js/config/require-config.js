require.config({
    config: {},
    shim: {},
    paths: {
        text: "plugins/text",
        json: "plugins/json",
        tpl: "plugins/tpl",
        async: "plugins/async",
        dot: "vendor/doT",
        stapes: "vendor/stapes",
        moddef: "util/module",
        jquery: "vendor/jquery",
        physicsjs: "vendor/physicsjs-full-0.6.0rc1",
        hammerjs: "vendor/hammer",
        "hammer.jquery": "vendor/hammer.jquery",
        dat: "vendor/dat.gui"
    },
    packages: [{
        name: "when",
        location: "vendor/when",
        main: "when"
    }],
    map: {
        "*": {
            "site-config": "config/site-config.json"
        }
    }
}), define("config/require-config", function () {});
