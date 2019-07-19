import { Categorie } from '../categorie/categorie';
import { Constructeur } from '../constructeur/constructeur';

export class Article {

    constructor(
        public id: number,
        public designation: string,
        public constructeur: Constructeur,
        public categorie : Categorie,
        public dateMiseEnLigne: Date,
        public image: string,
        public description: string,
        public stock: number,
        public prix: number,
        public url: string) {
        }

    // public get identifiant(): number {
    //     return this._identifiant;
    // }
    // public set identifiant(value: number) {
    //     this._identifiant = value;
    // }

    // public get designation(): string {
    //     return this._designation;
    // }
    // public set designation(value: string) {
    //     this._designation = value;
    // }

    // public get constructeur(): string {
    //     return this._constructeur;
    // }
    // public set constructeur(value: string) {
    //     this._constructeur = value;
    // }

    // public get categorie(): string {
    //     return this._categorie;
    // }
    // public set categorie(value: string) {
    //     this._categorie = value;
    // }

    // public get dateMiseEnLigne(): Date {
    //     return this._dateMiseEnLigne;
    // }
    // public set dateMiseEnLigne(value: Date) {
    //     this._dateMiseEnLigne = value;
    // }

    // public get image(): string {
    //     return this._image;
    // }
    // public set image(value: string) {
    //     this._image = value;
    // }

    // public get description(): string {
    //     return this._description;
    // }
    // public set description(value: string) {
    //     this._description = value;
    // }

    // public get stock(): number {
    //     return this._stock;
    // }
    // public set stock(value: number) {
    //     this._stock = value;
    // }

    // public get prix(): number {
    //     return this._prix;
    // }
    // public set prix(value: number) {
    //     this._prix = value;
    // }



}