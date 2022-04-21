/**
 * @interface
 */
const ShapeUtil = {
    /**
     * @param  {} x
     * @param  {} y
     * @param  {} width
     * @param  {} height
     * @param  {} startIndex=0
     */
    rect: (x, y, width, height, startIndex = 0) => {
        const data = [
            { position: { x: this.x, y: this.y } },
            { position: { x: this.x, y: this.y + this.height } },
            { position: { x: this.x + this.width, y: this.y } },
            { position: { x: this.x + this.width, y: this.y + this.height } },
        ];
        const indices = [0, 1, 2, 2, 1, 3].map(item => item + startIndex);
        return {
            data, indices
        };
    },
    /**
     * @param  {} x
     * @param  {} y
     * @param  {} r
     * @param  {} segment=64 默认64精度
     */
    circle: (x, y, r, segment = 64, startIndex = 0) => {
        const data = [];
        const indices = [];
        data.push({
            position: { x: this.x, y: this.y },
        });
        for (let i = 0; i < segment; i++) {
            let angle = Math.PI * 2 * i / segment;
            let calcX = r * Math.sin(angle) + x;
            let calcY = r * Math.cos(angle) + y;
            data.push({
                position: { x: calcX, y: calcY },
            });
            if (i > 1) {
                indices.push(startIndex, startIndex + i - 1, startIndex + i);
            }
        }
        indices.push(startIndex, startIndex + 1, startIndex + data.length - 1);
        return {
            data, indices
        };
    }
};
