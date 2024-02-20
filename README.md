## Installation
- rename .env-sample to .env
- add db connection sting to the new .env file
```bash
npm run local
```

```sql
CREATE TABLE users2 (
	id  SERIAL PRIMARY KEY,
	username varchar NOT NULL,
	password varchar NOT NULL,
	created timestamptz DEFAULT now() NOT NULL
);

insert into users (username, password) values ('Jack','abc123');
insert into users (username, password) values ('Aaron','password'), ('Kate','password2');

update users set "password" = 'iforgot' where username = 'Aaron';
delete from users where username = 'Jack';

truncate users ;
drop table users ;

select * from users;
```