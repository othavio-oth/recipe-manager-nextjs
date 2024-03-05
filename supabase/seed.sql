insert into ingredients(id,name)values
    (1,'milk'),
    (2,'sugar'),
    (3,'butter');


insert into unit_of_measurement(id, name) values
    (1,'tablespoon'),
    (2,'teaspoon'),
    (3,'cup'),
    (4,'pint');
insert into recipes (id, name, duration, description, instructions) values
    (1,'cup of milk', 3, 'A cup of milk', 'Add milk in a cup' );

insert into ingredient_recipes (ingredient, recipe, unit_of_measurement, amount) values
(1, 1, 1, 2);

