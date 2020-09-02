class LiveStudio{
	constructor(miniGL){
		this.miniGL = miniGL
	}

	initImage(src){
		// 展示底图
		this.workMesh = new WorkMesh();
		this.miniGL.canvas.add(this.workMesh);
		this.workMesh.setMap(src)
	}
}

export default LiveStudio;