import { BREAKPOINT } from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [
	{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'screen and (max-width: 575px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
},
	{	alias:'sm.print',
	suffix:'SmPrint',
	mediaQuery:'screen and (min-width: 576px)',
	overlapping: false,
	priority: 1001
	},
	{	alias:'md.print',
	suffix: 'MdPrint',
	mediaQuery:'screen and (min-width: 768px)',
	overlapping: false,
	priority: 1001
	},
	{	alias:'lg.print',
	suffix:'LgPrint',
	mediaQuery:'screen and (min-width: 992px)',
	overlapping: false,
	priority: 1001
	},
	{	alias:'xl.print',
	suffix:'XlPrint',
	mediaQuery:'screen and (min-width: 1200px)',
	overlapping: false,
	priority: 1001
	},
	{	alias:'lt-lg.print',
	suffix:'ltLgPrint',
	mediaQuery:'screen and (max-width: 991px)',
	overlapping: false,
	priority: 1001
	},
	{	alias:'lt-md.print',
	suffix:'ltMdPrint',
	mediaQuery:'screen and (max-width: 767px)',
	overlapping: false,
	priority: 1001
	}];

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINT,
  useValue: [...PRINT_BREAKPOINTS],
  multi: true
};
