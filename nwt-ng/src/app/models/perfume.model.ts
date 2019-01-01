export class Perfume {
  public name: string;
  public role: string;
  public description: string;
  public imageUrl: string;
  public rating: number;
  public users: [{username: string, rating: number, comment: string}];

  constructor(name: string,
              role: string,
              desc: string,
              imgUrl: string,
              rating: number,
              users: [{username: string, rating: number, comment: string}]) {
                this.name = name;
                this.role = role;
                this.description = desc;
                this.imageUrl = imgUrl;
                this.rating = rating;
                this.users = users;
              }

}
