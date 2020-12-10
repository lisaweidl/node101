const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        text: 'Go shopping',
        date: moment('19.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
    },
    {
        text: 'Clean appartment',
        date: moment('20.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 2,
        done: false
    },
    {
        text: 'Visit Mum',
        date: moment('21.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 3,
        done: true
    },
    {
        text: 'Do Uni Task',
        date: moment('22.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 4,
        done: true
    }
  ]

  const json = JSON.stringify(todoList)

  fs.writeFileSync('todo.json', json)