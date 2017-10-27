# NODE-API

### recuerda:

### MONGO
sudo service mongod start

```
jrgavilanes:~/workspace/node-api (master) $ mongo
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
> show databases;
admin  0.000GB
dev    0.000GB
local  0.000GB
test   0.000GB
> use test
switched to db test
> show collections
todos
users
> db.todos.find();
> db.todos.insert({titulo: 'titulo', edad: 10, texto: 'texto bla bla'});
WriteResult({ "nInserted" : 1 })
> db.todos.find();
{ "_id" : ObjectId("59f349817538d2f30f4c6eef"), "titulo" : "titulo", "edad" : 10, "texto" : "texto bla bla" }
> db.todos.insert({titulo: 'titulo', edad: 11, texto: 'texto bla bla'});
WriteResult({ "nInserted" : 1 })
> db.todos.find();
{ "_id" : ObjectId("59f349817538d2f30f4c6eef"), "titulo" : "titulo", "edad" : 10, "texto" : "texto bla bla" }
{ "_id" : ObjectId("59f349f47538d2f30f4c6ef0"), "titulo" : "titulo", "edad" : 11, "texto" : "texto bla bla" }
> db.todos.find({edad: 10});
{ "_id" : ObjectId("59f349817538d2f30f4c6eef"), "titulo" : "titulo", "edad" : 10, "texto" : "texto bla bla" }
> db.todos.findOne();
{
        "_id" : ObjectId("59f349817538d2f30f4c6eef"),
        "titulo" : "titulo",
        "edad" : 10,
        "texto" : "texto bla bla"
}
> db.todos.findOne({"_id" : ObjectId("59f349f47538d2f30f4c6ef0")});
{
        "_id" : ObjectId("59f349f47538d2f30f4c6ef0"),
        "titulo" : "titulo",
        "edad" : 11,
        "texto" : "texto bla bla"
}
> db.todos.remove({"_id" : ObjectId("59f349f47538d2f30f4c6ef0")});
WriteResult({ "nRemoved" : 1 })
> db.todos.findOne({"_id" : ObjectId("59f349f47538d2f30f4c6ef0")});
null
> db.todos.update({edad: 10},{$set: {edad: 15}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.todos.find()
{ "_id" : ObjectId("59f349817538d2f30f4c6eef"), "titulo" : "titulo", "edad" : 15, "texto" : "texto bla bla" }
```


# testeo rest-api
sudo apt-get install httpie
```
http POST 0.0.0.0:8080/todos text="hola nano"
http GET 0.0.0.0:8080/todos
http GET 0.0.0.0:8080/todos/59f3467bede65c108fb192d5
```

# chequear espacio del disco duro terminal ( linux )
ncdu



