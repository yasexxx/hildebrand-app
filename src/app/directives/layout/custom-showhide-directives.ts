import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';




const selector = `[fxHide.sm.print],[fxHide.xs.print],[fxHide.md.print],
					[fxHide.lg.print],[fxHide.xl.print],[fxShow.sm.print],
					[fxShow.xs.print], [fxShow.md.print],[fxShow.lg.print],
					[fxShow.xl.print],[fxHide.lt-lg.print],[fxShow.lt-lg.print],
					[fxHide.lt-md.print],[fxShow.lt-md.print]'`;

const inputs =  ['fxHide.sm.print','fxHide.xs.print','fxHide.md.print',
				'fxHide.lg.print','fxHide.xl.print','fxShow.sm.print',
				'fxShow.xs.print','fxShow.md.print','fxShow.lg.print',
				'fxShow.xl.print','fxHide.lt-lg.print','fxShow.lt-lg.print',
				'fxHide.lt-md.print','fxShow.lt-md.print'];



@Directive({selector,inputs})
export class CustomShowHideDirective extends ShowHideDirective {
		protected inputs= inputs;
}