db.getCollection('Lab4_1').updateOne(
    {},
    {$set:{"isActive":"false"}}
)