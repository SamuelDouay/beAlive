import Case from "./Case";

export default class JeuDeLaVie {
    private plateau: Case[][];
    private taille: number;

    constructor(densite: number, taille: number) {
        this.taille = taille;
        this.initTab(densite);
    }

    public nextState(): void {
        let plateau = [];
        for (let li: number = 0; li < this.taille; li++) {
            plateau[li] = [];
        }
        for (let li: number = 0; li < this.taille; li++) {
            for (let col: number = 0; col < this.taille; col++) {
                plateau[li][col] = this.plateau[li][col].changeState(this.calculNombreDeVoisin(li, col, this.plateau[li][col].isLife()));
            }
        }
        this.plateau = plateau;
    }

    private calculNombreDeVoisin(x: number, y: number, islife: boolean): number {
        let nb = 0;
        if (islife) nb = -1;
        for (
            let li: number = this.limitePlateau(x - 1);
            li < this.limitePlateau(x + 1);
            li++
        ) {
            for (
                let col: number = this.limitePlateau(y - 1);
                col < this.limitePlateau(y + 1);
                col++
            ) {
                if (this.plateau[li][col].isLife()) {
                    nb++;
                }
            }
        }
        return nb;
    }

    private limitePlateau(index: number): number {
        if (index >= this.taille) {
            return this.taille - 1;
        } else if (index <= 0) {
            return 0;
        } else {
            return index;
        }
    }

    public toString() {
        return ` cases : [ ${this.toStringCase()} ]`;
    }

    private toStringCase() {
        let res: string = '';
        for (let li: number = 0; li < this.taille; li++) {
            for (let col: number = 0; col < this.taille; col++) {
                res = res + `{ x : ${li}, y : ${col}, isLife : ${this.plateau[li][col].isLife()} },`;
                if (li === this.taille - 1 && col === this.taille - 1) {
                    res = res.substring(0, res.length - 1);
                }
            }
        }
        return res;
    }

    private initTab(densite: number): void {
        this.plateau = [];
        for (let li: number = 0; li < this.taille; li++) {
            this.plateau[li] = [];
            for (let col: number = 0; col < this.taille; col++) {
                if (Math.random() <= densite) {
                    this.plateau[li][col] = new Case(true);
                } else {
                    this.plateau[li][col] = new Case(false);
                }
            }
        }
    }
};