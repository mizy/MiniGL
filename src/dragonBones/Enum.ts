const BlendMode = {
    Normal: 0,
    Add: 1,
    Alpha: 2,
    Darken: 3,
    Difference: 4,
    Erase: 5,
    HardLight: 6,
    Invert: 7,
    Layer: 8,
    Lighten: 9,
    Multiply: 10,
    Overlay: 11,
    Screen: 12,
    Subtract: 13
};
const BoneType = {
    Bone: 0,
    Surface: 1
};
const BinaryOffset = {
    WeigthBoneCount: 0,
    WeigthFloatOffset: 1,
    WeigthBoneIndices: 2,
    GeometryVertexCount: 0,
    GeometryTriangleCount: 1,
    GeometryFloatOffset: 2,
    GeometryWeightOffset: 3,
    GeometryVertexIndices: 4,
    TimelineScale: 0,
    TimelineOffset: 1,
    TimelineKeyFrameCount: 2,
    TimelineFrameValueCount: 3,
    TimelineFrameValueOffset: 4,
    TimelineFrameOffset: 5,
    FramePosition: 0,
    FrameTweenType: 1,
    FrameTweenEasingOrCurveSampleCount: 2,
    FrameCurveSamples: 3,
    DeformVertexOffset: 0,
    DeformCount: 1,
    DeformValueCount: 2,
    DeformValueOffset: 3,
    DeformFloatOffset: 4
};
export {
    BlendMode, BinaryOffset, BoneType
};
