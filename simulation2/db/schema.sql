create table Houses(Id serial primary key not null,
                    name varchar(25) not null,
                    address varchar(80) not null,
                    city varchar(25) not null,
                    state varchar(25) not null,
                    zip integer not null,
                    )