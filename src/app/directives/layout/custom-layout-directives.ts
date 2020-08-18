import {Directive} from '@angular/core';
import { LayoutDirective } from '@angular/flex-layout';


const selector = `[fxLayout.xs.print],[fxLayout.sm.print],[fxLayout.md.print],
					[fxLayout.lg.print],[fxLayout.xl.print],[fxLayout.lt-md.print],[fxLayout.lt-lg.print],
					[fxFlexFill.xs.print],[fxFlexFill.sm.print],[fxFlexFill.md.print],[fxFlexFill.lg.print],[fxFlexFill.xl.print],
					[fxFlexFill.lt-md.print],[fxFlexFill.lt-lg.print]`;

const inputs = ['fxLayout.xs.print','fxLayout.sm.print','fxLayout.md.print','fxLayout.lg.print'
				,'fxLayout.xl.print','fxLayout.lt-md.print','fxLayout.lt-lg.print','fxFlexFill.xs.print',
				'fxFlexFill.sm.print','fxFlexFill.md.print','fxFlexFill.lg.print','fxFlexFill.xl.print',
				'fxFlexFill.lt-md.print','fxFlexFill.lt-lg.print'];

@Directive({selector,inputs })
export class CustomLayoutDirective extends LayoutDirective {
	protected inputs= inputs;
}