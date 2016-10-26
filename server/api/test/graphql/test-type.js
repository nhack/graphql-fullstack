"use strict";
var TestType = {
    def: "\n    interface TestQuery{\n      tests: [String]\n    }\n  ",
    resolvers: {
        Query: {
            tests: function () { return ['test']; }
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestType;
//# sourceMappingURL=test-type.js.map