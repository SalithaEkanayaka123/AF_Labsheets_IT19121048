db.getCollection('Lab4_1').update(
    {"name" : "Smith","isActive" : true},
    {$addToSet:{"subjects":"Distributed Computing"}}
)