create table ingredient_recipes(
    ingredient text not null,
    recipe text not null,
    unit_of_measurement text not null,
    primary key(ingredient, recipe),
    amount int not null,
    constraint fk_unit_of_measurement foreign key (unit_of_measurement) references unit_of_measurement(id),
    constraint fk_ingredient  foreign key (ingredient) references ingredients (id),
    constraint fk_recipe  foreign key (recipe) references recipes (id)
);