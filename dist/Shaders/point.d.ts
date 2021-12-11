declare namespace _default {
    function vertexShader(config: any): string;
    function fragmentShader({ isRound, map, isGradual }: {
        isRound: any;
        map: any;
        isGradual: any;
    }): string;
}
export default _default;
