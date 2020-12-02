import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUsInfo = [
    {
      title: 'Headquarters(Toll-Free)',
      description: '800.899.1000'
    },
    {
      title: 'Headquarters',
      description: '801.899.1000'
    },
    {
      title: 'Sales',
      description: '801.805.9500'
    },
    {
      title: 'Fax',
      description: '801.805.9032'
    }
  ];

  comeSeeUs = [
    {
      title: 'Company, Inc.',
      description: '942 East of Philippines Cebu City, CB 23924'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
