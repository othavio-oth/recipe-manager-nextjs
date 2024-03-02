create table if not exists ingredients (
    id text default encode(uuid_send(uuid_generate_v4()::uuid),'base64') primary key,
    name text not null,
    created_at timestamptz default now() not null,
    updated_at timestamptz default now() not null,
    deleted_at timestamp with time zone
);
