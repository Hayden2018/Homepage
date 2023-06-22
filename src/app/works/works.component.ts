import { Component } from '@angular/core';

function generateImageNames(n: number) {
  const imageNames = [];
  for (let i = 1; i <= n; i++) {
    // Pad the number with leading zeros to get a 3-digit string
    const imageName = String(i).padStart(3, '0') + '.jpg';
    imageNames.push(imageName);
  }
  return imageNames;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  current: number = 0;

  items: Array<string> = [
    'Overview',
    'Poe.com Resizer',
    'Music Flip',
    'Arcticles',
    'Photo Gallery',
  ];

  images: Array<string> = generateImageNames(11);

  open = (url: string) => window.open(url);

  download = (url: string) => {
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}