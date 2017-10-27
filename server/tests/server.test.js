const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(() => {
    done();
  })
});

describe('POST /todos', () => {

  it('should create a new todo', (done) => {
    var text = 'Text todo text';
    request(app).post('/todos').send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => {
          done(e);
        });
      });
  });

  it('should not create todo with invalid body data', (done) => {
    var text = '';
    request(app).post('/todos').send({ text })
      .expect(400)
      .expect((res) => {
        expect(res.body.text).toBe(undefined);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch(e => done(e));
      });
  });

});

describe("GET /todos", () => {
  
  it("should get all todos", (done) => {
    var fakeData = [{ text: 'text 1' }, { text: 'text 2' }];
    Todo.insertMany(fakeData).then(() => {
      request(app).get('/todos')
        .expect(200)
        .end((err, res)=>{
          if (err) {
            return done(err);
          }
          //expect(JSON.parse(res.text).todos.length).toBe(2);
          expect(res.body.todos.length).toBe(2);
          done();
        });
    }).catch((e) => done(e));
  });
  
});

describe("GET /todos/id", () => {
  
  it("should get todos/id", (done) => {
    var fakeData = [{ text: 'text 1' }, { text: 'text 2' }];
    Todo.insertMany(fakeData).then((data) => {
      var id = data[0]._id;
      var text = data[0].text;
      request(app).get(`/todos/${id}`)
        .expect(200)
        .end((err, res)=>{
          if (err) {
            return done(err);
          }
          expect(res.body.todo._id).toEqual(id);
          expect(res.body.todo.text).toBe(text);
          done();
        }, (e) => done(e));
    }).catch((e) => done(e));
  });
  
  it("should Not get todos/id with an Invalid ID (404)", (done) => {
    var fakeData = [{ text: 'text 1' }, { text: 'text 2' }];
    Todo.insertMany(fakeData).then((data) => {
      var id = data[0]._id;
      var wrong_id = id + 'aaaaa';
      request(app).get(`/todos/${wrong_id}`).expect(404);
      done();
    }).catch((e) => done(e));
  });
  
  it("should Not get todos/id with an unknown ID (404)", (done) => {
    var fakeData = [{ text: 'text 1' }, { text: 'text 2' }];
    Todo.insertMany(fakeData).then((data) => {
      var id = data[0]._id;
      var wrong_id = id + '';
      wrong_id = "1" + wrong_id.substr(1,30);
      request(app).get(`/todos/${wrong_id}`).expect(404).end(done);
      
    }).catch((e) => done(e));
  });
  
});
