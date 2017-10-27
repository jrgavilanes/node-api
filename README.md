# NODE-API

### recuerda:

### MONGO
sudo service mongod start
mongo ds231315.mlab.com:31315/prueba -u <dbuser> -p <dbpassword>
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
> db.todos.drop();
```

## Import / Export Helper
```
MongoDB provides two mechanisms for importing and exporting data. One way is via the mongoimport and mongoexport utilities. These allow you to import and export JSON and CSV representations of your data. The other way is with mongorestore and mongodump utilities which deal with binary dumps.

In this tab we provide pre-filled strings for the commands that we find most useful.

Copy and paste from below to import or export from this database. For a full list of options that can be used with these commands, please see MongoDB's documentation on this subject.

Binary

Import database
mongorestore -h ds231315.mlab.com:31315 -d prueba -u <user> -p <password> <input db directory>
Export database
mongodump -h ds231315.mlab.com:31315 -d prueba -u <user> -p <password> -o <output directory>
Import collection
mongorestore -h ds231315.mlab.com:31315 -d prueba -u <user> -p <password> <input .bson file>
Export collection
mongodump -h ds231315.mlab.com:31315 -d prueba -c <collection> -u <user> -p <password> -o <output directory>
JSON

Import collection
mongoimport -h ds231315.mlab.com:31315 -d prueba -c <collection> -u <user> -p <password> --file <input file>
Export collection
mongoexport -h ds231315.mlab.com:31315 -d prueba -c <collection> -u <user> -p <password> -o <output file>
CSV

Import collection
mongoimport -h ds231315.mlab.com:31315 -d prueba -c <collection> -u <user> -p <password> --file <input .csv file> --type csv --headerline
Export collection
mongoexport -h ds231315.mlab.com:31315 -d prueba -c <collection> -u <user> -p <password> -o <output .csv file> --csv -f <comma-separated list of field names>
```

# testeo rest-api
sudo apt-get install httpie
```
http POST 0.0.0.0:8080/todos text="hola nano"
http GET 0.0.0.0:8080/todos
http GET 0.0.0.0:8080/todos/59f3467bede65c108fb192d5

http https://api-janrax.herokuapp.com/todos
http POST https://api-janrax.herokuapp.com/todos text="hola amiguete"
```

# chequear espacio del disco duro terminal ( linux )
ncdu

# Heroku
```
heroku git:remote -a api-janrax
heroku apps:info
git push heroku
```



