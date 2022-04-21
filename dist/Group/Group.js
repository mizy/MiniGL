import BaseMesh from '../Mesh/BaseMesh';
/**
 * 进行批量渲染
 * @class
 */
class Group extends BaseMesh {
    constructor(config) {
        super();
        this.depthMask = true;
        this.depthTest = true;
        this.transparent = true;
        this.children = [];
        this.childId = -1;
        this.children = [];
        this.init(config);
    }
    dispose() {
        super.dispose();
        this.children.forEach((item, index) => {
            item.destroy && item.destroy();
        });
    }
    onAdd(miniGL) {
        this.miniGL = miniGL;
        // 获取顶点数据内存里的指针
        this.gl = miniGL.gl;
        this.indicesPointer = this.gl.createBuffer();
        this.children.forEach(each => {
            if (!each.miniGL) {
                each.onAdd(miniGL);
            }
        });
    }
    addChild(child) {
        this.childId++;
        child.childId = this.childId;
        child.parent = this;
        this.children.push(child);
        child.zOrder = this.children.length - 1;
        if (this.miniGL) {
            child.onAdd(this.miniGL);
        }
    }
    addChildAt(child, index) {
        child.childId = this.childId++;
        child.parent = this;
        if (this.miniGL) {
            child.onAdd(this.miniGL);
        }
        this.children.splice(index, 0, child);
        child.zOrder = index + 1;
    }
    removeChild(child) {
        const pos = this.children.indexOf(child);
        if (pos < 0) {
            return;
        }
        this.children[pos].parent = undefined;
        this.children.splice(pos, 1);
    }
    swapChildren(a, b) {
        this.children.forEach((item, index) => {
            if (item === a) {
                this.children[index] = b;
                this.children[index].zOrder = index;
            }
            if (item === b) {
                this.children[index] = a;
                this.children[index].zOrder = index;
            }
        });
    }
}
export default Group;
