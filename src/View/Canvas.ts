import Mesh from "../Shapes/Mesh.js";
import Point from "../Shapes/Point.js";
import Line from "../Shapes/Line.js";
import WidthLine from "../Shapes/WidthLine.js";
import { mat3 } from "gl-matrix";
import MiniGL, { MiniGLConfig } from "../MiniGL.js";
/**
 * @class
 */
class Canvas {
  index = 0;
  meshes: any[] = [];
  miniGL: MiniGL;
  gl: WebGL2RenderingContext;
  mesh: Mesh;
  point: Point;
  line: Line;
  widthLine: WidthLine;
  beforeTime: number;
  constructor(config: MiniGLConfig) {
    this.meshes = [];
    this.miniGL = config.miniGL;
    this.gl = this.miniGL.gl;
    // 基础渲染以下类，其他形状让让用户自己new
    // 牺牲一些性能，渲染多次drawElements来避免通过退化三角形合并形状，导致的事件处理困难（需要分层处理合并的图层，然后按照像素去检测，比较恶心）
    this.mesh = new Mesh(config.meshConfig);
    this.point = new Point(config.pointConfig);
    this.line = new Line(config.lineConfig);
    this.widthLine = new WidthLine(config.widthLineConfig);
    this.add(this.mesh);
    this.add(this.line);
    this.add(this.point);
    this.add(this.widthLine);
  }

  dispose() {
    this.meshes.forEach((item) => {
      this.remove(item);
      item.destroy && item.destroy();
    });
    this.meshes = [];
  }

  toDataUrl() {
    return (this.gl.canvas as HTMLCanvasElement).toDataURL()
  }

  status = "update";

  update = () => {
    const time = new Date().getTime();
    const delta = time - this.beforeTime;
    this.beforeTime = time;
    this.render(delta);
    if (this.status === "update") requestAnimationFrame(this.update);
  };
  /**
   * @param  {} mesh
   * @param  {} [key]
   * @returns {String} key
   */
  add(mesh) {
    this.meshes.push(mesh);
    mesh.onAdd && mesh.onAdd(this.miniGL);
    mesh.parent = this;
    return mesh;
  }

  remove(child) {
    const index = this.meshes.indexOf(child);
    this.meshes.splice(index, 1);
  }

  addChild(...args) {
    this.add.call(this, ...args);
  }

  removeChild(...args) {
    this.remove.call(this, ...args);
  }

  render(delta: number) {
    const { gl } = this;
    this.miniGL.fire("beforerender", delta);
    // 清空
    gl.clearDepth(1.0);
    // gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.disable(gl.CULL_FACE);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.meshes.forEach((mesh) => {
      this.renderMesh(mesh, delta);
    });
  }

  /**
   * @param  {} mesh
   * @param  {} delta
   * @param  {} parentMatrix 一级级传下来的矩阵
   */
  renderMesh(mesh, delta, parentMatrix?) {
    const { gl } = this;

    const blendMode = (mesh.texture || {}).premultiplyAlpha
      ? "ONE"
      : "SRC_ALPHA";
    gl.enable(gl.BLEND);
    gl.blendFunc(gl[blendMode], mesh.blendMode || gl.ONE_MINUS_SRC_ALPHA);

    // 写入深度缓冲
    if (mesh.visible) {
      this.makeTransform(mesh, parentMatrix);
      this.makeNeedUniform(mesh);
      mesh.render(delta);
      // 更新子元素
      if (mesh.children) {
        mesh.children.forEach((item) => {
          this.renderMesh(
            item,
            delta,
            mesh.uniformData.modelView.value
          );
        });
      }
    }
  }

  makeNeedUniform(item) {
    item.uniformData.aspect = {
      value: this.miniGL.viewport.ratio,
      type: "uniform1f",
    };
    item.uniformData.pixelRatio = {
      value: this.miniGL.viewport.pixelRatio,
      type: "uniform1f",
    };
    item.uniformData.scale = {
      value: this.miniGL.viewport.scale,
      type: "uniform1f",
    };
  }

  makeTransform(item, parentMatrix) {
    if (parentMatrix) {
      const modelView = mat3.mul(
        item.worldMatrix,
        parentMatrix,
        item.matrix
      );
      item.uniformData.modelView = {
        value: modelView,
        type: "uniformMatrix3fv",
      };
    } else {
      item.uniformData.modelView = {
        value: item.matrix,
        type: "uniformMatrix3fv",
      };
    }
    item.uniformData.transform = {
      value: this.miniGL.viewport.transform,
      type: "uniformMatrix3fv",
    };
  }
}
export default Canvas;
