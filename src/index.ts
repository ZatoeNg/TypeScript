function base_operation() {
    let num: number = 5;

    let tuple: [number, string, boolean] = [4.2, "tup000le", false];

    let array: number[] = [1, 2, 3, 4]
}

function my_function(values: number): number {
    return values;
}

function control_function(password: string) {
    let length = password.length;

    if (length >= 10) {
        console.log("{password} is long enough!");
    } else if (length == 0) {
        console.log("{password} is shorter enough!");
    } else {
        console.log("'{password}' is Not long enough!");
    }
}

function while_function() {
    let count: number = 0;
    while (count <= 10) {
        count++;
        console.log("Count:" + count);
    }
    console.log("While End!");
}

function for_function() {
    for (let i: number = 0; i < 10; i++) {
        console.log("For:" + i);
    }
}

type TFruit = {
    name: String;
    grams: number;
    price: number;
}

interface IFruit {
    name: string;   // 字符串字段（必选）
    score?: number; // 可选字段（加 ?）
    readonly id: number; // 只读字段（模拟不可变结构体字段）
}

class Rectangle {
    private _width: number
    private _height: number;

    constructor(w: number, h: number) {
        this._width = w;
        this._height = h;
    }

    get width(): number {
        console.log("读取宽度")
        return this._width;
    }

    set height(value: number) {
        console.log("修改高度");
        this._height = value;
    }

    get_area(): number {
        return this._width * this._height;
    }
}

enum State {
    On,
    Off,
}

