import * as all from "./index.js";
const MiniGL = all.MiniGL;
for (let key in all) {
    if (key !== "MiniGL") {
        MiniGL[key] = all[key];
    }
}
export default MiniGL;
export * from "./index";
