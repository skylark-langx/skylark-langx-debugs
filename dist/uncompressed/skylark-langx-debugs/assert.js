define(["./debugs"],function(debugs) {
    function assert(cond, msg) {
        if (!cond) {
            throw new Error(msg);
        }
    }

    return debugs.assert = assert;
});