/**
 * @name BetterBypassNSFW
 * @description An updated BypassNSFW plugin
 * @version 1.0.0
 * @author ewyts4
 * @source https://github.com/ewyts4/BetterBypassNSFW
 * @updateUrl https://github.com/ewyts4/BetterBypassNSFW/raw/main/BetterBypassNSFW.plugin.js
 */

module.exports = class Bypass {
    start() {
        this.interval = setInterval(() => {
            this.patch();
        }, 5000);
    }

    patch() {
        const UserStore = BdApi.Webpack.getModule(m =>
            m?.getCurrentUser && m?.getUser
        );

        if (!UserStore) return;

        const user = UserStore.getCurrentUser();
        if (!user) return;

        user.nsfwAllowed = true;
    }

    stop() {
        clearInterval(this.interval);
    }
};

