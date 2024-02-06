import MiniGL from "../../MiniGL.js";
import BaseMesh from '../BaseMesh.js';
import { PointData } from "../Mesh.js";
import Line from "./Line.js";
import LinePoint from "./LinePoint.js";

class RoundLine extends BaseMesh {
  depthMask = true;
  depthTest = true;
  transparent = true;
  line: Line;
  linePoint: LinePoint;
  type = "RoundLine"
  constructor(config) {
    super()
    this.line = new Line(config);
    this.linePoint = new LinePoint(config);
  }

  onAdd(miniGL: MiniGL) {
    this.line.onAdd(miniGL);
    this.linePoint.onAdd(miniGL);
  }

  setData(data: PointData[]) {
    this.line.setData(data);
    this.linePoint.setData(this.line.res);
  }

  dispose() {
    this.line.dispose();
    this.linePoint.dispose();
  }

  destroy() {
    this.line.destroy();
    this.linePoint.destroy();
  }

  render() {
    this.line.render();
    this.linePoint.render();
  }
}
export default RoundLine;
