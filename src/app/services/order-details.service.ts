import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // albumdetails 
  
  albumDetails = [
    {
      id:1,
      albumName:"Blank Banshee 0",
      albumDetails:"Vaportrap at its absolute best.",
      albumPrice:15,
      albumImg:"https://2.bp.blogspot.com/-7B57HYRMFWI/V1eV2kxc5kI/AAAAAAAACYA/VyrNcMpHhXQ-Dd7LpNNn3So1-RmxcUFQACLcB/s1600/blank%2Bbanshee%2Bardencuore.jpg"
    },
    {
      id:2,
      albumName:"SEAWRLD HEARTBREAK",
      albumDetails:"Another thematically rich album from DDS.",
      albumPrice:16,
      albumImg:"https://i.scdn.co/image/ab67616d0000b2732075c72e60b2a315b13fbe95"
    },
    {
      id:3,
      albumName:"I'll Try Living Like This",
      albumDetails:"Explore vaporwave with this album",
      albumPrice:15,
      albumImg:"https://f4.bcbits.com/img/a0102733853_10.jpg"
    },
    {
      id:4,
      albumName:"失​わ​れ​た​時​REGRET",
      albumDetails:"Emotional albums from DDS",
      albumPrice:17,
      albumImg:"https://f4.bcbits.com/img/a1431540382_10.jpg"
    },
    {
      id:5,
      albumName:"WLFGRL+",
      albumDetails:"Equivalent of being a sweet highschool girl who just ruthlessly killed someone she loahtes",
      albumPrice:15,
      albumImg:"https://f4.bcbits.com/img/a1638146004_10.jpg"
    },
    {
      id:6,
      albumName:"control",
      albumDetails:"Unmatched aesthetic",
      albumPrice:17,
      albumImg:"https://f4.bcbits.com/img/a0641051073_10.jpg"
    },
    {
      id:7,
      albumName:"Illuminations",
      albumDetails:"Some of the finests FM sound design ever",
      albumPrice:17,
      albumImg:"https://f4.bcbits.com/img/a3455280595_10.jpg"
    },
    {
      id:8,
      albumName:"Screensaver",
      albumDetails:"One of the calm vaporwave to listen",
      albumPrice:16,
      albumImg:"https://f4.bcbits.com/img/a3476184756_10.jpg"
    },
  ]
}
