abstract class IPage {
    protected title: string;
    protected description: string;
    protected keyWords: Array<string>;
    protected key: string;
    protected body: string;

    private _data: object;
    get Data(): object {
        return this._data;
    }
    set Data(o: object) {
        if (o === this._data) {
            console.log('没有任何变化');
        } else {
            this._data = o;
            this.Render(this.Diff(o));
        }
    }
        
    private BodyDecode() {

    }

    private Diff(o: object) {
        return new Object();
    }

    private Render(o: object) {

    }
}