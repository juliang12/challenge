export interface Notes{
    titulo: string
    tipo: string
    descripcion?: string
    id?: string
}

export interface Details{
titulo?: string
tipo?: string
descripcion?: string
id?:string

}

export interface NotesList {
    id?: number;
    titulo?: string;
    tipo: string;
    descripcion: string;
    fecha: Date;
    note?: any
  }