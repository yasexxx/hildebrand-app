import { group, transition, style, query, animateChild, animate, state } from '@angular/animations';
import { trigger } from '@angular/animations';

export const slideInAnimation = 
    trigger('routeAnimations', [
        transition('HomePage <=> OtherPage', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> OtherPage2', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> OtherPage3', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> OtherPage4', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('HomePage <=> OtherPage5', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('HomePage <=> OtherPage6', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('HomePage <=> OtherPage7', [
            style({ position: 'relative'}),
            query( ':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style( { left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition( '* <=> FilterPage', [
            style( { position: 'relative'}),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({
                    left: '-100%'
                })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);



export const slideInOut =
    trigger('flyInOut', [
      state('in', style( { transform: 'translateX(0)'})),
      transition( 'void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate('1000ms')
      ]),
      transition( '* => void', [
        animate('1000ms', style({ transform: 'translateX(100%'}))
      ])
]);

