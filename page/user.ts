/// <reference path="../lib/lib.ts" />

class user extends lib.IPage {
    public init(): void {
        this.html`
        <div class="$1" data-$1="$2">
            <p>我是</p>
            <p>你是？</p>
            <p>我不是？</p>
            <p>
                <p>你是不是</p>
                <p>我才不是</p>
            </p>
            <ul>
                <li>
                    {{n}}
                </li>
                <li>
                    {{p}}
                </li>
                <li>
                    {{a}}
                </li>
                <li>
                    {{d}}
                </li>
            </ul>
            <ul>
                <li for="(i,k) in 10"></li>
            </ul>
        </div>`;

        console.log(this.page.vNode);
    }

    public mounted(): void {

    }

    public leaved(): void {

    }
}

let _ = new user();

_.init();