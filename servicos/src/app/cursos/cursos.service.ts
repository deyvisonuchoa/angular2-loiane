import { LogService } from './../shared/log.service';

import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService{

    emitirCurso = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    cursos: string[] = ['Angular 2','Java','phonegap'];

    constructor(private logService: LogService){
        console.log('servico iniciado');
    };

    getCursos(){
        this.logService.consoleLog('Lista de cursos');
        return this.cursos;
    };

    addCurso(curso: string){
        this.logService.consoleLog(`Criando novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCurso.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    };
}