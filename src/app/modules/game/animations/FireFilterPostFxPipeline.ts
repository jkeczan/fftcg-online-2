import FragSrc from './green_flame'

const PostFXPipeline = Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;
const GetValue = Phaser.Utils.Objects.GetValue;


class FireFilterPostFxPlugin extends PostFXPipeline {
    constructor(game) {
        super({
            name: 'fireFilterPostFXPlugin',
            game: game,
            renderTarget: true,
            fragShader: FragSrc
        });
    }

    resetFromJSON(o) {
        // this.setIntensity(GetValue(o, 'intensity', 0));
        return this;
    }

    onPreRender() {
        // this.set1f('intensity', this.intensity);
    }

    // intensity
    setIntensity(value) {
        // this.intensity = value;
        return this;
    }
}

export default FireFilterPostFxPlugin;
