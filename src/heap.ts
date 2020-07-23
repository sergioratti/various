export class Heap {

    private size: number;
    private list: number[];
    private dataList: number[];

    constructor(private f:any,size?: number) {
        this.size = size ? size : Infinity;
        this.list = [];
        this.dataList = [];
    }

    push(value: number,data:any) {
        this.list.push(value);
        this.dataList.push(data);
        
        let childId = this.list.length;
        let parentId = (childId - childId%2)/2;

        while (this.f(this.list[childId - 1],this.list[parentId - 1]) === true && childId > 1) {
            this._swap(childId - 1,parentId - 1);
            childId = parentId;
            parentId = (childId - childId%2)/2;
        }

        if (this.list.length > this.size) {
            this.list.pop();
            this.dataList.pop();
        }



    }

    _swap(index1:number,index2:number){
        let tmp = this.list[index1];
        this.list[index1] = this.list[index2];
        this.list[index2] = tmp;

        tmp = this.dataList[index1];
        this.dataList[index1] = this.dataList[index2];
        this.dataList[index2] = tmp;
    }

    getSize():number{
        return this.list.length;
    }

    pop(): {value:number,data:any} {

        if (this.list.length === 0)
            return null;

        let retValue: number = this.list.shift();
        let retData: number = this.dataList.shift();
        if (this.list.length > 0) {
            let headValue: number = this.list.shift();
            let headData: number = this.dataList.shift();
            this.push(headValue,headData);
        }

        return {value:retValue,data:retData};


    }

    getList():number[]{
        return this.list;
    }

}

