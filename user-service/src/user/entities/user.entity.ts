export class User {
  constructor({
    id,
    email,
    age,
    name,
    password,
    type,
    created_at,
    updated_at,
  }: {
    id: number;
    email: string;
    age: number;
    name: string;
    type: number;
    password: string;
    created_at: Date;
    updated_at: Date;
  }) {
    this.id = id;
    this.email = email;
    this.age = age;
    this.name = name;
    this.password = password;
    this.type = type;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  public id;

  public email;

  public age;

  public password;

  public name;

  public type;

  public created_at;

  public updated_at;
}
