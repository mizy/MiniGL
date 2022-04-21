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
    class DataParser {
        static _getArmatureType(value) {
            switch (value.toLowerCase()) {
                case "stage":
                    return 2 /* Stage */;
                case "armature":
                    return 0 /* Armature */;
                case "movieclip":
                    return 1 /* MovieClip */;
                default:
                    return 0 /* Armature */;
            }
        }
        static _getBoneType(value) {
            switch (value.toLowerCase()) {
                case "bone":
                    return 0 /* Bone */;
                case "surface":
                    return 1 /* Surface */;
                default:
                    return 0 /* Bone */;
            }
        }
        static _getPositionMode(value) {
            switch (value.toLocaleLowerCase()) {
                case "percent":
                    return 1 /* Percent */;
                case "fixed":
                    return 0 /* Fixed */;
                default:
                    return 1 /* Percent */;
            }
        }
        static _getSpacingMode(value) {
            switch (value.toLocaleLowerCase()) {
                case "length":
                    return 0 /* Length */;
                case "percent":
                    return 2 /* Percent */;
                case "fixed":
                    return 1 /* Fixed */;
                default:
                    return 0 /* Length */;
            }
        }
        static _getRotateMode(value) {
            switch (value.toLocaleLowerCase()) {
                case "tangent":
                    return 0 /* Tangent */;
                case "chain":
                    return 1 /* Chain */;
                case "chainscale":
                    return 2 /* ChainScale */;
                default:
                    return 0 /* Tangent */;
            }
        }
        static _getDisplayType(value) {
            switch (value.toLowerCase()) {
                case "image":
                    return 0 /* Image */;
                case "mesh":
                    return 2 /* Mesh */;
                case "armature":
                    return 1 /* Armature */;
                case "boundingbox":
                    return 3 /* BoundingBox */;
                case "path":
                    return 4 /* Path */;
                default:
                    return 0 /* Image */;
            }
        }
        static _getBoundingBoxType(value) {
            switch (value.toLowerCase()) {
                case "rectangle":
                    return 0 /* Rectangle */;
                case "ellipse":
                    return 1 /* Ellipse */;
                case "polygon":
                    return 2 /* Polygon */;
                default:
                    return 0 /* Rectangle */;
            }
        }
        static _getBlendMode(value) {
            switch (value.toLowerCase()) {
                case "normal":
                    return 0 /* Normal */;
                case "add":
                    return 1 /* Add */;
                case "alpha":
                    return 2 /* Alpha */;
                case "darken":
                    return 3 /* Darken */;
                case "difference":
                    return 4 /* Difference */;
                case "erase":
                    return 5 /* Erase */;
                case "hardlight":
                    return 6 /* HardLight */;
                case "invert":
                    return 7 /* Invert */;
                case "layer":
                    return 8 /* Layer */;
                case "lighten":
                    return 9 /* Lighten */;
                case "multiply":
                    return 10 /* Multiply */;
                case "overlay":
                    return 11 /* Overlay */;
                case "screen":
                    return 12 /* Screen */;
                case "subtract":
                    return 13 /* Subtract */;
                default:
                    return 0 /* Normal */;
            }
        }
        static _getAnimationBlendType(value) {
            switch (value.toLowerCase()) {
                case "none":
                    return 0 /* None */;
                case "1d":
                    return 1 /* E1D */;
                default:
                    return 0 /* None */;
            }
        }
        static _getActionType(value) {
            switch (value.toLowerCase()) {
                case "play":
                    return 0 /* Play */;
                case "frame":
                    return 10 /* Frame */;
                case "sound":
                    return 11 /* Sound */;
                default:
                    return 0 /* Play */;
            }
        }
    }
    DataParser.DATA_VERSION_2_3 = "2.3";
    DataParser.DATA_VERSION_3_0 = "3.0";
    DataParser.DATA_VERSION_4_0 = "4.0";
    DataParser.DATA_VERSION_4_5 = "4.5";
    DataParser.DATA_VERSION_5_0 = "5.0";
    DataParser.DATA_VERSION_5_5 = "5.5";
    DataParser.DATA_VERSION_5_6 = "5.6";
    DataParser.DATA_VERSION = DataParser.DATA_VERSION_5_6;
    DataParser.DATA_VERSIONS = [
        DataParser.DATA_VERSION_4_0,
        DataParser.DATA_VERSION_4_5,
        DataParser.DATA_VERSION_5_0,
        DataParser.DATA_VERSION_5_5,
        DataParser.DATA_VERSION_5_6
    ];
    DataParser.TEXTURE_ATLAS = "textureAtlas";
    DataParser.SUB_TEXTURE = "SubTexture";
    DataParser.FORMAT = "format";
    DataParser.IMAGE_PATH = "imagePath";
    DataParser.WIDTH = "width";
    DataParser.HEIGHT = "height";
    DataParser.ROTATED = "rotated";
    DataParser.FRAME_X = "frameX";
    DataParser.FRAME_Y = "frameY";
    DataParser.FRAME_WIDTH = "frameWidth";
    DataParser.FRAME_HEIGHT = "frameHeight";
    DataParser.DRADON_BONES = "dragonBones";
    DataParser.USER_DATA = "userData";
    DataParser.ARMATURE = "armature";
    DataParser.CANVAS = "canvas";
    DataParser.BONE = "bone";
    DataParser.SURFACE = "surface";
    DataParser.SLOT = "slot";
    DataParser.CONSTRAINT = "constraint";
    DataParser.SKIN = "skin";
    DataParser.DISPLAY = "display";
    DataParser.FRAME = "frame";
    DataParser.IK = "ik";
    DataParser.PATH_CONSTRAINT = "path";
    DataParser.ANIMATION = "animation";
    DataParser.TIMELINE = "timeline";
    DataParser.FFD = "ffd";
    DataParser.TRANSLATE_FRAME = "translateFrame";
    DataParser.ROTATE_FRAME = "rotateFrame";
    DataParser.SCALE_FRAME = "scaleFrame";
    DataParser.DISPLAY_FRAME = "displayFrame";
    DataParser.COLOR_FRAME = "colorFrame";
    DataParser.DEFAULT_ACTIONS = "defaultActions";
    DataParser.ACTIONS = "actions";
    DataParser.EVENTS = "events";
    DataParser.INTS = "ints";
    DataParser.FLOATS = "floats";
    DataParser.STRINGS = "strings";
    DataParser.TRANSFORM = "transform";
    DataParser.PIVOT = "pivot";
    DataParser.AABB = "aabb";
    DataParser.COLOR = "color";
    DataParser.VERSION = "version";
    DataParser.COMPATIBLE_VERSION = "compatibleVersion";
    DataParser.FRAME_RATE = "frameRate";
    DataParser.TYPE = "type";
    DataParser.SUB_TYPE = "subType";
    DataParser.NAME = "name";
    DataParser.PARENT = "parent";
    DataParser.TARGET = "target";
    DataParser.STAGE = "stage";
    DataParser.SHARE = "share";
    DataParser.PATH = "path";
    DataParser.LENGTH = "length";
    DataParser.DISPLAY_INDEX = "displayIndex";
    DataParser.Z_ORDER = "zOrder";
    DataParser.Z_INDEX = "zIndex";
    DataParser.BLEND_MODE = "blendMode";
    DataParser.INHERIT_TRANSLATION = "inheritTranslation";
    DataParser.INHERIT_ROTATION = "inheritRotation";
    DataParser.INHERIT_SCALE = "inheritScale";
    DataParser.INHERIT_REFLECTION = "inheritReflection";
    DataParser.INHERIT_ANIMATION = "inheritAnimation";
    DataParser.INHERIT_DEFORM = "inheritDeform";
    DataParser.SEGMENT_X = "segmentX";
    DataParser.SEGMENT_Y = "segmentY";
    DataParser.BEND_POSITIVE = "bendPositive";
    DataParser.CHAIN = "chain";
    DataParser.WEIGHT = "weight";
    DataParser.BLEND_TYPE = "blendType";
    DataParser.FADE_IN_TIME = "fadeInTime";
    DataParser.PLAY_TIMES = "playTimes";
    DataParser.SCALE = "scale";
    DataParser.OFFSET = "offset";
    DataParser.POSITION = "position";
    DataParser.DURATION = "duration";
    DataParser.TWEEN_EASING = "tweenEasing";
    DataParser.TWEEN_ROTATE = "tweenRotate";
    DataParser.TWEEN_SCALE = "tweenScale";
    DataParser.CLOCK_WISE = "clockwise";
    DataParser.CURVE = "curve";
    DataParser.SOUND = "sound";
    DataParser.EVENT = "event";
    DataParser.ACTION = "action";
    DataParser.X = "x";
    DataParser.Y = "y";
    DataParser.SKEW_X = "skX";
    DataParser.SKEW_Y = "skY";
    DataParser.SCALE_X = "scX";
    DataParser.SCALE_Y = "scY";
    DataParser.VALUE = "value";
    DataParser.ROTATE = "rotate";
    DataParser.SKEW = "skew";
    DataParser.ALPHA = "alpha";
    DataParser.ALPHA_OFFSET = "aO";
    DataParser.RED_OFFSET = "rO";
    DataParser.GREEN_OFFSET = "gO";
    DataParser.BLUE_OFFSET = "bO";
    DataParser.ALPHA_MULTIPLIER = "aM";
    DataParser.RED_MULTIPLIER = "rM";
    DataParser.GREEN_MULTIPLIER = "gM";
    DataParser.BLUE_MULTIPLIER = "bM";
    DataParser.UVS = "uvs";
    DataParser.VERTICES = "vertices";
    DataParser.TRIANGLES = "triangles";
    DataParser.WEIGHTS = "weights";
    DataParser.SLOT_POSE = "slotPose";
    DataParser.BONE_POSE = "bonePose";
    DataParser.BONES = "bones";
    DataParser.POSITION_MODE = "positionMode";
    DataParser.SPACING_MODE = "spacingMode";
    DataParser.ROTATE_MODE = "rotateMode";
    DataParser.SPACING = "spacing";
    DataParser.ROTATE_OFFSET = "rotateOffset";
    DataParser.ROTATE_MIX = "rotateMix";
    DataParser.TRANSLATE_MIX = "translateMix";
    DataParser.TARGET_DISPLAY = "targetDisplay";
    DataParser.CLOSED = "closed";
    DataParser.CONSTANT_SPEED = "constantSpeed";
    DataParser.VERTEX_COUNT = "vertexCount";
    DataParser.LENGTHS = "lengths";
    DataParser.GOTO_AND_PLAY = "gotoAndPlay";
    DataParser.DEFAULT_NAME = "default";
    dragonBones.DataParser = DataParser;
})(dragonBones || (dragonBones = {}));
