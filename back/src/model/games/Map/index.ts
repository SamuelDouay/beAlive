//import JeuDeLaVie from "./JeudeLaVie";

export default class Mapping {
    //private map: JeuDeLaVie;
    private densite: number;
    private taille: number;
    private step: number;

    constructor(densite: number, taille: number, step: number) {
        this.densite = densite;
        this.step = step;
        this.taille = taille;
        //this.map = new JeuDeLaVie(this.densite, this.taille);
    }

    public toString() {
        return `{ taille: ${this.taille}, step : ${this.step}, densité : ${this.densite}, map.string}`;
    };

    public nextState(): void {
        //this.map.nextState();
        this.step = this.step + 1;
    }
}