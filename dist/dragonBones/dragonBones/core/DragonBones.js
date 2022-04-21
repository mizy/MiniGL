/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var dragonBones;
(function (dragonBones) {
    /**
     * @private
     */
    class DragonBones {
        constructor(eventManager) {
            this._clock = new dragonBones.WorldClock();
            this._events = [];
            this._objects = [];
            this._eventManager = null;
            this._eventManager = eventManager;
            console.info(`DragonBones: ${DragonBones.VERSION}\nWebsite: http://dragonbones.com/\nSource and Demo: https://github.com/DragonBones/`);
        }
        advanceTime(passedTime) {
            if (this._objects.length > 0) {
                for (const object of this._objects) {
                    object.returnToPool();
                }
                this._objects.length = 0;
            }
            this._clock.advanceTime(passedTime);
            if (this._events.length > 0) {
                for (let i = 0; i < this._events.length; ++i) {
                    const eventObject = this._events[i];
                    const armature = eventObject.armature;
                    if (armature._armatureData !== null) { // May be armature disposed before advanceTime.
                        armature.eventDispatcher.dispatchDBEvent(eventObject.type, eventObject);
                        if (eventObject.type === dragonBones.EventObject.SOUND_EVENT) {
                            this._eventManager.dispatchDBEvent(eventObject.type, eventObject);
                        }
                    }
                    this.bufferObject(eventObject);
                }
                this._events.length = 0;
            }
        }
        bufferEvent(value) {
            if (this._events.indexOf(value) < 0) {
                this._events.push(value);
            }
        }
        bufferObject(object) {
            if (this._objects.indexOf(object) < 0) {
                this._objects.push(object);
            }
        }
        get clock() {
            return this._clock;
        }
        get eventManager() {
            return this._eventManager;
        }
    }
    DragonBones.VERSION = "5.7.000";
    DragonBones.yDown = true;
    DragonBones.debug = false;
    DragonBones.debugDraw = false;
    dragonBones.DragonBones = DragonBones;
})(dragonBones || (dragonBones = {}));
//
if (!console.warn) {
    console.warn = function () { };
}
if (!console.assert) {
    console.assert = function () { };
}
//
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}
// Weixin can not support typescript extends.
var __extends = function (t, e) {
    function r() {
        this.constructor = t;
    }
    for (var i in e) {
        if (e.hasOwnProperty(i)) {
            t[i] = e[i];
        }
    }
    r.prototype = e.prototype, t.prototype = new r();
};
if (typeof exports === "object" && typeof module === "object") {
    module.exports = dragonBones;
}
else if (typeof define === "function" && define["amd"]) {
    define(["dragonBones"], function () { return dragonBones; });
}
else if (typeof exports === "object") {
    exports = dragonBones;
}
else if (typeof global !== "undefined") {
    global.dragonBones = dragonBones;
}
