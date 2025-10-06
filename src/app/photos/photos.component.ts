import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ImageViewComponent } from '../image-view/image-view.component';
import { Router } from '@angular/router';
export interface Photo {
  name: string;
  url: string;
}
@Component({
  selector: 'app-photos',
    standalone: true,
  imports: [
    MatDialogModule,

  ],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [
      {
        name: 'Bali',
        url: 'https://cdn.tui.be/img/destinations/Header/frvacance-indonesie-bali.jpg'
      },
      {
        name: 'Costa rica',
        url: 'https://photos.altai-travel.com/1280x0/paysage-au-costa-rica-kevin-29566.jpg'
      },
      {
        name: 'Florence',
        url: 'https://florencesite.fr/images/florencesite.jpg'
      },
       {
        name: 'Cambodge',
        url: 'https://cxfile.advences.com/CFAVOYAGES/photo/cambodge.jpg'
      },
       {
        name: 'Népal',
        url: 'https://photos.altai-travel.com/1920x0/randonneurs-dans-les-vallees-des-annapurnas-au-nepal-adobe-stock-29134.jpg'
      },
       {
        name: 'Japon',
        url: 'https://tcsvoyages.ch/wp-content/uploads/2019/10/shutterstock-2407392777-pagode-de-chureito-attraction-touristique-du-japon-celebre-mtfuji-1620x1080.jpg'
      },
       {
        name: 'Egypte',
        url: 'https://img-4.linternaute.com/1EVvGrwO2gvVZtM-BgNH8VF26gw=/1500x/smart/3f1ef65c18e848efae5b25c3e745199a/ccmcms-linternaute/32185114.jpg'
      },  {
        name: 'Perou',
        url: 'https://www.perou-sur-mesure.com/uploads/sites/50/2023/09/machu-picchu-lama-perou.jpeg'
      },
       {
        name: 'Islande',
        url: 'https://gti.images.tshiftcdn.com/7456437/x/0/kirkjufell-northern-lights-best-tours-and-packages-1.jpg?w=380&h=411&fit=crop&q=62&dpr=2&ixlib=react-9.8.1'
      },
      {
        name: 'Pays Basque',
        url: 'https://www.larousse.fr/encyclopedie/data/images/1314661-Pays_basque.jpg'
      }
  
    ];
    image?: Photo;
  constructor( 
    private router: Router,
    private dialog: MatDialog
    
  ) {}

  ngOnInit(){
console.log('photo!')
  }
  clickOn(img:string){
    const image = this.photos.find(photo => photo.name === img);

    if (image) {
    console.log(img)
    this.dialog.open(ImageViewComponent, {
      width: '900px',
      height: '700px',
      data:image
    });
  }else {
      console.error('Image non trouvée pour', img);
    }}
    returnHome(){
      this.router.navigate(['/'])
    }

}
