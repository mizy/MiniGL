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
    class ObjectDataParser extends dragonBones.DataParser {
        constructor() {
            super(...arguments);
            this._rawTextureAtlasIndex = 0;
            this._rawBones = [];
            this._data = null; //
            this._armature = null; //
            this._bone = null; //
            this._geometry = null; //
            this._slot = null; //
            this._skin = null; //
            this._mesh = null; //
            this._animation = null; //
            this._timeline = null; //
            this._rawTextureAtlases = null;
            this._frameValueType = 0 /* Step */;
            this._defaultColorOffset = -1;
            this._prevClockwise = 0;
            this._prevRotation = 0.0;
            this._frameDefaultValue = 0.0;
            this._frameValueScale = 1.0;
            this._helpMatrixA = new dragonBones.Matrix();
            this._helpMatrixB = new dragonBones.Matrix();
            this._helpTransform = new dragonBones.Transform();
            this._helpColorTransform = new dragonBones.ColorTransform();
            this._helpPoint = new dragonBones.Point();
            this._helpArray = [];
            this._intArray = [];
            this._floatArray = [];
            this._frameIntArray = [];
            this._frameFloatArray = [];
            this._frameArray = [];
            this._timelineArray = [];
            this._colorArray = [];
            this._cacheRawMeshes = [];
            this._cacheMeshes = [];
            this._actionFrames = [];
            this._weightSlotPose = {};
            this._weightBonePoses = {};
            this._cacheBones = {};
            this._slotChildActions = {};
        }
        static _getBoolean(rawData, key, defaultValue) {
            if (key in rawData) {
                const value = rawData[key];
                const type = typeof value;
                if (type === "boolean") {
                    return value;
                }
                else if (type === "string") {
                    switch (value) {
                        case "0":
                        case "NaN":
                        case "":
                        case "false":
                        case "null":
                        case "undefined":
                            return false;
                        default:
                            return true;
                    }
                }
                else {
                    return !!value;
                }
            }
            return defaultValue;
        }
        static _getNumber(rawData, key, defaultValue) {
            if (key in rawData) {
                const value = rawData[key];
                if (value === null || value === "NaN") {
                    return defaultValue;
                }
                return +value || 0;
            }
            return defaultValue;
        }
        static _getString(rawData, key, defaultValue) {
            if (key in rawData) {
                const value = rawData[key];
                const type = typeof value;
                if (type === "string") {
                    return value;
                }
                return String(value);
            }
            return defaultValue;
        }
        _getCurvePoint(x1, y1, x2, y2, x3, y3, x4, y4, t, result) {
            const l_t = 1.0 - t;
            const powA = l_t * l_t;
            const powB = t * t;
            const kA = l_t * powA;
            const kB = 3.0 * t * powA;
            const kC = 3.0 * l_t * powB;
            const kD = t * powB;
            result.x = kA * x1 + kB * x2 + kC * x3 + kD * x4;
            result.y = kA * y1 + kB * y2 + kC * y3 + kD * y4;
        }
        _samplingEasingCurve(curve, samples) {
            const curveCount = curve.length;
            if (curveCount % 3 === 1) {
                let stepIndex = -2;
                for (let i = 0, l = samples.length; i < l; ++i) {
                    let t = (i + 1) / (l + 1); // float
                    while ((stepIndex + 6 < curveCount ? curve[stepIndex + 6] : 1) < t) { // stepIndex + 3 * 2
                        stepIndex += 6;
                    }
                    const isInCurve = stepIndex >= 0 && stepIndex + 6 < curveCount;
                    const x1 = isInCurve ? curve[stepIndex] : 0.0;
                    const y1 = isInCurve ? curve[stepIndex + 1] : 0.0;
                    const x2 = curve[stepIndex + 2];
                    const y2 = curve[stepIndex + 3];
                    const x3 = curve[stepIndex + 4];
                    const y3 = curve[stepIndex + 5];
                    const x4 = isInCurve ? curve[stepIndex + 6] : 1.0;
                    const y4 = isInCurve ? curve[stepIndex + 7] : 1.0;
                    let lower = 0.0;
                    let higher = 1.0;
                    while (higher - lower > 0.0001) {
                        const percentage = (higher + lower) * 0.5;
                        this._getCurvePoint(x1, y1, x2, y2, x3, y3, x4, y4, percentage, this._helpPoint);
                        if (t - this._helpPoint.x > 0.0) {
                            lower = percentage;
                        }
                        else {
                            higher = percentage;
                        }
                    }
                    samples[i] = this._helpPoint.y;
                }
                return true;
            }
            else {
                let stepIndex = 0;
                for (let i = 0, l = samples.length; i < l; ++i) {
                    let t = (i + 1) / (l + 1); // float
                    while (curve[stepIndex + 6] < t) { // stepIndex + 3 * 2
                        stepIndex += 6;
                    }
                    const x1 = curve[stepIndex];
                    const y1 = curve[stepIndex + 1];
                    const x2 = curve[stepIndex + 2];
                    const y2 = curve[stepIndex + 3];
                    const x3 = curve[stepIndex + 4];
                    const y3 = curve[stepIndex + 5];
                    const x4 = curve[stepIndex + 6];
                    const y4 = curve[stepIndex + 7];
                    let lower = 0.0;
                    let higher = 1.0;
                    while (higher - lower > 0.0001) {
                        const percentage = (higher + lower) * 0.5;
                        this._getCurvePoint(x1, y1, x2, y2, x3, y3, x4, y4, percentage, this._helpPoint);
                        if (t - this._helpPoint.x > 0.0) {
                            lower = percentage;
                        }
                        else {
                            higher = percentage;
                        }
                    }
                    samples[i] = this._helpPoint.y;
                }
                return false;
            }
        }
        _parseActionDataInFrame(rawData, frameStart, bone, slot) {
            if (dragonBones.DataParser.EVENT in rawData) {
                this._mergeActionFrame(rawData[dragonBones.DataParser.EVENT], frameStart, 10 /* Frame */, bone, slot);
            }
            if (dragonBones.DataParser.SOUND in rawData) {
                this._mergeActionFrame(rawData[dragonBones.DataParser.SOUND], frameStart, 11 /* Sound */, bone, slot);
            }
            if (dragonBones.DataParser.ACTION in rawData) {
                this._mergeActionFrame(rawData[dragonBones.DataParser.ACTION], frameStart, 0 /* Play */, bone, slot);
            }
            if (dragonBones.DataParser.EVENTS in rawData) {
                this._mergeActionFrame(rawData[dragonBones.DataParser.EVENTS], frameStart, 10 /* Frame */, bone, slot);
            }
            if (dragonBones.DataParser.ACTIONS in rawData) {
                this._mergeActionFrame(rawData[dragonBones.DataParser.ACTIONS], frameStart, 0 /* Play */, bone, slot);
            }
        }
        _mergeActionFrame(rawData, frameStart, type, bone, slot) {
            const actionOffset = this._armature.actions.length;
            const actions = this._parseActionData(rawData, type, bone, slot);
            let frameIndex = 0;
            let frame = null;
            for (const action of actions) {
                this._armature.addAction(action, false);
            }
            if (this._actionFrames.length === 0) { // First frame.
                frame = new ActionFrame();
                frame.frameStart = 0;
                this._actionFrames.push(frame);
                frame = null;
            }
            for (const eachFrame of this._actionFrames) { // Get same frame.
                if (eachFrame.frameStart === frameStart) {
                    frame = eachFrame;
                    break;
                }
                else if (eachFrame.frameStart > frameStart) {
                    break;
                }
                frameIndex++;
            }
            if (frame === null) { // Create and cache frame.
                frame = new ActionFrame();
                frame.frameStart = frameStart;
                this._actionFrames.splice(frameIndex, 0, frame);
            }
            for (let i = 0; i < actions.length; ++i) { // Cache action offsets.
                frame.actions.push(actionOffset + i);
            }
        }
        _parseArmature(rawData, scale) {
            const armature = dragonBones.BaseObject.borrowObject(dragonBones.ArmatureData);
            armature.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            armature.frameRate = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.FRAME_RATE, this._data.frameRate);
            armature.scale = scale;
            if (dragonBones.DataParser.TYPE in rawData && typeof rawData[dragonBones.DataParser.TYPE] === "string") {
                armature.type = dragonBones.DataParser._getArmatureType(rawData[dragonBones.DataParser.TYPE]);
            }
            else {
                armature.type = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.TYPE, 0 /* Armature */);
            }
            if (armature.frameRate === 0) { // Data error.
                armature.frameRate = 24;
            }
            this._armature = armature;
            if (dragonBones.DataParser.CANVAS in rawData) {
                const rawCanvas = rawData[dragonBones.DataParser.CANVAS];
                const canvas = dragonBones.BaseObject.borrowObject(dragonBones.CanvasData);
                if (dragonBones.DataParser.COLOR in rawCanvas) {
                    canvas.hasBackground = true;
                }
                else {
                    canvas.hasBackground = false;
                }
                canvas.color = ObjectDataParser._getNumber(rawCanvas, dragonBones.DataParser.COLOR, 0);
                canvas.x = ObjectDataParser._getNumber(rawCanvas, dragonBones.DataParser.X, 0) * armature.scale;
                canvas.y = ObjectDataParser._getNumber(rawCanvas, dragonBones.DataParser.Y, 0) * armature.scale;
                canvas.width = ObjectDataParser._getNumber(rawCanvas, dragonBones.DataParser.WIDTH, 0) * armature.scale;
                canvas.height = ObjectDataParser._getNumber(rawCanvas, dragonBones.DataParser.HEIGHT, 0) * armature.scale;
                armature.canvas = canvas;
            }
            if (dragonBones.DataParser.AABB in rawData) {
                const rawAABB = rawData[dragonBones.DataParser.AABB];
                armature.aabb.x = ObjectDataParser._getNumber(rawAABB, dragonBones.DataParser.X, 0.0) * armature.scale;
                armature.aabb.y = ObjectDataParser._getNumber(rawAABB, dragonBones.DataParser.Y, 0.0) * armature.scale;
                armature.aabb.width = ObjectDataParser._getNumber(rawAABB, dragonBones.DataParser.WIDTH, 0.0) * armature.scale;
                armature.aabb.height = ObjectDataParser._getNumber(rawAABB, dragonBones.DataParser.HEIGHT, 0.0) * armature.scale;
            }
            if (dragonBones.DataParser.BONE in rawData) {
                const rawBones = rawData[dragonBones.DataParser.BONE];
                for (const rawBone of rawBones) {
                    const parentName = ObjectDataParser._getString(rawBone, dragonBones.DataParser.PARENT, "");
                    const bone = this._parseBone(rawBone);
                    if (parentName.length > 0) { // Get bone parent.
                        const parent = armature.getBone(parentName);
                        if (parent !== null) {
                            bone.parent = parent;
                        }
                        else { // Cache.
                            if (!(parentName in this._cacheBones)) {
                                this._cacheBones[parentName] = [];
                            }
                            this._cacheBones[parentName].push(bone);
                        }
                    }
                    if (bone.name in this._cacheBones) {
                        for (const child of this._cacheBones[bone.name]) {
                            child.parent = bone;
                        }
                        delete this._cacheBones[bone.name];
                    }
                    armature.addBone(bone);
                    this._rawBones.push(bone); // Cache raw bones sort.
                }
            }
            if (dragonBones.DataParser.IK in rawData) {
                const rawIKS = rawData[dragonBones.DataParser.IK];
                for (const rawIK of rawIKS) {
                    const constraint = this._parseIKConstraint(rawIK);
                    if (constraint) {
                        armature.addConstraint(constraint);
                    }
                }
            }
            armature.sortBones();
            if (dragonBones.DataParser.SLOT in rawData) {
                let zOrder = 0;
                const rawSlots = rawData[dragonBones.DataParser.SLOT];
                for (const rawSlot of rawSlots) {
                    armature.addSlot(this._parseSlot(rawSlot, zOrder++));
                }
            }
            if (dragonBones.DataParser.SKIN in rawData) {
                const rawSkins = rawData[dragonBones.DataParser.SKIN];
                for (const rawSkin of rawSkins) {
                    armature.addSkin(this._parseSkin(rawSkin));
                }
            }
            if (dragonBones.DataParser.PATH_CONSTRAINT in rawData) {
                const rawPaths = rawData[dragonBones.DataParser.PATH_CONSTRAINT];
                for (const rawPath of rawPaths) {
                    const constraint = this._parsePathConstraint(rawPath);
                    if (constraint) {
                        armature.addConstraint(constraint);
                    }
                }
            }
            for (let i = 0, l = this._cacheRawMeshes.length; i < l; ++i) { // Link mesh.
                const rawData = this._cacheRawMeshes[i];
                const shareName = ObjectDataParser._getString(rawData, dragonBones.DataParser.SHARE, "");
                if (shareName.length === 0) {
                    continue;
                }
                let skinName = ObjectDataParser._getString(rawData, dragonBones.DataParser.SKIN, dragonBones.DataParser.DEFAULT_NAME);
                if (skinName.length === 0) { // 
                    skinName = dragonBones.DataParser.DEFAULT_NAME;
                }
                const shareMesh = armature.getMesh(skinName, "", shareName); // TODO slot;
                if (shareMesh === null) {
                    continue; // Error.
                }
                const mesh = this._cacheMeshes[i];
                mesh.geometry.shareFrom(shareMesh.geometry);
            }
            if (dragonBones.DataParser.ANIMATION in rawData) {
                const rawAnimations = rawData[dragonBones.DataParser.ANIMATION];
                for (const rawAnimation of rawAnimations) {
                    const animation = this._parseAnimation(rawAnimation);
                    armature.addAnimation(animation);
                }
            }
            if (dragonBones.DataParser.DEFAULT_ACTIONS in rawData) {
                const actions = this._parseActionData(rawData[dragonBones.DataParser.DEFAULT_ACTIONS], 0 /* Play */, null, null);
                for (const action of actions) {
                    armature.addAction(action, true);
                    if (action.type === 0 /* Play */) { // Set default animation from default action.
                        const animation = armature.getAnimation(action.name);
                        if (animation !== null) {
                            armature.defaultAnimation = animation;
                        }
                    }
                }
            }
            if (dragonBones.DataParser.ACTIONS in rawData) {
                const actions = this._parseActionData(rawData[dragonBones.DataParser.ACTIONS], 0 /* Play */, null, null);
                for (const action of actions) {
                    armature.addAction(action, false);
                }
            }
            // Clear helper.
            this._rawBones.length = 0;
            this._cacheRawMeshes.length = 0;
            this._cacheMeshes.length = 0;
            this._armature = null;
            for (let k in this._weightSlotPose) {
                delete this._weightSlotPose[k];
            }
            for (let k in this._weightBonePoses) {
                delete this._weightBonePoses[k];
            }
            for (let k in this._cacheBones) {
                delete this._cacheBones[k];
            }
            for (let k in this._slotChildActions) {
                delete this._slotChildActions[k];
            }
            return armature;
        }
        _parseBone(rawData) {
            let type = 0 /* Bone */;
            if (dragonBones.DataParser.TYPE in rawData && typeof rawData[dragonBones.DataParser.TYPE] === "string") {
                type = dragonBones.DataParser._getBoneType(rawData[dragonBones.DataParser.TYPE]);
            }
            else {
                type = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.TYPE, 0 /* Bone */);
            }
            if (type === 0 /* Bone */) {
                const scale = this._armature.scale;
                const bone = dragonBones.BaseObject.borrowObject(dragonBones.BoneData);
                bone.inheritTranslation = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.INHERIT_TRANSLATION, true);
                bone.inheritRotation = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.INHERIT_ROTATION, true);
                bone.inheritScale = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.INHERIT_SCALE, true);
                bone.inheritReflection = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.INHERIT_REFLECTION, true);
                bone.length = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.LENGTH, 0) * scale;
                bone.alpha = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ALPHA, 1.0);
                bone.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
                if (dragonBones.DataParser.TRANSFORM in rawData) {
                    this._parseTransform(rawData[dragonBones.DataParser.TRANSFORM], bone.transform, scale);
                }
                return bone;
            }
            const surface = dragonBones.BaseObject.borrowObject(dragonBones.SurfaceData);
            surface.alpha = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ALPHA, 1.0);
            surface.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            surface.segmentX = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SEGMENT_X, 0);
            surface.segmentY = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SEGMENT_Y, 0);
            this._parseGeometry(rawData, surface.geometry);
            return surface;
        }
        _parseIKConstraint(rawData) {
            const bone = this._armature.getBone(ObjectDataParser._getString(rawData, dragonBones.DataParser.BONE, ""));
            if (bone === null) {
                return null;
            }
            const target = this._armature.getBone(ObjectDataParser._getString(rawData, dragonBones.DataParser.TARGET, ""));
            if (target === null) {
                return null;
            }
            const chain = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.CHAIN, 0);
            const constraint = dragonBones.BaseObject.borrowObject(dragonBones.IKConstraintData);
            constraint.scaleEnabled = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.SCALE, false);
            constraint.bendPositive = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.BEND_POSITIVE, true);
            constraint.weight = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.WEIGHT, 1.0);
            constraint.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            constraint.type = 0 /* IK */;
            constraint.target = target;
            if (chain > 0 && bone.parent !== null) {
                constraint.root = bone.parent;
                constraint.bone = bone;
            }
            else {
                constraint.root = bone;
                constraint.bone = null;
            }
            return constraint;
        }
        _parsePathConstraint(rawData) {
            const target = this._armature.getSlot(ObjectDataParser._getString(rawData, dragonBones.DataParser.TARGET, ""));
            if (target === null) {
                return null;
            }
            const defaultSkin = this._armature.defaultSkin;
            if (defaultSkin === null) {
                return null;
            }
            //TODO
            const targetDisplay = defaultSkin.getDisplay(target.name, ObjectDataParser._getString(rawData, dragonBones.DataParser.TARGET_DISPLAY, target.name));
            if (targetDisplay === null || !(targetDisplay instanceof dragonBones.PathDisplayData)) {
                return null;
            }
            const bones = rawData[dragonBones.DataParser.BONES];
            if (bones === null || bones.length === 0) {
                return null;
            }
            const constraint = dragonBones.BaseObject.borrowObject(dragonBones.PathConstraintData);
            constraint.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            constraint.type = 1 /* Path */;
            constraint.pathSlot = target;
            constraint.pathDisplayData = targetDisplay;
            constraint.target = target.parent;
            constraint.positionMode = dragonBones.DataParser._getPositionMode(ObjectDataParser._getString(rawData, dragonBones.DataParser.POSITION_MODE, ""));
            constraint.spacingMode = dragonBones.DataParser._getSpacingMode(ObjectDataParser._getString(rawData, dragonBones.DataParser.SPACING_MODE, ""));
            constraint.rotateMode = dragonBones.DataParser._getRotateMode(ObjectDataParser._getString(rawData, dragonBones.DataParser.ROTATE_MODE, ""));
            constraint.position = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.POSITION, 0);
            constraint.spacing = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SPACING, 0);
            constraint.rotateOffset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ROTATE_OFFSET, 0);
            constraint.rotateMix = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ROTATE_MIX, 1);
            constraint.translateMix = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.TRANSLATE_MIX, 1);
            //
            for (var boneName of bones) {
                const bone = this._armature.getBone(boneName);
                if (bone !== null) {
                    constraint.AddBone(bone);
                    if (constraint.root === null) {
                        constraint.root = bone;
                    }
                }
            }
            return constraint;
        }
        _parseSlot(rawData, zOrder) {
            const slot = dragonBones.BaseObject.borrowObject(dragonBones.SlotData);
            slot.displayIndex = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.DISPLAY_INDEX, 0);
            slot.zOrder = zOrder;
            slot.zIndex = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Z_INDEX, 0);
            slot.alpha = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ALPHA, 1.0);
            slot.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            slot.parent = this._armature.getBone(ObjectDataParser._getString(rawData, dragonBones.DataParser.PARENT, "")); //
            if (dragonBones.DataParser.BLEND_MODE in rawData && typeof rawData[dragonBones.DataParser.BLEND_MODE] === "string") {
                slot.blendMode = dragonBones.DataParser._getBlendMode(rawData[dragonBones.DataParser.BLEND_MODE]);
            }
            else {
                slot.blendMode = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.BLEND_MODE, 0 /* Normal */);
            }
            if (dragonBones.DataParser.COLOR in rawData) {
                slot.color = dragonBones.SlotData.createColor();
                this._parseColorTransform(rawData[dragonBones.DataParser.COLOR], slot.color);
            }
            else {
                slot.color = dragonBones.SlotData.DEFAULT_COLOR;
            }
            if (dragonBones.DataParser.ACTIONS in rawData) {
                this._slotChildActions[slot.name] = this._parseActionData(rawData[dragonBones.DataParser.ACTIONS], 0 /* Play */, null, null);
            }
            return slot;
        }
        _parseSkin(rawData) {
            const skin = dragonBones.BaseObject.borrowObject(dragonBones.SkinData);
            skin.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, dragonBones.DataParser.DEFAULT_NAME);
            if (skin.name.length === 0) {
                skin.name = dragonBones.DataParser.DEFAULT_NAME;
            }
            if (dragonBones.DataParser.SLOT in rawData) {
                const rawSlots = rawData[dragonBones.DataParser.SLOT];
                this._skin = skin;
                for (const rawSlot of rawSlots) {
                    const slotName = ObjectDataParser._getString(rawSlot, dragonBones.DataParser.NAME, "");
                    const slot = this._armature.getSlot(slotName);
                    if (slot !== null) {
                        this._slot = slot;
                        if (dragonBones.DataParser.DISPLAY in rawSlot) {
                            const rawDisplays = rawSlot[dragonBones.DataParser.DISPLAY];
                            for (const rawDisplay of rawDisplays) {
                                if (rawDisplay) {
                                    skin.addDisplay(slotName, this._parseDisplay(rawDisplay));
                                }
                                else {
                                    skin.addDisplay(slotName, null);
                                }
                            }
                        }
                        this._slot = null; //
                    }
                }
                this._skin = null; //
            }
            return skin;
        }
        _parseDisplay(rawData) {
            const name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            const path = ObjectDataParser._getString(rawData, dragonBones.DataParser.PATH, "");
            let type = 0 /* Image */;
            let display = null;
            if (dragonBones.DataParser.TYPE in rawData && typeof rawData[dragonBones.DataParser.TYPE] === "string") {
                type = dragonBones.DataParser._getDisplayType(rawData[dragonBones.DataParser.TYPE]);
            }
            else {
                type = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.TYPE, type);
            }
            switch (type) {
                case 0 /* Image */: {
                    const imageDisplay = display = dragonBones.BaseObject.borrowObject(dragonBones.ImageDisplayData);
                    imageDisplay.name = name;
                    imageDisplay.path = path.length > 0 ? path : name;
                    this._parsePivot(rawData, imageDisplay);
                    break;
                }
                case 1 /* Armature */: {
                    const armatureDisplay = display = dragonBones.BaseObject.borrowObject(dragonBones.ArmatureDisplayData);
                    armatureDisplay.name = name;
                    armatureDisplay.path = path.length > 0 ? path : name;
                    armatureDisplay.inheritAnimation = true;
                    if (dragonBones.DataParser.ACTIONS in rawData) {
                        const actions = this._parseActionData(rawData[dragonBones.DataParser.ACTIONS], 0 /* Play */, null, null);
                        for (const action of actions) {
                            armatureDisplay.addAction(action);
                        }
                    }
                    else if (this._slot.name in this._slotChildActions) {
                        const displays = this._skin.getDisplays(this._slot.name);
                        if (displays === null ? this._slot.displayIndex === 0 : this._slot.displayIndex === displays.length) {
                            for (const action of this._slotChildActions[this._slot.name]) {
                                armatureDisplay.addAction(action);
                            }
                            delete this._slotChildActions[this._slot.name];
                        }
                    }
                    break;
                }
                case 2 /* Mesh */: {
                    const meshDisplay = display = dragonBones.BaseObject.borrowObject(dragonBones.MeshDisplayData);
                    meshDisplay.geometry.inheritDeform = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.INHERIT_DEFORM, true);
                    meshDisplay.name = name;
                    meshDisplay.path = path.length > 0 ? path : name;
                    if (dragonBones.DataParser.SHARE in rawData) {
                        meshDisplay.geometry.data = this._data;
                        this._cacheRawMeshes.push(rawData);
                        this._cacheMeshes.push(meshDisplay);
                    }
                    else {
                        this._parseMesh(rawData, meshDisplay);
                    }
                    break;
                }
                case 3 /* BoundingBox */: {
                    const boundingBox = this._parseBoundingBox(rawData);
                    if (boundingBox !== null) {
                        const boundingBoxDisplay = display = dragonBones.BaseObject.borrowObject(dragonBones.BoundingBoxDisplayData);
                        boundingBoxDisplay.name = name;
                        boundingBoxDisplay.path = path.length > 0 ? path : name;
                        boundingBoxDisplay.boundingBox = boundingBox;
                    }
                    break;
                }
                case 4 /* Path */: {
                    const rawCurveLengths = rawData[dragonBones.DataParser.LENGTHS];
                    const pathDisplay = display = dragonBones.BaseObject.borrowObject(dragonBones.PathDisplayData);
                    pathDisplay.closed = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.CLOSED, false);
                    pathDisplay.constantSpeed = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.CONSTANT_SPEED, false);
                    pathDisplay.name = name;
                    pathDisplay.path = path.length > 0 ? path : name;
                    pathDisplay.curveLengths.length = rawCurveLengths.length;
                    for (let i = 0, l = rawCurveLengths.length; i < l; ++i) {
                        pathDisplay.curveLengths[i] = rawCurveLengths[i];
                    }
                    this._parsePath(rawData, pathDisplay);
                    break;
                }
            }
            if (display !== null && dragonBones.DataParser.TRANSFORM in rawData) {
                this._parseTransform(rawData[dragonBones.DataParser.TRANSFORM], display.transform, this._armature.scale);
            }
            return display;
        }
        _parsePath(rawData, display) {
            this._parseGeometry(rawData, display.geometry);
        }
        _parsePivot(rawData, display) {
            if (dragonBones.DataParser.PIVOT in rawData) {
                const rawPivot = rawData[dragonBones.DataParser.PIVOT];
                display.pivot.x = ObjectDataParser._getNumber(rawPivot, dragonBones.DataParser.X, 0.0);
                display.pivot.y = ObjectDataParser._getNumber(rawPivot, dragonBones.DataParser.Y, 0.0);
            }
            else {
                display.pivot.x = 0.5;
                display.pivot.y = 0.5;
            }
        }
        _parseMesh(rawData, mesh) {
            this._parseGeometry(rawData, mesh.geometry);
            if (dragonBones.DataParser.WEIGHTS in rawData) { // Cache pose data.
                const rawSlotPose = rawData[dragonBones.DataParser.SLOT_POSE];
                const rawBonePoses = rawData[dragonBones.DataParser.BONE_POSE];
                const meshName = this._skin.name + "_" + this._slot.name + "_" + mesh.name;
                this._weightSlotPose[meshName] = rawSlotPose;
                this._weightBonePoses[meshName] = rawBonePoses;
            }
        }
        _parseBoundingBox(rawData) {
            let boundingBox = null;
            let type = 0 /* Rectangle */;
            if (dragonBones.DataParser.SUB_TYPE in rawData && typeof rawData[dragonBones.DataParser.SUB_TYPE] === "string") {
                type = dragonBones.DataParser._getBoundingBoxType(rawData[dragonBones.DataParser.SUB_TYPE]);
            }
            else {
                type = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SUB_TYPE, type);
            }
            switch (type) {
                case 0 /* Rectangle */:
                    boundingBox = dragonBones.BaseObject.borrowObject(dragonBones.RectangleBoundingBoxData);
                    break;
                case 1 /* Ellipse */:
                    boundingBox = dragonBones.BaseObject.borrowObject(dragonBones.EllipseBoundingBoxData);
                    break;
                case 2 /* Polygon */:
                    boundingBox = this._parsePolygonBoundingBox(rawData);
                    break;
            }
            if (boundingBox !== null) {
                boundingBox.color = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.COLOR, 0x000000);
                if (boundingBox.type === 0 /* Rectangle */ || boundingBox.type === 1 /* Ellipse */) {
                    boundingBox.width = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.WIDTH, 0.0);
                    boundingBox.height = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.HEIGHT, 0.0);
                }
            }
            return boundingBox;
        }
        _parsePolygonBoundingBox(rawData) {
            const polygonBoundingBox = dragonBones.BaseObject.borrowObject(dragonBones.PolygonBoundingBoxData);
            if (dragonBones.DataParser.VERTICES in rawData) {
                const scale = this._armature.scale;
                const rawVertices = rawData[dragonBones.DataParser.VERTICES];
                const vertices = polygonBoundingBox.vertices;
                vertices.length = rawVertices.length;
                for (let i = 0, l = rawVertices.length; i < l; i += 2) {
                    const x = rawVertices[i] * scale;
                    const y = rawVertices[i + 1] * scale;
                    vertices[i] = x;
                    vertices[i + 1] = y;
                    // AABB.
                    if (i === 0) {
                        polygonBoundingBox.x = x;
                        polygonBoundingBox.y = y;
                        polygonBoundingBox.width = x;
                        polygonBoundingBox.height = y;
                    }
                    else {
                        if (x < polygonBoundingBox.x) {
                            polygonBoundingBox.x = x;
                        }
                        else if (x > polygonBoundingBox.width) {
                            polygonBoundingBox.width = x;
                        }
                        if (y < polygonBoundingBox.y) {
                            polygonBoundingBox.y = y;
                        }
                        else if (y > polygonBoundingBox.height) {
                            polygonBoundingBox.height = y;
                        }
                    }
                }
                polygonBoundingBox.width -= polygonBoundingBox.x;
                polygonBoundingBox.height -= polygonBoundingBox.y;
            }
            else {
                console.warn("Data error.\n Please reexport DragonBones Data to fixed the bug.");
            }
            return polygonBoundingBox;
        }
        _parseAnimation(rawData) {
            const animation = dragonBones.BaseObject.borrowObject(dragonBones.AnimationData);
            animation.blendType = dragonBones.DataParser._getAnimationBlendType(ObjectDataParser._getString(rawData, dragonBones.DataParser.BLEND_TYPE, ""));
            animation.frameCount = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.DURATION, 0);
            animation.playTimes = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.PLAY_TIMES, 1);
            animation.duration = animation.frameCount / this._armature.frameRate; // float
            animation.fadeInTime = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.FADE_IN_TIME, 0.0);
            animation.scale = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SCALE, 1.0);
            animation.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, dragonBones.DataParser.DEFAULT_NAME);
            if (animation.name.length === 0) {
                animation.name = dragonBones.DataParser.DEFAULT_NAME;
            }
            animation.frameIntOffset = this._frameIntArray.length;
            animation.frameFloatOffset = this._frameFloatArray.length;
            animation.frameOffset = this._frameArray.length;
            this._animation = animation;
            if (dragonBones.DataParser.FRAME in rawData) {
                const rawFrames = rawData[dragonBones.DataParser.FRAME];
                const keyFrameCount = rawFrames.length;
                if (keyFrameCount > 0) {
                    for (let i = 0, frameStart = 0; i < keyFrameCount; ++i) {
                        const rawFrame = rawFrames[i];
                        this._parseActionDataInFrame(rawFrame, frameStart, null, null);
                        frameStart += ObjectDataParser._getNumber(rawFrame, dragonBones.DataParser.DURATION, 1);
                    }
                }
            }
            if (dragonBones.DataParser.Z_ORDER in rawData) {
                this._animation.zOrderTimeline = this._parseTimeline(rawData[dragonBones.DataParser.Z_ORDER], null, dragonBones.DataParser.FRAME, 1 /* ZOrder */, 0 /* Step */, 0, this._parseZOrderFrame);
            }
            if (dragonBones.DataParser.BONE in rawData) {
                const rawTimelines = rawData[dragonBones.DataParser.BONE];
                for (const rawTimeline of rawTimelines) {
                    this._parseBoneTimeline(rawTimeline);
                }
            }
            if (dragonBones.DataParser.SLOT in rawData) {
                const rawTimelines = rawData[dragonBones.DataParser.SLOT];
                for (const rawTimeline of rawTimelines) {
                    this._parseSlotTimeline(rawTimeline);
                }
            }
            if (dragonBones.DataParser.FFD in rawData) {
                const rawTimelines = rawData[dragonBones.DataParser.FFD];
                for (const rawTimeline of rawTimelines) {
                    let skinName = ObjectDataParser._getString(rawTimeline, dragonBones.DataParser.SKIN, dragonBones.DataParser.DEFAULT_NAME);
                    const slotName = ObjectDataParser._getString(rawTimeline, dragonBones.DataParser.SLOT, "");
                    const displayName = ObjectDataParser._getString(rawTimeline, dragonBones.DataParser.NAME, "");
                    if (skinName.length === 0) { //
                        skinName = dragonBones.DataParser.DEFAULT_NAME;
                    }
                    this._slot = this._armature.getSlot(slotName);
                    this._mesh = this._armature.getMesh(skinName, slotName, displayName);
                    if (this._slot === null || this._mesh === null) {
                        continue;
                    }
                    const timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, 22 /* SlotDeform */, 2 /* Float */, 0, this._parseSlotDeformFrame);
                    if (timeline !== null) {
                        this._animation.addSlotTimeline(slotName, timeline);
                    }
                    this._slot = null; //
                    this._mesh = null; //
                }
            }
            if (dragonBones.DataParser.IK in rawData) {
                const rawTimelines = rawData[dragonBones.DataParser.IK];
                for (const rawTimeline of rawTimelines) {
                    const constraintName = ObjectDataParser._getString(rawTimeline, dragonBones.DataParser.NAME, "");
                    const constraint = this._armature.getConstraint(constraintName);
                    if (constraint === null) {
                        continue;
                    }
                    const timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, 30 /* IKConstraint */, 1 /* Int */, 2, this._parseIKConstraintFrame);
                    if (timeline !== null) {
                        this._animation.addConstraintTimeline(constraintName, timeline);
                    }
                }
            }
            if (this._actionFrames.length > 0) {
                this._animation.actionTimeline = this._parseTimeline(null, this._actionFrames, "", 0 /* Action */, 0 /* Step */, 0, this._parseActionFrame);
                this._actionFrames.length = 0;
            }
            if (dragonBones.DataParser.TIMELINE in rawData) {
                const rawTimelines = rawData[dragonBones.DataParser.TIMELINE];
                for (const rawTimeline of rawTimelines) {
                    const timelineType = ObjectDataParser._getNumber(rawTimeline, dragonBones.DataParser.TYPE, 0 /* Action */);
                    const timelineName = ObjectDataParser._getString(rawTimeline, dragonBones.DataParser.NAME, "");
                    let timeline = null;
                    switch (timelineType) {
                        case 0 /* Action */:
                            // TODO
                            break;
                        case 20 /* SlotDisplay */: // TODO
                        case 23 /* SlotZIndex */:
                        case 60 /* BoneAlpha */:
                        case 24 /* SlotAlpha */:
                        case 40 /* AnimationProgress */:
                        case 41 /* AnimationWeight */:
                            if (timelineType === 20 /* SlotDisplay */) {
                                this._frameValueType = 0 /* Step */;
                                this._frameValueScale = 1.0;
                            }
                            else {
                                this._frameValueType = 1 /* Int */;
                                if (timelineType === 23 /* SlotZIndex */) {
                                    this._frameValueScale = 1.0;
                                }
                                else if (timelineType === 40 /* AnimationProgress */ ||
                                    timelineType === 41 /* AnimationWeight */) {
                                    this._frameValueScale = 10000.0;
                                }
                                else {
                                    this._frameValueScale = 100.0;
                                }
                            }
                            if (timelineType === 60 /* BoneAlpha */ ||
                                timelineType === 24 /* SlotAlpha */ ||
                                timelineType === 41 /* AnimationWeight */) {
                                this._frameDefaultValue = 1.0;
                            }
                            else {
                                this._frameDefaultValue = 0.0;
                            }
                            if (timelineType === 40 /* AnimationProgress */ && animation.blendType !== 0 /* None */) {
                                timeline = dragonBones.BaseObject.borrowObject(dragonBones.AnimationTimelineData);
                                const animaitonTimeline = timeline;
                                animaitonTimeline.x = ObjectDataParser._getNumber(rawTimeline, dragonBones.DataParser.X, 0.0);
                                animaitonTimeline.y = ObjectDataParser._getNumber(rawTimeline, dragonBones.DataParser.Y, 0.0);
                            }
                            timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, timelineType, this._frameValueType, 1, this._parseSingleValueFrame, timeline);
                            break;
                        case 11 /* BoneTranslate */:
                        case 12 /* BoneRotate */:
                        case 13 /* BoneScale */:
                        case 30 /* IKConstraint */:
                        case 42 /* AnimationParameter */:
                            if (timelineType === 30 /* IKConstraint */ ||
                                timelineType === 42 /* AnimationParameter */) {
                                this._frameValueType = 1 /* Int */;
                                if (timelineType === 42 /* AnimationParameter */) {
                                    this._frameValueScale = 10000.0;
                                }
                                else {
                                    this._frameValueScale = 100.0;
                                }
                            }
                            else {
                                if (timelineType === 12 /* BoneRotate */) {
                                    this._frameValueScale = dragonBones.Transform.DEG_RAD;
                                }
                                else {
                                    this._frameValueScale = 1.0;
                                }
                                this._frameValueType = 2 /* Float */;
                            }
                            if (timelineType === 13 /* BoneScale */ ||
                                timelineType === 30 /* IKConstraint */) {
                                this._frameDefaultValue = 1.0;
                            }
                            else {
                                this._frameDefaultValue = 0.0;
                            }
                            timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, timelineType, this._frameValueType, 2, this._parseDoubleValueFrame);
                            break;
                        case 1 /* ZOrder */:
                            // TODO
                            break;
                        case 50 /* Surface */: {
                            const surface = this._armature.getBone(timelineName);
                            if (surface === null) {
                                continue;
                            }
                            this._geometry = surface.geometry;
                            timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, timelineType, 2 /* Float */, 0, this._parseDeformFrame);
                            this._geometry = null; //
                            break;
                        }
                        case 22 /* SlotDeform */: {
                            this._geometry = null; //
                            for (const skinName in this._armature.skins) {
                                const skin = this._armature.skins[skinName];
                                for (const slontName in skin.displays) {
                                    const displays = skin.displays[slontName];
                                    for (const display of displays) {
                                        if (display !== null && display.name === timelineName) {
                                            this._geometry = display.geometry;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (this._geometry === null) {
                                continue;
                            }
                            timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, timelineType, 2 /* Float */, 0, this._parseDeformFrame);
                            this._geometry = null; //
                            break;
                        }
                        case 21 /* SlotColor */:
                            timeline = this._parseTimeline(rawTimeline, null, dragonBones.DataParser.FRAME, timelineType, 1 /* Int */, 1, this._parseSlotColorFrame);
                            break;
                    }
                    if (timeline !== null) {
                        switch (timelineType) {
                            case 0 /* Action */:
                                // TODO
                                break;
                            case 1 /* ZOrder */:
                                // TODO
                                break;
                            case 11 /* BoneTranslate */:
                            case 12 /* BoneRotate */:
                            case 13 /* BoneScale */:
                            case 50 /* Surface */:
                            case 60 /* BoneAlpha */:
                                this._animation.addBoneTimeline(timelineName, timeline);
                                break;
                            case 20 /* SlotDisplay */:
                            case 21 /* SlotColor */:
                            case 22 /* SlotDeform */:
                            case 23 /* SlotZIndex */:
                            case 24 /* SlotAlpha */:
                                this._animation.addSlotTimeline(timelineName, timeline);
                                break;
                            case 30 /* IKConstraint */:
                                this._animation.addConstraintTimeline(timelineName, timeline);
                                break;
                            case 40 /* AnimationProgress */:
                            case 41 /* AnimationWeight */:
                            case 42 /* AnimationParameter */:
                                this._animation.addAnimationTimeline(timelineName, timeline);
                                break;
                        }
                    }
                }
            }
            this._animation = null; //
            return animation;
        }
        _parseTimeline(rawData, rawFrames, framesKey, timelineType, frameValueType, frameValueCount, frameParser, timeline = null) {
            if (rawData !== null && framesKey.length > 0 && framesKey in rawData) {
                rawFrames = rawData[framesKey];
            }
            if (rawFrames === null) {
                return null;
            }
            const keyFrameCount = rawFrames.length;
            if (keyFrameCount === 0) {
                return null;
            }
            const frameIntArrayLength = this._frameIntArray.length;
            const frameFloatArrayLength = this._frameFloatArray.length;
            const timelineOffset = this._timelineArray.length;
            if (timeline === null) {
                timeline = dragonBones.BaseObject.borrowObject(dragonBones.TimelineData);
            }
            timeline.type = timelineType;
            timeline.offset = timelineOffset;
            this._frameValueType = frameValueType;
            this._timeline = timeline;
            this._timelineArray.length += 1 + 1 + 1 + 1 + 1 + keyFrameCount;
            if (rawData !== null) {
                this._timelineArray[timelineOffset + 0 /* TimelineScale */] = Math.round(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SCALE, 1.0) * 100);
                this._timelineArray[timelineOffset + 1 /* TimelineOffset */] = Math.round(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.OFFSET, 0.0) * 100);
            }
            else {
                this._timelineArray[timelineOffset + 0 /* TimelineScale */] = 100;
                this._timelineArray[timelineOffset + 1 /* TimelineOffset */] = 0;
            }
            this._timelineArray[timelineOffset + 2 /* TimelineKeyFrameCount */] = keyFrameCount;
            this._timelineArray[timelineOffset + 3 /* TimelineFrameValueCount */] = frameValueCount;
            switch (this._frameValueType) {
                case 0 /* Step */:
                    this._timelineArray[timelineOffset + 4 /* TimelineFrameValueOffset */] = 0;
                    break;
                case 1 /* Int */:
                    this._timelineArray[timelineOffset + 4 /* TimelineFrameValueOffset */] = frameIntArrayLength - this._animation.frameIntOffset;
                    break;
                case 2 /* Float */:
                    this._timelineArray[timelineOffset + 4 /* TimelineFrameValueOffset */] = frameFloatArrayLength - this._animation.frameFloatOffset;
                    break;
            }
            if (keyFrameCount === 1) { // Only one frame.
                timeline.frameIndicesOffset = -1;
                this._timelineArray[timelineOffset + 5 /* TimelineFrameOffset */ + 0] = frameParser.call(this, rawFrames[0], 0, 0) - this._animation.frameOffset;
            }
            else {
                const totalFrameCount = this._animation.frameCount + 1; // One more frame than animation.
                const frameIndices = this._data.frameIndices;
                const frameIndicesOffset = frameIndices.length;
                frameIndices.length += totalFrameCount;
                timeline.frameIndicesOffset = frameIndicesOffset;
                for (let i = 0, iK = 0, frameStart = 0, frameCount = 0; i < totalFrameCount; ++i) {
                    if (frameStart + frameCount <= i && iK < keyFrameCount) {
                        const rawFrame = rawFrames[iK];
                        frameStart = i; // frame.frameStart;
                        if (iK === keyFrameCount - 1) {
                            frameCount = this._animation.frameCount - frameStart;
                        }
                        else {
                            if (rawFrame instanceof ActionFrame) {
                                frameCount = this._actionFrames[iK + 1].frameStart - frameStart;
                            }
                            else {
                                frameCount = ObjectDataParser._getNumber(rawFrame, dragonBones.DataParser.DURATION, 1);
                            }
                        }
                        this._timelineArray[timelineOffset + 5 /* TimelineFrameOffset */ + iK] = frameParser.call(this, rawFrame, frameStart, frameCount) - this._animation.frameOffset;
                        iK++;
                    }
                    frameIndices[frameIndicesOffset + i] = iK - 1;
                }
            }
            this._timeline = null; //
            return timeline;
        }
        _parseBoneTimeline(rawData) {
            const bone = this._armature.getBone(ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, ""));
            if (bone === null) {
                return;
            }
            this._bone = bone;
            this._slot = this._armature.getSlot(this._bone.name);
            if (dragonBones.DataParser.TRANSLATE_FRAME in rawData) {
                this._frameDefaultValue = 0.0;
                this._frameValueScale = 1.0;
                const timeline = this._parseTimeline(rawData, null, dragonBones.DataParser.TRANSLATE_FRAME, 11 /* BoneTranslate */, 2 /* Float */, 2, this._parseDoubleValueFrame);
                if (timeline !== null) {
                    this._animation.addBoneTimeline(bone.name, timeline);
                }
            }
            if (dragonBones.DataParser.ROTATE_FRAME in rawData) {
                this._frameDefaultValue = 0.0;
                this._frameValueScale = 1.0;
                const timeline = this._parseTimeline(rawData, null, dragonBones.DataParser.ROTATE_FRAME, 12 /* BoneRotate */, 2 /* Float */, 2, this._parseBoneRotateFrame);
                if (timeline !== null) {
                    this._animation.addBoneTimeline(bone.name, timeline);
                }
            }
            if (dragonBones.DataParser.SCALE_FRAME in rawData) {
                this._frameDefaultValue = 1.0;
                this._frameValueScale = 1.0;
                const timeline = this._parseTimeline(rawData, null, dragonBones.DataParser.SCALE_FRAME, 13 /* BoneScale */, 2 /* Float */, 2, this._parseBoneScaleFrame);
                if (timeline !== null) {
                    this._animation.addBoneTimeline(bone.name, timeline);
                }
            }
            if (dragonBones.DataParser.FRAME in rawData) {
                const timeline = this._parseTimeline(rawData, null, dragonBones.DataParser.FRAME, 10 /* BoneAll */, 2 /* Float */, 6, this._parseBoneAllFrame);
                if (timeline !== null) {
                    this._animation.addBoneTimeline(bone.name, timeline);
                }
            }
            this._bone = null; //
            this._slot = null; //
        }
        _parseSlotTimeline(rawData) {
            const slot = this._armature.getSlot(ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, ""));
            if (slot === null) {
                return;
            }
            let displayTimeline = null;
            let colorTimeline = null;
            this._slot = slot;
            if (dragonBones.DataParser.DISPLAY_FRAME in rawData) {
                displayTimeline = this._parseTimeline(rawData, null, dragonBones.DataParser.DISPLAY_FRAME, 20 /* SlotDisplay */, 0 /* Step */, 0, this._parseSlotDisplayFrame);
            }
            else {
                displayTimeline = this._parseTimeline(rawData, null, dragonBones.DataParser.FRAME, 20 /* SlotDisplay */, 0 /* Step */, 0, this._parseSlotDisplayFrame);
            }
            if (dragonBones.DataParser.COLOR_FRAME in rawData) {
                colorTimeline = this._parseTimeline(rawData, null, dragonBones.DataParser.COLOR_FRAME, 21 /* SlotColor */, 1 /* Int */, 1, this._parseSlotColorFrame);
            }
            else {
                colorTimeline = this._parseTimeline(rawData, null, dragonBones.DataParser.FRAME, 21 /* SlotColor */, 1 /* Int */, 1, this._parseSlotColorFrame);
            }
            if (displayTimeline !== null) {
                this._animation.addSlotTimeline(slot.name, displayTimeline);
            }
            if (colorTimeline !== null) {
                this._animation.addSlotTimeline(slot.name, colorTimeline);
            }
            this._slot = null; //
        }
        _parseFrame(rawData, frameStart, frameCount) {
            // tslint:disable-next-line:no-unused-expression
            rawData;
            // tslint:disable-next-line:no-unused-expression
            frameCount;
            const frameOffset = this._frameArray.length;
            this._frameArray.length += 1;
            this._frameArray[frameOffset + 0 /* FramePosition */] = frameStart;
            return frameOffset;
        }
        _parseTweenFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseFrame(rawData, frameStart, frameCount);
            if (frameCount > 0) {
                if (dragonBones.DataParser.CURVE in rawData) {
                    const sampleCount = frameCount + 1;
                    this._helpArray.length = sampleCount;
                    const isOmited = this._samplingEasingCurve(rawData[dragonBones.DataParser.CURVE], this._helpArray);
                    this._frameArray.length += 1 + 1 + this._helpArray.length;
                    this._frameArray[frameOffset + 1 /* FrameTweenType */] = 2 /* Curve */;
                    this._frameArray[frameOffset + 2 /* FrameTweenEasingOrCurveSampleCount */] = isOmited ? sampleCount : -sampleCount;
                    for (let i = 0; i < sampleCount; ++i) {
                        this._frameArray[frameOffset + 3 /* FrameCurveSamples */ + i] = Math.round(this._helpArray[i] * 10000.0);
                    }
                }
                else {
                    const noTween = -2.0;
                    let tweenEasing = noTween;
                    if (dragonBones.DataParser.TWEEN_EASING in rawData) {
                        tweenEasing = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.TWEEN_EASING, noTween);
                    }
                    if (tweenEasing === noTween) {
                        this._frameArray.length += 1;
                        this._frameArray[frameOffset + 1 /* FrameTweenType */] = 0 /* None */;
                    }
                    else if (tweenEasing === 0.0) {
                        this._frameArray.length += 1;
                        this._frameArray[frameOffset + 1 /* FrameTweenType */] = 1 /* Line */;
                    }
                    else if (tweenEasing < 0.0) {
                        this._frameArray.length += 1 + 1;
                        this._frameArray[frameOffset + 1 /* FrameTweenType */] = 3 /* QuadIn */;
                        this._frameArray[frameOffset + 2 /* FrameTweenEasingOrCurveSampleCount */] = Math.round(-tweenEasing * 100.0);
                    }
                    else if (tweenEasing <= 1.0) {
                        this._frameArray.length += 1 + 1;
                        this._frameArray[frameOffset + 1 /* FrameTweenType */] = 4 /* QuadOut */;
                        this._frameArray[frameOffset + 2 /* FrameTweenEasingOrCurveSampleCount */] = Math.round(tweenEasing * 100.0);
                    }
                    else {
                        this._frameArray.length += 1 + 1;
                        this._frameArray[frameOffset + 1 /* FrameTweenType */] = 5 /* QuadInOut */;
                        this._frameArray[frameOffset + 2 /* FrameTweenEasingOrCurveSampleCount */] = Math.round(tweenEasing * 100.0 - 100.0);
                    }
                }
            }
            else {
                this._frameArray.length += 1;
                this._frameArray[frameOffset + 1 /* FrameTweenType */] = 0 /* None */;
            }
            return frameOffset;
        }
        _parseSingleValueFrame(rawData, frameStart, frameCount) {
            let frameOffset = 0;
            switch (this._frameValueType) {
                case 0: {
                    frameOffset = this._parseFrame(rawData, frameStart, frameCount);
                    this._frameArray.length += 1;
                    this._frameArray[frameOffset + 1] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.VALUE, this._frameDefaultValue);
                    break;
                }
                case 1: {
                    frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
                    const frameValueOffset = this._frameIntArray.length;
                    this._frameIntArray.length += 1;
                    this._frameIntArray[frameValueOffset] = Math.round(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.VALUE, this._frameDefaultValue) * this._frameValueScale);
                    break;
                }
                case 2: {
                    frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
                    const frameValueOffset = this._frameFloatArray.length;
                    this._frameFloatArray.length += 1;
                    this._frameFloatArray[frameValueOffset] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.VALUE, this._frameDefaultValue) * this._frameValueScale;
                    break;
                }
            }
            return frameOffset;
        }
        _parseDoubleValueFrame(rawData, frameStart, frameCount) {
            let frameOffset = 0;
            switch (this._frameValueType) {
                case 0: {
                    frameOffset = this._parseFrame(rawData, frameStart, frameCount);
                    this._frameArray.length += 2;
                    this._frameArray[frameOffset + 1] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.X, this._frameDefaultValue);
                    this._frameArray[frameOffset + 2] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Y, this._frameDefaultValue);
                    break;
                }
                case 1: {
                    frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
                    const frameValueOffset = this._frameIntArray.length;
                    this._frameIntArray.length += 2;
                    this._frameIntArray[frameValueOffset] = Math.round(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.X, this._frameDefaultValue) * this._frameValueScale);
                    this._frameIntArray[frameValueOffset + 1] = Math.round(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Y, this._frameDefaultValue) * this._frameValueScale);
                    break;
                }
                case 2: {
                    frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
                    const frameValueOffset = this._frameFloatArray.length;
                    this._frameFloatArray.length += 2;
                    this._frameFloatArray[frameValueOffset] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.X, this._frameDefaultValue) * this._frameValueScale;
                    this._frameFloatArray[frameValueOffset + 1] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Y, this._frameDefaultValue) * this._frameValueScale;
                    break;
                }
            }
            return frameOffset;
        }
        _parseActionFrame(frame, frameStart, frameCount) {
            // tslint:disable-next-line:no-unused-expression
            frameCount;
            const frameOffset = this._frameArray.length;
            const actionCount = frame.actions.length;
            this._frameArray.length += 1 + 1 + actionCount;
            this._frameArray[frameOffset + 0 /* FramePosition */] = frameStart;
            this._frameArray[frameOffset + 0 /* FramePosition */ + 1] = actionCount; // Action count.
            for (let i = 0; i < actionCount; ++i) { // Action offsets.
                this._frameArray[frameOffset + 0 /* FramePosition */ + 2 + i] = frame.actions[i];
            }
            return frameOffset;
        }
        _parseZOrderFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseFrame(rawData, frameStart, frameCount);
            if (dragonBones.DataParser.Z_ORDER in rawData) {
                const rawZOrder = rawData[dragonBones.DataParser.Z_ORDER];
                if (rawZOrder.length > 0) {
                    const slotCount = this._armature.sortedSlots.length;
                    const unchanged = new Array(slotCount - rawZOrder.length / 2);
                    const zOrders = new Array(slotCount);
                    for (let i = 0; i < unchanged.length; ++i) {
                        unchanged[i] = 0;
                    }
                    for (let i = 0; i < slotCount; ++i) {
                        zOrders[i] = -1;
                    }
                    let originalIndex = 0;
                    let unchangedIndex = 0;
                    for (let i = 0, l = rawZOrder.length; i < l; i += 2) {
                        const slotIndex = rawZOrder[i];
                        const zOrderOffset = rawZOrder[i + 1];
                        while (originalIndex !== slotIndex) {
                            unchanged[unchangedIndex++] = originalIndex++;
                        }
                        const index = originalIndex + zOrderOffset;
                        zOrders[index] = originalIndex++;
                    }
                    while (originalIndex < slotCount) {
                        unchanged[unchangedIndex++] = originalIndex++;
                    }
                    this._frameArray.length += 1 + slotCount;
                    this._frameArray[frameOffset + 1] = slotCount;
                    let i = slotCount;
                    while (i--) {
                        if (zOrders[i] === -1) {
                            this._frameArray[frameOffset + 2 + i] = unchanged[--unchangedIndex] || 0;
                        }
                        else {
                            this._frameArray[frameOffset + 2 + i] = zOrders[i] || 0;
                        }
                    }
                    return frameOffset;
                }
            }
            this._frameArray.length += 1;
            this._frameArray[frameOffset + 1] = 0;
            return frameOffset;
        }
        _parseBoneAllFrame(rawData, frameStart, frameCount) {
            this._helpTransform.identity();
            if (dragonBones.DataParser.TRANSFORM in rawData) {
                this._parseTransform(rawData[dragonBones.DataParser.TRANSFORM], this._helpTransform, 1.0);
            }
            // Modify rotation.
            let rotation = this._helpTransform.rotation;
            if (frameStart !== 0) {
                if (this._prevClockwise === 0) {
                    rotation = this._prevRotation + dragonBones.Transform.normalizeRadian(rotation - this._prevRotation);
                }
                else {
                    if (this._prevClockwise > 0 ? rotation >= this._prevRotation : rotation <= this._prevRotation) {
                        this._prevClockwise = this._prevClockwise > 0 ? this._prevClockwise - 1 : this._prevClockwise + 1;
                    }
                    rotation = this._prevRotation + rotation - this._prevRotation + dragonBones.Transform.PI_D * this._prevClockwise;
                }
            }
            this._prevClockwise = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.TWEEN_ROTATE, 0.0);
            this._prevRotation = rotation;
            //
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            let frameFloatOffset = this._frameFloatArray.length;
            this._frameFloatArray.length += 6;
            this._frameFloatArray[frameFloatOffset++] = this._helpTransform.x;
            this._frameFloatArray[frameFloatOffset++] = this._helpTransform.y;
            this._frameFloatArray[frameFloatOffset++] = rotation;
            this._frameFloatArray[frameFloatOffset++] = this._helpTransform.skew;
            this._frameFloatArray[frameFloatOffset++] = this._helpTransform.scaleX;
            this._frameFloatArray[frameFloatOffset++] = this._helpTransform.scaleY;
            this._parseActionDataInFrame(rawData, frameStart, this._bone, this._slot);
            return frameOffset;
        }
        _parseBoneTranslateFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            let frameFloatOffset = this._frameFloatArray.length;
            this._frameFloatArray.length += 2;
            this._frameFloatArray[frameFloatOffset++] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.X, 0.0);
            this._frameFloatArray[frameFloatOffset++] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Y, 0.0);
            return frameOffset;
        }
        _parseBoneRotateFrame(rawData, frameStart, frameCount) {
            // Modify rotation.
            let rotation = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ROTATE, 0.0) * dragonBones.Transform.DEG_RAD;
            if (frameStart !== 0) {
                if (this._prevClockwise === 0) {
                    rotation = this._prevRotation + dragonBones.Transform.normalizeRadian(rotation - this._prevRotation);
                }
                else {
                    if (this._prevClockwise > 0 ? rotation >= this._prevRotation : rotation <= this._prevRotation) {
                        this._prevClockwise = this._prevClockwise > 0 ? this._prevClockwise - 1 : this._prevClockwise + 1;
                    }
                    rotation = this._prevRotation + rotation - this._prevRotation + dragonBones.Transform.PI_D * this._prevClockwise;
                }
            }
            this._prevClockwise = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.CLOCK_WISE, 0);
            this._prevRotation = rotation;
            //
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            let frameFloatOffset = this._frameFloatArray.length;
            this._frameFloatArray.length += 2;
            this._frameFloatArray[frameFloatOffset++] = rotation;
            this._frameFloatArray[frameFloatOffset++] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SKEW, 0.0) * dragonBones.Transform.DEG_RAD;
            return frameOffset;
        }
        _parseBoneScaleFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            let frameFloatOffset = this._frameFloatArray.length;
            this._frameFloatArray.length += 2;
            this._frameFloatArray[frameFloatOffset++] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.X, 1.0);
            this._frameFloatArray[frameFloatOffset++] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Y, 1.0);
            return frameOffset;
        }
        _parseSlotDisplayFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseFrame(rawData, frameStart, frameCount);
            this._frameArray.length += 1;
            if (dragonBones.DataParser.VALUE in rawData) {
                this._frameArray[frameOffset + 1] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.VALUE, 0);
            }
            else {
                this._frameArray[frameOffset + 1] = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.DISPLAY_INDEX, 0);
            }
            this._parseActionDataInFrame(rawData, frameStart, this._slot.parent, this._slot);
            return frameOffset;
        }
        _parseSlotColorFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            let colorOffset = -1;
            if (dragonBones.DataParser.VALUE in rawData || dragonBones.DataParser.COLOR in rawData) {
                const rawColor = dragonBones.DataParser.VALUE in rawData ? rawData[dragonBones.DataParser.VALUE] : rawData[dragonBones.DataParser.COLOR];
                for (let k in rawColor) { // Detects the presence of color.
                    // tslint:disable-next-line:no-unused-expression
                    k;
                    this._parseColorTransform(rawColor, this._helpColorTransform);
                    colorOffset = this._colorArray.length;
                    this._colorArray.length += 8;
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.alphaMultiplier * 100);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.redMultiplier * 100);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.greenMultiplier * 100);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.blueMultiplier * 100);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.alphaOffset);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.redOffset);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.greenOffset);
                    this._colorArray[colorOffset++] = Math.round(this._helpColorTransform.blueOffset);
                    colorOffset -= 8;
                    break;
                }
            }
            if (colorOffset < 0) {
                if (this._defaultColorOffset < 0) {
                    this._defaultColorOffset = colorOffset = this._colorArray.length;
                    this._colorArray.length += 8;
                    this._colorArray[colorOffset++] = 100;
                    this._colorArray[colorOffset++] = 100;
                    this._colorArray[colorOffset++] = 100;
                    this._colorArray[colorOffset++] = 100;
                    this._colorArray[colorOffset++] = 0;
                    this._colorArray[colorOffset++] = 0;
                    this._colorArray[colorOffset++] = 0;
                    this._colorArray[colorOffset++] = 0;
                }
                colorOffset = this._defaultColorOffset;
            }
            const frameIntOffset = this._frameIntArray.length;
            this._frameIntArray.length += 1;
            this._frameIntArray[frameIntOffset] = colorOffset;
            return frameOffset;
        }
        _parseSlotDeformFrame(rawData, frameStart, frameCount) {
            const frameFloatOffset = this._frameFloatArray.length;
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            const rawVertices = dragonBones.DataParser.VERTICES in rawData ? rawData[dragonBones.DataParser.VERTICES] : null;
            const offset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.OFFSET, 0); // uint
            const vertexCount = this._intArray[this._mesh.geometry.offset + 0 /* GeometryVertexCount */];
            const meshName = this._mesh.parent.name + "_" + this._slot.name + "_" + this._mesh.name;
            const weight = this._mesh.geometry.weight;
            let x = 0.0;
            let y = 0.0;
            let iB = 0;
            let iV = 0;
            if (weight !== null) {
                const rawSlotPose = this._weightSlotPose[meshName];
                this._helpMatrixA.copyFromArray(rawSlotPose, 0);
                this._frameFloatArray.length += weight.count * 2;
                iB = weight.offset + 2 /* WeigthBoneIndices */ + weight.bones.length;
            }
            else {
                this._frameFloatArray.length += vertexCount * 2;
            }
            for (let i = 0; i < vertexCount * 2; i += 2) {
                if (rawVertices === null) { // Fill 0.
                    x = 0.0;
                    y = 0.0;
                }
                else {
                    if (i < offset || i - offset >= rawVertices.length) {
                        x = 0.0;
                    }
                    else {
                        x = rawVertices[i - offset];
                    }
                    if (i + 1 < offset || i + 1 - offset >= rawVertices.length) {
                        y = 0.0;
                    }
                    else {
                        y = rawVertices[i + 1 - offset];
                    }
                }
                if (weight !== null) { // If mesh is skinned, transform point by bone bind pose.
                    const rawBonePoses = this._weightBonePoses[meshName];
                    const vertexBoneCount = this._intArray[iB++];
                    this._helpMatrixA.transformPoint(x, y, this._helpPoint, true);
                    x = this._helpPoint.x;
                    y = this._helpPoint.y;
                    for (let j = 0; j < vertexBoneCount; ++j) {
                        const boneIndex = this._intArray[iB++];
                        this._helpMatrixB.copyFromArray(rawBonePoses, boneIndex * 7 + 1);
                        this._helpMatrixB.invert();
                        this._helpMatrixB.transformPoint(x, y, this._helpPoint, true);
                        this._frameFloatArray[frameFloatOffset + iV++] = this._helpPoint.x;
                        this._frameFloatArray[frameFloatOffset + iV++] = this._helpPoint.y;
                    }
                }
                else {
                    this._frameFloatArray[frameFloatOffset + i] = x;
                    this._frameFloatArray[frameFloatOffset + i + 1] = y;
                }
            }
            if (frameStart === 0) {
                const frameIntOffset = this._frameIntArray.length;
                this._frameIntArray.length += 1 + 1 + 1 + 1 + 1;
                this._frameIntArray[frameIntOffset + 0 /* DeformVertexOffset */] = this._mesh.geometry.offset;
                this._frameIntArray[frameIntOffset + 1 /* DeformCount */] = this._frameFloatArray.length - frameFloatOffset;
                this._frameIntArray[frameIntOffset + 2 /* DeformValueCount */] = this._frameFloatArray.length - frameFloatOffset;
                this._frameIntArray[frameIntOffset + 3 /* DeformValueOffset */] = 0;
                this._frameIntArray[frameIntOffset + 4 /* DeformFloatOffset */] = frameFloatOffset - this._animation.frameFloatOffset;
                this._timelineArray[this._timeline.offset + 3 /* TimelineFrameValueCount */] = frameIntOffset - this._animation.frameIntOffset;
            }
            return frameOffset;
        }
        _parseIKConstraintFrame(rawData, frameStart, frameCount) {
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            let frameIntOffset = this._frameIntArray.length;
            this._frameIntArray.length += 2;
            this._frameIntArray[frameIntOffset++] = ObjectDataParser._getBoolean(rawData, dragonBones.DataParser.BEND_POSITIVE, true) ? 1 : 0;
            this._frameIntArray[frameIntOffset++] = Math.round(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.WEIGHT, 1.0) * 100.0);
            return frameOffset;
        }
        _parseActionData(rawData, type, bone, slot) {
            const actions = new Array();
            if (typeof rawData === "string") {
                const action = dragonBones.BaseObject.borrowObject(dragonBones.ActionData);
                action.type = type;
                action.name = rawData;
                action.bone = bone;
                action.slot = slot;
                actions.push(action);
            }
            else if (rawData instanceof Array) {
                for (const rawAction of rawData) {
                    const action = dragonBones.BaseObject.borrowObject(dragonBones.ActionData);
                    if (dragonBones.DataParser.GOTO_AND_PLAY in rawAction) {
                        action.type = 0 /* Play */;
                        action.name = ObjectDataParser._getString(rawAction, dragonBones.DataParser.GOTO_AND_PLAY, "");
                    }
                    else {
                        if (dragonBones.DataParser.TYPE in rawAction && typeof rawAction[dragonBones.DataParser.TYPE] === "string") {
                            action.type = dragonBones.DataParser._getActionType(rawAction[dragonBones.DataParser.TYPE]);
                        }
                        else {
                            action.type = ObjectDataParser._getNumber(rawAction, dragonBones.DataParser.TYPE, type);
                        }
                        action.name = ObjectDataParser._getString(rawAction, dragonBones.DataParser.NAME, "");
                    }
                    if (dragonBones.DataParser.BONE in rawAction) {
                        const boneName = ObjectDataParser._getString(rawAction, dragonBones.DataParser.BONE, "");
                        action.bone = this._armature.getBone(boneName);
                    }
                    else {
                        action.bone = bone;
                    }
                    if (dragonBones.DataParser.SLOT in rawAction) {
                        const slotName = ObjectDataParser._getString(rawAction, dragonBones.DataParser.SLOT, "");
                        action.slot = this._armature.getSlot(slotName);
                    }
                    else {
                        action.slot = slot;
                    }
                    let userData = null;
                    if (dragonBones.DataParser.INTS in rawAction) {
                        if (userData === null) {
                            userData = dragonBones.BaseObject.borrowObject(dragonBones.UserData);
                        }
                        const rawInts = rawAction[dragonBones.DataParser.INTS];
                        for (const rawValue of rawInts) {
                            userData.addInt(rawValue);
                        }
                    }
                    if (dragonBones.DataParser.FLOATS in rawAction) {
                        if (userData === null) {
                            userData = dragonBones.BaseObject.borrowObject(dragonBones.UserData);
                        }
                        const rawFloats = rawAction[dragonBones.DataParser.FLOATS];
                        for (const rawValue of rawFloats) {
                            userData.addFloat(rawValue);
                        }
                    }
                    if (dragonBones.DataParser.STRINGS in rawAction) {
                        if (userData === null) {
                            userData = dragonBones.BaseObject.borrowObject(dragonBones.UserData);
                        }
                        const rawStrings = rawAction[dragonBones.DataParser.STRINGS];
                        for (const rawValue of rawStrings) {
                            userData.addString(rawValue);
                        }
                    }
                    action.data = userData;
                    actions.push(action);
                }
            }
            return actions;
        }
        _parseDeformFrame(rawData, frameStart, frameCount) {
            const frameFloatOffset = this._frameFloatArray.length;
            const frameOffset = this._parseTweenFrame(rawData, frameStart, frameCount);
            const rawVertices = dragonBones.DataParser.VERTICES in rawData ?
                rawData[dragonBones.DataParser.VERTICES] :
                (dragonBones.DataParser.VALUE in rawData ? rawData[dragonBones.DataParser.VALUE] : null);
            const offset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.OFFSET, 0); // uint
            const vertexCount = this._intArray[this._geometry.offset + 0 /* GeometryVertexCount */];
            const weight = this._geometry.weight;
            let x = 0.0;
            let y = 0.0;
            if (weight !== null) {
                // TODO
            }
            else {
                this._frameFloatArray.length += vertexCount * 2;
                for (let i = 0; i < vertexCount * 2; i += 2) {
                    if (rawVertices !== null) {
                        if (i < offset || i - offset >= rawVertices.length) {
                            x = 0.0;
                        }
                        else {
                            x = rawVertices[i - offset];
                        }
                        if (i + 1 < offset || i + 1 - offset >= rawVertices.length) {
                            y = 0.0;
                        }
                        else {
                            y = rawVertices[i + 1 - offset];
                        }
                    }
                    else {
                        x = 0.0;
                        y = 0.0;
                    }
                    this._frameFloatArray[frameFloatOffset + i] = x;
                    this._frameFloatArray[frameFloatOffset + i + 1] = y;
                }
            }
            if (frameStart === 0) {
                const frameIntOffset = this._frameIntArray.length;
                this._frameIntArray.length += 1 + 1 + 1 + 1 + 1;
                this._frameIntArray[frameIntOffset + 0 /* DeformVertexOffset */] = this._geometry.offset;
                this._frameIntArray[frameIntOffset + 1 /* DeformCount */] = this._frameFloatArray.length - frameFloatOffset;
                this._frameIntArray[frameIntOffset + 2 /* DeformValueCount */] = this._frameFloatArray.length - frameFloatOffset;
                this._frameIntArray[frameIntOffset + 3 /* DeformValueOffset */] = 0;
                this._frameIntArray[frameIntOffset + 4 /* DeformFloatOffset */] = frameFloatOffset - this._animation.frameFloatOffset;
                this._timelineArray[this._timeline.offset + 3 /* TimelineFrameValueCount */] = frameIntOffset - this._animation.frameIntOffset;
            }
            return frameOffset;
        }
        _parseTransform(rawData, transform, scale) {
            transform.x = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.X, 0.0) * scale;
            transform.y = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.Y, 0.0) * scale;
            if (dragonBones.DataParser.ROTATE in rawData || dragonBones.DataParser.SKEW in rawData) {
                transform.rotation = dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ROTATE, 0.0) * dragonBones.Transform.DEG_RAD);
                transform.skew = dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SKEW, 0.0) * dragonBones.Transform.DEG_RAD);
            }
            else if (dragonBones.DataParser.SKEW_X in rawData || dragonBones.DataParser.SKEW_Y in rawData) {
                transform.rotation = dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SKEW_Y, 0.0) * dragonBones.Transform.DEG_RAD);
                transform.skew = dragonBones.Transform.normalizeRadian(ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SKEW_X, 0.0) * dragonBones.Transform.DEG_RAD) - transform.rotation;
            }
            transform.scaleX = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SCALE_X, 1.0);
            transform.scaleY = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SCALE_Y, 1.0);
        }
        _parseColorTransform(rawData, color) {
            color.alphaMultiplier = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ALPHA_MULTIPLIER, 100) * 0.01;
            color.redMultiplier = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.RED_MULTIPLIER, 100) * 0.01;
            color.greenMultiplier = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.GREEN_MULTIPLIER, 100) * 0.01;
            color.blueMultiplier = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.BLUE_MULTIPLIER, 100) * 0.01;
            color.alphaOffset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.ALPHA_OFFSET, 0);
            color.redOffset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.RED_OFFSET, 0);
            color.greenOffset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.GREEN_OFFSET, 0);
            color.blueOffset = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.BLUE_OFFSET, 0);
        }
        _parseGeometry(rawData, geometry) {
            const rawVertices = rawData[dragonBones.DataParser.VERTICES];
            const vertexCount = Math.floor(rawVertices.length / 2); // uint
            let triangleCount = 0;
            const geometryOffset = this._intArray.length;
            const verticesOffset = this._floatArray.length;
            //
            geometry.offset = geometryOffset;
            geometry.data = this._data;
            //
            this._intArray.length += 1 + 1 + 1 + 1;
            this._intArray[geometryOffset + 0 /* GeometryVertexCount */] = vertexCount;
            this._intArray[geometryOffset + 2 /* GeometryFloatOffset */] = verticesOffset;
            this._intArray[geometryOffset + 3 /* GeometryWeightOffset */] = -1; //
            // 
            this._floatArray.length += vertexCount * 2;
            for (let i = 0, l = vertexCount * 2; i < l; ++i) {
                this._floatArray[verticesOffset + i] = rawVertices[i];
            }
            if (dragonBones.DataParser.TRIANGLES in rawData) {
                const rawTriangles = rawData[dragonBones.DataParser.TRIANGLES];
                triangleCount = Math.floor(rawTriangles.length / 3); // uint
                //
                this._intArray.length += triangleCount * 3;
                for (let i = 0, l = triangleCount * 3; i < l; ++i) {
                    this._intArray[geometryOffset + 4 /* GeometryVertexIndices */ + i] = rawTriangles[i];
                }
            }
            // Fill triangle count.
            this._intArray[geometryOffset + 1 /* GeometryTriangleCount */] = triangleCount;
            if (dragonBones.DataParser.UVS in rawData) {
                const rawUVs = rawData[dragonBones.DataParser.UVS];
                const uvOffset = verticesOffset + vertexCount * 2;
                this._floatArray.length += vertexCount * 2;
                for (let i = 0, l = vertexCount * 2; i < l; ++i) {
                    this._floatArray[uvOffset + i] = rawUVs[i];
                }
            }
            if (dragonBones.DataParser.WEIGHTS in rawData) {
                const rawWeights = rawData[dragonBones.DataParser.WEIGHTS];
                const weightCount = Math.floor(rawWeights.length - vertexCount) / 2; // uint
                const weightOffset = this._intArray.length;
                const floatOffset = this._floatArray.length;
                let weightBoneCount = 0;
                const sortedBones = this._armature.sortedBones;
                const weight = dragonBones.BaseObject.borrowObject(dragonBones.WeightData);
                weight.count = weightCount;
                weight.offset = weightOffset;
                this._intArray.length += 1 + 1 + weightBoneCount + vertexCount + weightCount;
                this._intArray[weightOffset + 1 /* WeigthFloatOffset */] = floatOffset;
                if (dragonBones.DataParser.BONE_POSE in rawData) {
                    const rawSlotPose = rawData[dragonBones.DataParser.SLOT_POSE];
                    const rawBonePoses = rawData[dragonBones.DataParser.BONE_POSE];
                    const weightBoneIndices = new Array();
                    weightBoneCount = Math.floor(rawBonePoses.length / 7); // uint
                    weightBoneIndices.length = weightBoneCount;
                    for (let i = 0; i < weightBoneCount; ++i) {
                        const rawBoneIndex = rawBonePoses[i * 7]; // uint
                        const bone = this._rawBones[rawBoneIndex];
                        weight.addBone(bone);
                        weightBoneIndices[i] = rawBoneIndex;
                        this._intArray[weightOffset + 2 /* WeigthBoneIndices */ + i] = sortedBones.indexOf(bone);
                    }
                    this._floatArray.length += weightCount * 3;
                    this._helpMatrixA.copyFromArray(rawSlotPose, 0);
                    for (let i = 0, iW = 0, iB = weightOffset + 2 /* WeigthBoneIndices */ + weightBoneCount, iV = floatOffset; i < vertexCount; ++i) {
                        const iD = i * 2;
                        const vertexBoneCount = this._intArray[iB++] = rawWeights[iW++]; // uint
                        let x = this._floatArray[verticesOffset + iD];
                        let y = this._floatArray[verticesOffset + iD + 1];
                        this._helpMatrixA.transformPoint(x, y, this._helpPoint);
                        x = this._helpPoint.x;
                        y = this._helpPoint.y;
                        for (let j = 0; j < vertexBoneCount; ++j) {
                            const rawBoneIndex = rawWeights[iW++]; // uint
                            const boneIndex = weightBoneIndices.indexOf(rawBoneIndex);
                            this._helpMatrixB.copyFromArray(rawBonePoses, boneIndex * 7 + 1);
                            this._helpMatrixB.invert();
                            this._helpMatrixB.transformPoint(x, y, this._helpPoint);
                            this._intArray[iB++] = boneIndex;
                            this._floatArray[iV++] = rawWeights[iW++];
                            this._floatArray[iV++] = this._helpPoint.x;
                            this._floatArray[iV++] = this._helpPoint.y;
                        }
                    }
                }
                else {
                    const rawBones = rawData[dragonBones.DataParser.BONES];
                    weightBoneCount = rawBones.length;
                    for (let i = 0; i < weightBoneCount; i++) {
                        const rawBoneIndex = rawBones[i];
                        const bone = this._rawBones[rawBoneIndex];
                        weight.addBone(bone);
                        this._intArray[weightOffset + 2 /* WeigthBoneIndices */ + i] = sortedBones.indexOf(bone);
                    }
                    this._floatArray.length += weightCount * 3;
                    for (let i = 0, iW = 0, iV = 0, iB = weightOffset + 2 /* WeigthBoneIndices */ + weightBoneCount, iF = floatOffset; i < weightCount; i++) {
                        const vertexBoneCount = rawWeights[iW++];
                        this._intArray[iB++] = vertexBoneCount;
                        for (let j = 0; j < vertexBoneCount; j++) {
                            const boneIndex = rawWeights[iW++];
                            const boneWeight = rawWeights[iW++];
                            const x = rawVertices[iV++];
                            const y = rawVertices[iV++];
                            this._intArray[iB++] = rawBones.indexOf(boneIndex);
                            this._floatArray[iF++] = boneWeight;
                            this._floatArray[iF++] = x;
                            this._floatArray[iF++] = y;
                        }
                    }
                }
                geometry.weight = weight;
            }
        }
        _parseArray(rawData) {
            // tslint:disable-next-line:no-unused-expression
            rawData;
            this._intArray.length = 0;
            this._floatArray.length = 0;
            this._frameIntArray.length = 0;
            this._frameFloatArray.length = 0;
            this._frameArray.length = 0;
            this._timelineArray.length = 0;
            this._colorArray.length = 0;
        }
        _modifyArray() {
            // Align.
            if ((this._intArray.length % Int16Array.BYTES_PER_ELEMENT) !== 0) {
                this._intArray.push(0);
            }
            if ((this._frameIntArray.length % Int16Array.BYTES_PER_ELEMENT) !== 0) {
                this._frameIntArray.push(0);
            }
            if ((this._frameArray.length % Int16Array.BYTES_PER_ELEMENT) !== 0) {
                this._frameArray.push(0);
            }
            if ((this._timelineArray.length % Uint16Array.BYTES_PER_ELEMENT) !== 0) {
                this._timelineArray.push(0);
            }
            if ((this._timelineArray.length % Int16Array.BYTES_PER_ELEMENT) !== 0) {
                this._colorArray.push(0);
            }
            const l1 = this._intArray.length * Int16Array.BYTES_PER_ELEMENT;
            const l2 = this._floatArray.length * Float32Array.BYTES_PER_ELEMENT;
            const l3 = this._frameIntArray.length * Int16Array.BYTES_PER_ELEMENT;
            const l4 = this._frameFloatArray.length * Float32Array.BYTES_PER_ELEMENT;
            const l5 = this._frameArray.length * Int16Array.BYTES_PER_ELEMENT;
            const l6 = this._timelineArray.length * Uint16Array.BYTES_PER_ELEMENT;
            const l7 = this._colorArray.length * Int16Array.BYTES_PER_ELEMENT;
            const lTotal = l1 + l2 + l3 + l4 + l5 + l6 + l7;
            //
            const binary = new ArrayBuffer(lTotal);
            const intArray = new Int16Array(binary, 0, this._intArray.length);
            const floatArray = new Float32Array(binary, l1, this._floatArray.length);
            const frameIntArray = new Int16Array(binary, l1 + l2, this._frameIntArray.length);
            const frameFloatArray = new Float32Array(binary, l1 + l2 + l3, this._frameFloatArray.length);
            const frameArray = new Int16Array(binary, l1 + l2 + l3 + l4, this._frameArray.length);
            const timelineArray = new Uint16Array(binary, l1 + l2 + l3 + l4 + l5, this._timelineArray.length);
            const colorArray = new Int16Array(binary, l1 + l2 + l3 + l4 + l5 + l6, this._colorArray.length);
            for (let i = 0, l = this._intArray.length; i < l; ++i) {
                intArray[i] = this._intArray[i];
            }
            for (let i = 0, l = this._floatArray.length; i < l; ++i) {
                floatArray[i] = this._floatArray[i];
            }
            for (let i = 0, l = this._frameIntArray.length; i < l; ++i) {
                frameIntArray[i] = this._frameIntArray[i];
            }
            for (let i = 0, l = this._frameFloatArray.length; i < l; ++i) {
                frameFloatArray[i] = this._frameFloatArray[i];
            }
            for (let i = 0, l = this._frameArray.length; i < l; ++i) {
                frameArray[i] = this._frameArray[i];
            }
            for (let i = 0, l = this._timelineArray.length; i < l; ++i) {
                timelineArray[i] = this._timelineArray[i];
            }
            for (let i = 0, l = this._colorArray.length; i < l; ++i) {
                colorArray[i] = this._colorArray[i];
            }
            this._data.binary = binary;
            this._data.intArray = intArray;
            this._data.floatArray = floatArray;
            this._data.frameIntArray = frameIntArray;
            this._data.frameFloatArray = frameFloatArray;
            this._data.frameArray = frameArray;
            this._data.timelineArray = timelineArray;
            this._data.colorArray = colorArray;
            this._defaultColorOffset = -1;
        }
        parseDragonBonesData(rawData, scale = 1) {
            console.assert(rawData !== null && rawData !== undefined, "Data error.");
            const version = ObjectDataParser._getString(rawData, dragonBones.DataParser.VERSION, "");
            const compatibleVersion = ObjectDataParser._getString(rawData, dragonBones.DataParser.COMPATIBLE_VERSION, "");
            if (dragonBones.DataParser.DATA_VERSIONS.indexOf(version) >= 0 ||
                dragonBones.DataParser.DATA_VERSIONS.indexOf(compatibleVersion) >= 0) {
                const data = dragonBones.BaseObject.borrowObject(dragonBones.DragonBonesData);
                data.version = version;
                data.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
                data.frameRate = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.FRAME_RATE, 24);
                if (data.frameRate === 0) { // Data error.
                    data.frameRate = 24;
                }
                if (dragonBones.DataParser.ARMATURE in rawData) {
                    this._data = data;
                    this._parseArray(rawData);
                    const rawArmatures = rawData[dragonBones.DataParser.ARMATURE];
                    for (const rawArmature of rawArmatures) {
                        data.addArmature(this._parseArmature(rawArmature, scale));
                    }
                    if (!this._data.binary) { // DragonBones.webAssembly ? 0 : null;
                        this._modifyArray();
                    }
                    if (dragonBones.DataParser.STAGE in rawData) {
                        data.stage = data.getArmature(ObjectDataParser._getString(rawData, dragonBones.DataParser.STAGE, ""));
                    }
                    else if (data.armatureNames.length > 0) {
                        data.stage = data.getArmature(data.armatureNames[0]);
                    }
                    this._data = null;
                }
                if (dragonBones.DataParser.TEXTURE_ATLAS in rawData) {
                    this._rawTextureAtlases = rawData[dragonBones.DataParser.TEXTURE_ATLAS];
                }
                return data;
            }
            else {
                console.assert(false, "Nonsupport data version: " + version + "\n" +
                    "Please convert DragonBones data to support version.\n" +
                    "Read more: https://github.com/DragonBones/Tools/");
            }
            return null;
        }
        parseTextureAtlasData(rawData, textureAtlasData, scale = 1.0) {
            console.assert(rawData !== undefined);
            if (rawData === null) {
                if (this._rawTextureAtlases === null || this._rawTextureAtlases.length === 0) {
                    return false;
                }
                const rawTextureAtlas = this._rawTextureAtlases[this._rawTextureAtlasIndex++];
                this.parseTextureAtlasData(rawTextureAtlas, textureAtlasData, scale);
                if (this._rawTextureAtlasIndex >= this._rawTextureAtlases.length) {
                    this._rawTextureAtlasIndex = 0;
                    this._rawTextureAtlases = null;
                }
                return true;
            }
            // Texture format.
            textureAtlasData.width = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.WIDTH, 0);
            textureAtlasData.height = ObjectDataParser._getNumber(rawData, dragonBones.DataParser.HEIGHT, 0);
            textureAtlasData.scale = scale === 1.0 ? (1.0 / ObjectDataParser._getNumber(rawData, dragonBones.DataParser.SCALE, 1.0)) : scale;
            textureAtlasData.name = ObjectDataParser._getString(rawData, dragonBones.DataParser.NAME, "");
            textureAtlasData.imagePath = ObjectDataParser._getString(rawData, dragonBones.DataParser.IMAGE_PATH, "");
            if (dragonBones.DataParser.SUB_TEXTURE in rawData) {
                const rawTextures = rawData[dragonBones.DataParser.SUB_TEXTURE];
                for (let i = 0, l = rawTextures.length; i < l; ++i) {
                    const rawTexture = rawTextures[i];
                    const frameWidth = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.FRAME_WIDTH, -1.0);
                    const frameHeight = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.FRAME_HEIGHT, -1.0);
                    const textureData = textureAtlasData.createTexture();
                    textureData.rotated = ObjectDataParser._getBoolean(rawTexture, dragonBones.DataParser.ROTATED, false);
                    textureData.name = ObjectDataParser._getString(rawTexture, dragonBones.DataParser.NAME, "");
                    textureData.region.x = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.X, 0.0);
                    textureData.region.y = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.Y, 0.0);
                    textureData.region.width = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.WIDTH, 0.0);
                    textureData.region.height = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.HEIGHT, 0.0);
                    if (frameWidth > 0.0 && frameHeight > 0.0) {
                        textureData.frame = dragonBones.TextureData.createRectangle();
                        textureData.frame.x = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.FRAME_X, 0.0);
                        textureData.frame.y = ObjectDataParser._getNumber(rawTexture, dragonBones.DataParser.FRAME_Y, 0.0);
                        textureData.frame.width = frameWidth;
                        textureData.frame.height = frameHeight;
                    }
                    textureAtlasData.addTexture(textureData);
                }
            }
            return true;
        }
        /**
         * - Deprecated, please refer to {@link dragonBones.BaseFactory#parseDragonBonesData()}.
         * @deprecated
         * @language en_US
         */
        /**
         * - 已废弃，请参考 {@link dragonBones.BaseFactory#parseDragonBonesData()}。
         * @deprecated
         * @language zh_CN
         */
        static getInstance() {
            if (ObjectDataParser._objectDataParserInstance === null) {
                ObjectDataParser._objectDataParserInstance = new ObjectDataParser();
            }
            return ObjectDataParser._objectDataParserInstance;
        }
    }
    ObjectDataParser._objectDataParserInstance = null;
    dragonBones.ObjectDataParser = ObjectDataParser;
    /**
     * @private
     */
    class ActionFrame {
        constructor() {
            this.frameStart = 0;
            this.actions = [];
        }
    }
    dragonBones.ActionFrame = ActionFrame;
})(dragonBones || (dragonBones = {}));
