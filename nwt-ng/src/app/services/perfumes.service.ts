import { Injectable } from '@angular/core';
import { Perfume } from '../models/perfume.model';

@Injectable({providedIn: 'root'})
export class PerfumesService {
    perfumes: Perfume[] = [{
        name: 'Dior homme intense',
        role: 'men',
        description: `Dior Homme by Christian Dior is a Woody Floral Musk fragrance for men.
        Dior Homme was launched in 2011. The nose behind this fragrance is Francois Demachy.
        Top notes are lavender, sage and bergamot; middle notes are iris, amber and cacao; base notes are vetiver,
        patchouli and leather.`,
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.13015.jpg',
        rating: 5.0,
        users: {
          username: 'Christian',
          rating: 5,
          comment: 'Very good'
        }
      },
        {
          name: 'Givenchy Pi',
          role: 'men',
          description: `Oriental woody perfume Pi by the house of  is excellent for eternal explorers and fans of sensual experiments.
          Its geometric bottle with perfectly clear lines contains a woody, sensual scent.
          Basil, rosemary, tarragon and neroli introduce freshness into this generally warm,
          oriental composition with an accentuated strong note of Guaiac wood standing in union
          with balmy notes of vanilla, tonka and benzoin resin. There are several successors of this edition.
          Their bottles were designed similarly, with an
          exception of modern and futuristic Pi Neo perfume from 2008. The bottle for Pi was created
          by Serge Mansau. The successors of perfume Pi from 1998 are the following: Pi Fraiche 2001,
          Pi Metallic Collector 2004, Pi Original Code 2006, Pi Leather Jacket 2006 and Pi Neo from 2008.
          Their composition opens with aromas of basil, rosemary, tarragon and mandarin. A heart encompasses
          neroli, geranium, lily of the valley and anise, while base notes include: vanilla, tonka, cedar,
          benzoin, almond and yellow sugar.
          `,
          imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.39.jpg',
          rating: 5.0,
          users: {
            username: 'Christian',
            rating: 5,
            comment: 'Very good'
          }
        }];

    getAllPerfumes() {
        return this.perfumes;
    }
}
