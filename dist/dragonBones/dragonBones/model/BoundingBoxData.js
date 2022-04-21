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
     * - The base class of bounding box data.
     * @see dragonBones.RectangleData
     * @see dragonBones.EllipseData
     * @see dragonBones.PolygonData
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - 边界框数据基类。
     * @see dragonBones.RectangleData
     * @see dragonBones.EllipseData
     * @see dragonBones.PolygonData
     * @version DragonBones 5.0
     * @language zh_CN
     */
    class BoundingBoxData extends dragonBones.BaseObject {
        _onClear() {
            this.color = 0x000000;
            this.width = 0.0;
            this.height = 0.0;
        }
    }
    dragonBones.BoundingBoxData = BoundingBoxData;
    /**
     * - The rectangle bounding box data.
     * @version DragonBones 5.1
     * @language en_US
     */
    /**
     * - 矩形边界框数据。
     * @version DragonBones 5.1
     * @language zh_CN
     */
    class RectangleBoundingBoxData extends BoundingBoxData {
        static toString() {
            return "[class dragonBones.RectangleBoundingBoxData]";
        }
        /**
         * - Compute the bit code for a point (x, y) using the clip rectangle
         */
        static _computeOutCode(x, y, xMin, yMin, xMax, yMax) {
            let code = 0 /* InSide */; // initialised as being inside of [[clip window]]
            if (x < xMin) { // to the left of clip window
                code |= 1 /* Left */;
            }
            else if (x > xMax) { // to the right of clip window
                code |= 2 /* Right */;
            }
            if (y < yMin) { // below the clip window
                code |= 4 /* Top */;
            }
            else if (y > yMax) { // above the clip window
                code |= 8 /* Bottom */;
            }
            return code;
        }
        /**
         * @private
         */
        static rectangleIntersectsSegment(xA, yA, xB, yB, xMin, yMin, xMax, yMax, intersectionPointA = null, intersectionPointB = null, normalRadians = null) {
            const inSideA = xA > xMin && xA < xMax && yA > yMin && yA < yMax;
            const inSideB = xB > xMin && xB < xMax && yB > yMin && yB < yMax;
            if (inSideA && inSideB) {
                return -1;
            }
            let intersectionCount = 0;
            let outcode0 = RectangleBoundingBoxData._computeOutCode(xA, yA, xMin, yMin, xMax, yMax);
            let outcode1 = RectangleBoundingBoxData._computeOutCode(xB, yB, xMin, yMin, xMax, yMax);
            while (true) {
                if ((outcode0 | outcode1) === 0) { // Bitwise OR is 0. Trivially accept and get out of loop
                    intersectionCount = 2;
                    break;
                }
                else if ((outcode0 & outcode1) !== 0) { // Bitwise AND is not 0. Trivially reject and get out of loop
                    break;
                }
                // failed both tests, so calculate the line segment to clip
                // from an outside point to an intersection with clip edge
                let x = 0.0;
                let y = 0.0;
                let normalRadian = 0.0;
                // At least one endpoint is outside the clip rectangle; pick it.
                const outcodeOut = outcode0 !== 0 ? outcode0 : outcode1;
                // Now find the intersection point;
                if ((outcodeOut & 4 /* Top */) !== 0) { // point is above the clip rectangle
                    x = xA + (xB - xA) * (yMin - yA) / (yB - yA);
                    y = yMin;
                    if (normalRadians !== null) {
                        normalRadian = -Math.PI * 0.5;
                    }
                }
                else if ((outcodeOut & 8 /* Bottom */) !== 0) { // point is below the clip rectangle
                    x = xA + (xB - xA) * (yMax - yA) / (yB - yA);
                    y = yMax;
                    if (normalRadians !== null) {
                        normalRadian = Math.PI * 0.5;
                    }
                }
                else if ((outcodeOut & 2 /* Right */) !== 0) { // point is to the right of clip rectangle
                    y = yA + (yB - yA) * (xMax - xA) / (xB - xA);
                    x = xMax;
                    if (normalRadians !== null) {
                        normalRadian = 0;
                    }
                }
                else if ((outcodeOut & 1 /* Left */) !== 0) { // point is to the left of clip rectangle
                    y = yA + (yB - yA) * (xMin - xA) / (xB - xA);
                    x = xMin;
                    if (normalRadians !== null) {
                        normalRadian = Math.PI;
                    }
                }
                // Now we move outside point to intersection point to clip
                // and get ready for next pass.
                if (outcodeOut === outcode0) {
                    xA = x;
                    yA = y;
                    outcode0 = RectangleBoundingBoxData._computeOutCode(xA, yA, xMin, yMin, xMax, yMax);
                    if (normalRadians !== null) {
                        normalRadians.x = normalRadian;
                    }
                }
                else {
                    xB = x;
                    yB = y;
                    outcode1 = RectangleBoundingBoxData._computeOutCode(xB, yB, xMin, yMin, xMax, yMax);
                    if (normalRadians !== null) {
                        normalRadians.y = normalRadian;
                    }
                }
            }
            if (intersectionCount) {
                if (inSideA) {
                    intersectionCount = 2; // 10
                    if (intersectionPointA !== null) {
                        intersectionPointA.x = xB;
                        intersectionPointA.y = yB;
                    }
                    if (intersectionPointB !== null) {
                        intersectionPointB.x = xB;
                        intersectionPointB.y = xB;
                    }
                    if (normalRadians !== null) {
                        normalRadians.x = normalRadians.y + Math.PI;
                    }
                }
                else if (inSideB) {
                    intersectionCount = 1; // 01
                    if (intersectionPointA !== null) {
                        intersectionPointA.x = xA;
                        intersectionPointA.y = yA;
                    }
                    if (intersectionPointB !== null) {
                        intersectionPointB.x = xA;
                        intersectionPointB.y = yA;
                    }
                    if (normalRadians !== null) {
                        normalRadians.y = normalRadians.x + Math.PI;
                    }
                }
                else {
                    intersectionCount = 3; // 11
                    if (intersectionPointA !== null) {
                        intersectionPointA.x = xA;
                        intersectionPointA.y = yA;
                    }
                    if (intersectionPointB !== null) {
                        intersectionPointB.x = xB;
                        intersectionPointB.y = yB;
                    }
                }
            }
            return intersectionCount;
        }
        _onClear() {
            super._onClear();
            this.type = 0 /* Rectangle */;
        }
        /**
         * @inheritDoc
         */
        containsPoint(pX, pY) {
            const widthH = this.width * 0.5;
            if (pX >= -widthH && pX <= widthH) {
                const heightH = this.height * 0.5;
                if (pY >= -heightH && pY <= heightH) {
                    return true;
                }
            }
            return false;
        }
        /**
         * @inheritDoc
         */
        intersectsSegment(xA, yA, xB, yB, intersectionPointA = null, intersectionPointB = null, normalRadians = null) {
            const widthH = this.width * 0.5;
            const heightH = this.height * 0.5;
            const intersectionCount = RectangleBoundingBoxData.rectangleIntersectsSegment(xA, yA, xB, yB, -widthH, -heightH, widthH, heightH, intersectionPointA, intersectionPointB, normalRadians);
            return intersectionCount;
        }
    }
    dragonBones.RectangleBoundingBoxData = RectangleBoundingBoxData;
    /**
     * - The ellipse bounding box data.
     * @version DragonBones 5.1
     * @language en_US
     */
    /**
     * - 椭圆边界框数据。
     * @version DragonBones 5.1
     * @language zh_CN
     */
    class EllipseBoundingBoxData extends BoundingBoxData {
        static toString() {
            return "[class dragonBones.EllipseData]";
        }
        /**
         * @private
         */
        static ellipseIntersectsSegment(xA, yA, xB, yB, xC, yC, widthH, heightH, intersectionPointA = null, intersectionPointB = null, normalRadians = null) {
            const d = widthH / heightH;
            const dd = d * d;
            yA *= d;
            yB *= d;
            const dX = xB - xA;
            const dY = yB - yA;
            const lAB = Math.sqrt(dX * dX + dY * dY);
            const xD = dX / lAB;
            const yD = dY / lAB;
            const a = (xC - xA) * xD + (yC - yA) * yD;
            const aa = a * a;
            const ee = xA * xA + yA * yA;
            const rr = widthH * widthH;
            const dR = rr - ee + aa;
            let intersectionCount = 0;
            if (dR >= 0.0) {
                const dT = Math.sqrt(dR);
                const sA = a - dT;
                const sB = a + dT;
                const inSideA = sA < 0.0 ? -1 : (sA <= lAB ? 0 : 1);
                const inSideB = sB < 0.0 ? -1 : (sB <= lAB ? 0 : 1);
                const sideAB = inSideA * inSideB;
                if (sideAB < 0) {
                    return -1;
                }
                else if (sideAB === 0) {
                    if (inSideA === -1) {
                        intersectionCount = 2; // 10
                        xB = xA + sB * xD;
                        yB = (yA + sB * yD) / d;
                        if (intersectionPointA !== null) {
                            intersectionPointA.x = xB;
                            intersectionPointA.y = yB;
                        }
                        if (intersectionPointB !== null) {
                            intersectionPointB.x = xB;
                            intersectionPointB.y = yB;
                        }
                        if (normalRadians !== null) {
                            normalRadians.x = Math.atan2(yB / rr * dd, xB / rr);
                            normalRadians.y = normalRadians.x + Math.PI;
                        }
                    }
                    else if (inSideB === 1) {
                        intersectionCount = 1; // 01
                        xA = xA + sA * xD;
                        yA = (yA + sA * yD) / d;
                        if (intersectionPointA !== null) {
                            intersectionPointA.x = xA;
                            intersectionPointA.y = yA;
                        }
                        if (intersectionPointB !== null) {
                            intersectionPointB.x = xA;
                            intersectionPointB.y = yA;
                        }
                        if (normalRadians !== null) {
                            normalRadians.x = Math.atan2(yA / rr * dd, xA / rr);
                            normalRadians.y = normalRadians.x + Math.PI;
                        }
                    }
                    else {
                        intersectionCount = 3; // 11
                        if (intersectionPointA !== null) {
                            intersectionPointA.x = xA + sA * xD;
                            intersectionPointA.y = (yA + sA * yD) / d;
                            if (normalRadians !== null) {
                                normalRadians.x = Math.atan2(intersectionPointA.y / rr * dd, intersectionPointA.x / rr);
                            }
                        }
                        if (intersectionPointB !== null) {
                            intersectionPointB.x = xA + sB * xD;
                            intersectionPointB.y = (yA + sB * yD) / d;
                            if (normalRadians !== null) {
                                normalRadians.y = Math.atan2(intersectionPointB.y / rr * dd, intersectionPointB.x / rr);
                            }
                        }
                    }
                }
            }
            return intersectionCount;
        }
        _onClear() {
            super._onClear();
            this.type = 1 /* Ellipse */;
        }
        /**
         * @inheritDoc
         */
        containsPoint(pX, pY) {
            const widthH = this.width * 0.5;
            if (pX >= -widthH && pX <= widthH) {
                const heightH = this.height * 0.5;
                if (pY >= -heightH && pY <= heightH) {
                    pY *= widthH / heightH;
                    return Math.sqrt(pX * pX + pY * pY) <= widthH;
                }
            }
            return false;
        }
        /**
         * @inheritDoc
         */
        intersectsSegment(xA, yA, xB, yB, intersectionPointA = null, intersectionPointB = null, normalRadians = null) {
            const intersectionCount = EllipseBoundingBoxData.ellipseIntersectsSegment(xA, yA, xB, yB, 0.0, 0.0, this.width * 0.5, this.height * 0.5, intersectionPointA, intersectionPointB, normalRadians);
            return intersectionCount;
        }
    }
    dragonBones.EllipseBoundingBoxData = EllipseBoundingBoxData;
    /**
     * - The polygon bounding box data.
     * @version DragonBones 5.1
     * @language en_US
     */
    /**
     * - 多边形边界框数据。
     * @version DragonBones 5.1
     * @language zh_CN
     */
    class PolygonBoundingBoxData extends BoundingBoxData {
        constructor() {
            super(...arguments);
            /**
             * - The polygon vertices.
             * @version DragonBones 5.1
             * @language en_US
             */
            /**
             * - 多边形顶点。
             * @version DragonBones 5.1
             * @language zh_CN
             */
            this.vertices = [];
        }
        static toString() {
            return "[class dragonBones.PolygonBoundingBoxData]";
        }
        /**
         * @private
         */
        static polygonIntersectsSegment(xA, yA, xB, yB, vertices, intersectionPointA = null, intersectionPointB = null, normalRadians = null) {
            if (xA === xB) {
                xA = xB + 0.000001;
            }
            if (yA === yB) {
                yA = yB + 0.000001;
            }
            const count = vertices.length;
            const dXAB = xA - xB;
            const dYAB = yA - yB;
            const llAB = xA * yB - yA * xB;
            let intersectionCount = 0;
            let xC = vertices[count - 2];
            let yC = vertices[count - 1];
            let dMin = 0.0;
            let dMax = 0.0;
            let xMin = 0.0;
            let yMin = 0.0;
            let xMax = 0.0;
            let yMax = 0.0;
            for (let i = 0; i < count; i += 2) {
                const xD = vertices[i];
                const yD = vertices[i + 1];
                if (xC === xD) {
                    xC = xD + 0.0001;
                }
                if (yC === yD) {
                    yC = yD + 0.0001;
                }
                const dXCD = xC - xD;
                const dYCD = yC - yD;
                const llCD = xC * yD - yC * xD;
                const ll = dXAB * dYCD - dYAB * dXCD;
                const x = (llAB * dXCD - dXAB * llCD) / ll;
                if (((x >= xC && x <= xD) || (x >= xD && x <= xC)) && (dXAB === 0.0 || (x >= xA && x <= xB) || (x >= xB && x <= xA))) {
                    const y = (llAB * dYCD - dYAB * llCD) / ll;
                    if (((y >= yC && y <= yD) || (y >= yD && y <= yC)) && (dYAB === 0.0 || (y >= yA && y <= yB) || (y >= yB && y <= yA))) {
                        if (intersectionPointB !== null) {
                            let d = x - xA;
                            if (d < 0.0) {
                                d = -d;
                            }
                            if (intersectionCount === 0) {
                                dMin = d;
                                dMax = d;
                                xMin = x;
                                yMin = y;
                                xMax = x;
                                yMax = y;
                                if (normalRadians !== null) {
                                    normalRadians.x = Math.atan2(yD - yC, xD - xC) - Math.PI * 0.5;
                                    normalRadians.y = normalRadians.x;
                                }
                            }
                            else {
                                if (d < dMin) {
                                    dMin = d;
                                    xMin = x;
                                    yMin = y;
                                    if (normalRadians !== null) {
                                        normalRadians.x = Math.atan2(yD - yC, xD - xC) - Math.PI * 0.5;
                                    }
                                }
                                if (d > dMax) {
                                    dMax = d;
                                    xMax = x;
                                    yMax = y;
                                    if (normalRadians !== null) {
                                        normalRadians.y = Math.atan2(yD - yC, xD - xC) - Math.PI * 0.5;
                                    }
                                }
                            }
                            intersectionCount++;
                        }
                        else {
                            xMin = x;
                            yMin = y;
                            xMax = x;
                            yMax = y;
                            intersectionCount++;
                            if (normalRadians !== null) {
                                normalRadians.x = Math.atan2(yD - yC, xD - xC) - Math.PI * 0.5;
                                normalRadians.y = normalRadians.x;
                            }
                            break;
                        }
                    }
                }
                xC = xD;
                yC = yD;
            }
            if (intersectionCount === 1) {
                if (intersectionPointA !== null) {
                    intersectionPointA.x = xMin;
                    intersectionPointA.y = yMin;
                }
                if (intersectionPointB !== null) {
                    intersectionPointB.x = xMin;
                    intersectionPointB.y = yMin;
                }
                if (normalRadians !== null) {
                    normalRadians.y = normalRadians.x + Math.PI;
                }
            }
            else if (intersectionCount > 1) {
                intersectionCount++;
                if (intersectionPointA !== null) {
                    intersectionPointA.x = xMin;
                    intersectionPointA.y = yMin;
                }
                if (intersectionPointB !== null) {
                    intersectionPointB.x = xMax;
                    intersectionPointB.y = yMax;
                }
            }
            return intersectionCount;
        }
        _onClear() {
            super._onClear();
            this.type = 2 /* Polygon */;
            this.x = 0.0;
            this.y = 0.0;
            this.vertices.length = 0;
        }
        /**
         * @inheritDoc
         */
        containsPoint(pX, pY) {
            let isInSide = false;
            if (pX >= this.x && pX <= this.width && pY >= this.y && pY <= this.height) {
                for (let i = 0, l = this.vertices.length, iP = l - 2; i < l; i += 2) {
                    const yA = this.vertices[iP + 1];
                    const yB = this.vertices[i + 1];
                    if ((yB < pY && yA >= pY) || (yA < pY && yB >= pY)) {
                        const xA = this.vertices[iP];
                        const xB = this.vertices[i];
                        if ((pY - yB) * (xA - xB) / (yA - yB) + xB < pX) {
                            isInSide = !isInSide;
                        }
                    }
                    iP = i;
                }
            }
            return isInSide;
        }
        /**
         * @inheritDoc
         */
        intersectsSegment(xA, yA, xB, yB, intersectionPointA = null, intersectionPointB = null, normalRadians = null) {
            let intersectionCount = 0;
            if (RectangleBoundingBoxData.rectangleIntersectsSegment(xA, yA, xB, yB, this.x, this.y, this.x + this.width, this.y + this.height, null, null, null) !== 0) {
                intersectionCount = PolygonBoundingBoxData.polygonIntersectsSegment(xA, yA, xB, yB, this.vertices, intersectionPointA, intersectionPointB, normalRadians);
            }
            return intersectionCount;
        }
    }
    dragonBones.PolygonBoundingBoxData = PolygonBoundingBoxData;
})(dragonBones || (dragonBones = {}));
