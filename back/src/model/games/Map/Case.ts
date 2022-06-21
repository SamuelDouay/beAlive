export default class Case {
    private life: boolean;

    constructor(life: boolean) {
        this.life = life;
    }

    public isLife(): boolean {
        return this.life;
    }

    public setIsLife(life: boolean): void {
        this.life = life;
    }

    public changeState(nbVoisin: number): Case {
        if (nbVoisin == 3 || (nbVoisin == 2 && this.life)) {
            return new Case(true);
        }
        return new Case(false);
    }
};
