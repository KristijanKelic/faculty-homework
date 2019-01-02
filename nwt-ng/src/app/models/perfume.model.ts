export class Perfume {
  public id: string;
  public name: string;
  public role: string;
  public description: string;
  public imageUrl: string;
  public rating: number;
  public users: [{username: string, rating: number, comment: string}];

  constructor(id: string,
              name: string,
              role: string,
              desc: string,
              imgUrl: string,
              rating: number,
              users: [{username: string, rating: number, comment: string}]) {
                this.id = id;
                this.name = name;
                this.role = role;
                this.description = desc;
                this.imageUrl = imgUrl;
                this.rating = rating;
                this.users = users;
              }

}
