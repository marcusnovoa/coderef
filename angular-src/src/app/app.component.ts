import { Component } from '@angular/core';
import { trigger, group, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition(`home => dashboard,
                  home => login,
                  home => register,
                  home => post-resource,
                  home => find-resource,
                  dashboard => login,
                  dashboard => register,
                  dashboard => post-resource,
                  dashboard => find-resource,
                  search => login,
                  search => register,
                  search => post-resource,
                  search => find-resource,
                  profile => login,
                  profile => register,
                  login => register,
                  post-resource => find-resource,
                  post-resource => login,
                  post-resource => register,
                  find-resource => login,
                  find-resource => register`, [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            height: '100%',
            transform: 'translateX(100%)'
          }),
          {optional:true}),
        group([
          // move page off screen left on leave
          query(':leave',
            animate('500ms ease',
              style({
                position: 'fixed',
                width:'100%',
                height: '100%',
                transform: 'translateX(-100%)'
              })
            ),
            {optional:true}),
          // move page in screen from left to right
          query(':enter',
            animate('500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)'
              })
            ),
            {optional:true}),
        ])
      ]),
      transition(`dashboard => home,
                  login => home,
                  login => dashboard,
                  login => search,
                  login => post-resource,
                  login => find-resource,
                  register => home,
                  register => login,
                  register => dashboard,
                  register => search,
                  register => post-resource,
                  register => find-resource,
                  post-resource => home,
                  post-resource => dashboard,
                  post-resource => search,
                  find-resource => home,
                  find-resource => dashboard,
                  find-resource => search,
                  find-resource => post-resource`, [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            height: '100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),
        group([
          // move page off screen right on leave
          query(':leave',
            animate('500ms ease',
              style({
                position: 'fixed',
                width:'100%',
                height: '100%',
                transform: 'translateX(100%)'
              })
            ),
            {optional:true}),
          // move page in screen from right to left
          query(':enter',
            animate('500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)'
              })
            ),
            {optional:true}),
        ])
      ]),
      transition(`home => search,
                  home => profile,
                  dashboard => search,
                  dashboard => profile,
                  search => profile,
                  login => profile,
                  register => profile,
                  post-resource => profile,
                  find-resource => profile`, [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          transform: 'translateY(100%)'
        }),
        {optional:true}),
      group([
      // move page off screen left on leave
      query(':leave',
      animate('500ms ease',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          transform: 'translateX(-100%)'
        })
      ),
      {optional:true}),
      // move page in screen up from bottom
      query(':enter',
      animate('700ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0%)'
        })
      ),
      {optional:true}),
      ])
      ]),
      transition(`search => home,
                  search => dashboard,
                  profile => home,
                  profile => dashboard,
                  profile => search,
                  profile => post-resource,
                  profile => find-resource`, [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          transform: 'translateX(-100%)'
        }),
        {optional:true}),
      group([
      // move page off screen down on leave
      query(':leave',
      animate('500ms ease',
        style({
          position: 'fixed',
          width:'100%',
          height: '100%',
          opacity:'0'
        })
      ),
      {optional:true}),
      // move page in screen from left to right
      query(':enter',
      animate('700ms ease',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ),
      {optional:true}),
      ])
      ]),
      // More transitions here
    ])
  ]
})
export class AppComponent {
  title = 'app';

  // Animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData['animation'];
  }
}
