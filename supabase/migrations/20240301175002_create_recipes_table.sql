create table if not exists recipes (
    id text default encode(uuid_send(uuid_generate_v4()::uuid),'base64') primary key,
    name text not null,
    duration int not null,
    description text not null,
    created_at timestamp with time zone default now() not null,
    updated_at timestamp with time zone default now() not null,
    deleted_at timestamp with time zone
);