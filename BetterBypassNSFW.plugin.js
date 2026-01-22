/**
 * @name BetterBypassNSFW
 * @description An updated BypassNSFW plugin / 
 * @version 1.0.0
 * @author stew.y
 * @source https://github.com/4stewy/BetterBypassNSFW
 * @updateUrl
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
