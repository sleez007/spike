import { Component } from '@angular/core';
import { ServerAccordion } from '../server-accordion/server-accordion';
import { Technique } from '../../../../core/layout/types';

@Component({
  selector: 'app-description-wrapper',
  imports: [ServerAccordion],
  templateUrl: './description-wrapper.html',
  styleUrl: './description-wrapper.scss',
})
export class DescriptionWrapper {
  readonly items = [
    {
      id: 0,
      title: 'Lorem ipsum dolor',
      content: '10/19/2017',
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      content: 'Ut',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor',
      content: 'Yes',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor',
      content: 'Sit',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor',
    },
  ];

  readonly techniques: Technique[] = [
    {
      id: 0,
      label: 'Server',
      subLabel: 'server',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
      icon: '/assets/icons/server.svg',
    },
    {
      id: 1,
      label: 'Server',
      subLabel: 'server',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
      icon: '/assets/icons/server.svg',
    },
    {
      id: 3,
      label: 'Server',
      subLabel: 'server',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.',
      icon: '/assets/icons/server.svg',
    },
  ];
}
