"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = (function () {
    function Logger() {
        var _this = this;
        this.error = function (message) {
            if (!_this.runtime) {
                console.error(message);
                return;
            }
            _this.runtime.status({ message: message });
        };
    }
    Logger.prototype.setRuntime = function (runtime) {
        this.runtime = runtime;
    };
    Logger.prototype.debug = function (message) {
        if (!this.runtime) {
            console.log(message);
            return;
        }
        try {
            this.runtime.log(JSON.stringify(message));
        }
        catch (e) {
            this.runtime.log(message);
        }
    };
    return Logger;
}());
exports.default = new Logger();
//# sourceMappingURL=index.js.map