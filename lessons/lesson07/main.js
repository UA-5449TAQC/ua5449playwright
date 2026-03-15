// import {User, count} from "./data";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// let user = new User("Anna", 35);
// console.log(user)
// user.print()
function decorator(originalMethod, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Before");
        var result = originalMethod.apply(this, args);
        console.log("After");
        return result;
    };
}
var Oper = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    var _min_decorators;
    return _a = /** @class */ (function () {
            function Oper() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Oper.prototype.add = function () {
                var ar = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ar[_i] = arguments[_i];
                }
                console.log(ar);
                var sum = 0;
                for (var i = 0; i < ar.length; i++) {
                    sum += ar[i];
                }
                return sum;
            };
            Oper.prototype.min = function () {
                var ar = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ar[_i] = arguments[_i];
                }
                console.log(ar);
                var min = ar[0];
                for (var i = 0; i < ar.length; i++) {
                    if (min > ar[0]) {
                        min = ar[0];
                    }
                }
                return min;
            };
            return Oper;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [decorator];
            _min_decorators = [decorator];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _min_decorators, { kind: "method", name: "min", static: false, private: false, access: { has: function (obj) { return "min" in obj; }, get: function (obj) { return obj.min; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var o = new Oper();
var s = o.add(1, 2, 2, 3);
var m = o.min(1, 2, 2, 3);
