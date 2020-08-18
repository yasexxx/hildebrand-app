import {Directive} from '@angular/core';
import { StyleDirective } from '@angular/flex-layout';



const selector = `[ngStyle.xs.print],[ngStyle.sm.print],[ngStyle.md.print],
					[ngStyle.lg.print],[ngStyle.xl.print],[ngStyle.lt-lg.print],
					[ngStyle.lt-md.print]`;

const inputs = ['ngStyle.xs.print','ngStyle.sm.print','ngStyle.md.print',
				'ngStyle.lg.print','ngStyle.xl.print','ngStyle.lt-lg.print',
				'ngStyle.lt-md.print'];

@Directive({selector, inputs})
export class CustomStyleDirective extends StyleDirective {
	protected inputs= inputs;
	
}