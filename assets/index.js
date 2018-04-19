const appetizers = [
    {
        name: 'Buffalo Chicken Dip',
        price: 8.50
    },
    {
        name: 'Pepper Poppers',
        price: 5.99
    },
    {
        name: 'Homemade Guacamole',
        price: 14.13
    },
    {
        name: 'Glazed Wings',
        price: 2.91
    },
    {
        name: 'Savory Pita Bread',
        price: 5.19
    },
    {
        name: 'Fiesta Pinwheels',
        price: 7.39
    },
    {
        name: 'Bean Dip',
        price: 2.99
    },
    {
        name: 'Jalepeno Poppers',
        price: 7.99
    },
];

const entrees = [
    {
        name: 'Chicken Cordon Bleu',
        price: 17.99
    },
    {
        name: 'Miso-Glazed Salmon',
        price: 23.59
    },
    {
        name: 'Shrimp Stir-Fry',
        price: 12.99
    },
    {
        name: 'Chicken Thighs',
        price: 10.00
    },
    {
        name: 'Honey Glazed Tilapia',
        price: 15.59
    },
];

const desserts = [
    {
        name: 'Custard',
        price: 3.59
    },
    {
        name: 'Cheesecake',
        price: 2.99
    },
    {
        name: 'Rice Pudding',
        price: 1.59
    },
    {
        name: 'Italian Sorbet',
        price: 1.59
    },
]

$("#menu-list").append('<h3>Appetizers</h3>');
appetizers.forEach(({
    name,
    price
}) => {
    $("#menu-list").append(`<li>${name} $${price}</li>`);
});

$("#menu-list").append('<h3>Entrees</h3>');
entrees.forEach(({
    name,
    price
}) => {
    $("#menu-list").append(`<li>${name} $${price}</li>`);
});

$("#menu-list").append('<h3>Desserts</h3>');
desserts.forEach(({
    name,
    price
}) => {
    $("#menu-list").append(`<li>${name} $${price}</li>`);
});
