import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

    @Output() onTyping = new EventEmitter<string>();
    @Input() value:string = '';
    debounce: Subject<string> = new Subject<string>();


    ngOnInit():void{
    
        this.debounce
        .pipe(debounceTime(300)).subscribe(filter=> this.onTyping.emit(filter));
        
    }
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
      }
     // Ele pega o elemento input por meio do # inserido no template e a gente passsa o parametro value para o filtro .
    onKey(input:HTMLInputElement){
    this.debounce.next(input.value);
    }
}