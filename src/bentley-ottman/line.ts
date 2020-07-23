export class Line {

    public p1: Point = null;
    public p2: Point = null;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.p1 = new Point(x1, y1);
        this.p2 = new Point(x2, y2);
    }

    getP1(): Point {
        return this.p1;
    }

    getP2(): Point {
        return this.p2;
    }

    getLeftPoint(): Point {
        if (this.p1.x < this.p2.x)
            return this.p1;
        else if (this.p1.x > this.p2.x)
            return this.p2;
        else {
            if (this.p1.y < this.p2.y)
                return this.p1;
            else if (this.p1.y > this.p2.y)
                return this.p2;
            else
                return null;
        }
    }

    getRightPoint(): Point {
        if (this.p1.x > this.p2.x)
            return this.p1;
        else if (this.p1.x < this.p2.x)
            return this.p2;
        else {
            if (this.p1.y > this.p2.y)
                return this.p1;
            else if (this.p1.y < this.p2.y)
                return this.p2;
            else
                return null;
        }
    }

    getTopPoint(): Point {
        if (this.p1.y < this.p2.y)
            return this.p1;
        else if (this.p1.y > this.p2.y)
            return this.p2;
        else {
            if (this.p1.x < this.p2.x)
                return this.p1;
            else if (this.p1.x > this.p2.x)
                return this.p2;
            else
                return null;
        }
    }

    getBottomPoint(): Point {
        if (this.p1.y > this.p2.y)
            return this.p1;
        else if (this.p1.y < this.p2.y)
            return this.p2;
        else {
            if (this.p1.x > this.p2.x)
                return this.p1;
            else if (this.p1.x < this.p2.x)
                return this.p2;
            else
                return null;
        }
    }


    intersect(line:Line):Point{
        let x1:number = this.p1.x;
        let y1:number = this.p1.y;
        let x2:number = this.p2.x;
        let y2:number = this.p2.y;

        let x3:number = line.p1.x;
        let y3:number = line.p1.y;
        let x4:number = line.p2.x;
        let y4:number = line.p2.y;

        let den = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
        if(Math.abs(den)<0.0001)
            return null;

        let t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
        let u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;

        u = Math.round(u*1e5)*1e-5;
        t = Math.round(t*1e5)*1e-5;

        if(u>1 || u<0 || t<0 || t>1)
            return null;

        return new Point(x1+t*(x2-x1),y1+t*(y2-y1));
    }


}

export class Point {
    constructor(public x: number, public y: number) {

    }
}