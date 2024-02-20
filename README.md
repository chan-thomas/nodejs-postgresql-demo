## Installation
- Rename .env-sample to .env
- Add db connection sting to the new .env file
  
Use the following SQL statements to create a **users** table and add a few records

```sql
CREATE TABLE users (
	id  SERIAL PRIMARY KEY,
	username varchar NOT NULL,
	password varchar NOT NULL,
	created timestamptz DEFAULT now() NOT NULL
);

insert into users (username, password) values ('Jack','abc123');
insert into users (username, password) values ('Aaron','password'), ('Kate','password2');
```

Install the dependency for the app
```bash
npm install
```

Start the app
```bash
npm run local
```


Below are some SQL statements for reference:
```sql
update users set password = 'iforgot' where username = 'Aaron';
delete from users where username = 'Jack';

truncate users ;
drop table users ;

select * from users;
```