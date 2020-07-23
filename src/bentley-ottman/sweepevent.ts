export default class SweepEvent {
    /**
     * Creates new sweep event of a given kind.
     */
    public from;
    constructor(public point, segment?:any) {
      if (segment) this.from = [segment];
    }
  }