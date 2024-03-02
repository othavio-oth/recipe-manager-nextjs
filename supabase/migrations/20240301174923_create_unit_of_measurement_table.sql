create table if not exists unit_of_measurement (
    id text default uuid_generate_v4() primary key,
    name text not null,
    created_at timestamp with time zone default now() not null,
    updated_at timestamp with time zone default now() not null,
    deleted_at timestamp with time zone
);
