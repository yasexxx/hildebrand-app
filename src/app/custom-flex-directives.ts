import { Directive } from '@angular/core';
import { ClassDirective } from '@angular/flex-layout';


const selector = `[ngClass.xs.print],[ngClass.sm.print],
					[ngClass.md.print],[ngClass.lg.print],[ngClass.xl.print],
					[ngClass.lt-lg.print],[ngClass.lt-md.print]`;

const inputs = ['ngClass.xs.print','ngClass.sm.print',
					'ngClass.md.print','ngClass.lg.print','ngClass.xl.print',
					'ngClass.lt-lg.print','ngClass.lt-md.print'];
					


@Directive({selector,inputs})
export class CustomClassDirective extends ClassDirective {
	protected inputs= inputs;
}



