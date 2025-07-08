import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-interest',
  imports: [CommonModule],
  templateUrl: './select-interest.component.html',
  styleUrl: './select-interest.component.css',
})
export class SelectInterestComponent {
  constructor(private xlayout:Router){}
  interests = [
    {
      label: 'Technology',
      icon: 'bi bi-cpu',
      image:
        'https://www.unido.org/sites/default/files/2023-01/technology%20transfer%20%282%29.jpg',
      selected: false,
    },
    {
      label: 'Sports',
      icon: 'bi bi-dribbble',
      image:
        'https://rockytopsportsworld.com/wp-content/uploads/2019/07/sports-balls.jpg',
      selected: false,
    },
    {
      label: 'Music',
      icon: 'bi bi-music-note-beamed',
      image:
        'https://ap-southeast-2-seek-apac.graphassets.com/AEzBCRO50TYyqbV6XzRDQz/prI4QpkMQVeVSwe0l9ER',
      selected: false,
    },
    {
      label: 'Movies',
      icon: 'bi bi-film',
      image:
        'https://upload.wikimedia.org/wikipedia/en/d/db/The_Movies_Coverart.jpg',
      selected: false,
    },
    {
      label: 'Fashion',
      icon: 'bi bi-bag',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ABreZZqZ9xDBbC4xMlZfjUU5Kv3GRvhvmA&s',
      selected: false,
    },
    {
      label: 'News',
      icon: 'bi bi-newspaper',
      image:
        'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=',
      selected: false,
    },
    {
      label: 'Gaming',
      icon: 'bi bi-controller',
      image:
        'https://i0.wp.com/newdigitalage.co/wp-content/uploads/2022/06/iStock-1334436084-jpg.webp?fit=1024%2C683&ssl=1',
      selected: false,
    },
    {
      label: 'Politics',
      icon: 'bi bi-bank',
      image: 'https://bpac.in/wp-content/uploads/2020/07/BPAC_Main.png',
      selected: false,
    },
    {
      label: 'Health',
      icon: 'bi bi-heart-pulse',
      image:
        'https://health-e.in/wp-content/uploads/2023/09/family-shape-figure-with-heart-stethoscope.webp',
      selected: false,
    },
    {
      label: 'Education',
      icon: 'bi bi-book',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcgBHjOXmeVscY-RQ4G2XBpbR--Istli6KFHuZit8B9IzPrcc8QPMxWbruAW5c5tNYZc&usqp=CAU',
      selected: false,
    },
  ];

  toggleInterest(interest: any) {
    interest.selected = !interest.selected;
  }
  gotoxlayout(){
     this.xlayout.navigate(['/x-layout'])
  }
}
