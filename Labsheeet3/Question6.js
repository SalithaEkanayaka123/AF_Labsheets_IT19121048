db.getCollection('Lab4_1').update(
    {"name" : "John"},
    {$push:{"subjects":"Distributed Computing"}}
)