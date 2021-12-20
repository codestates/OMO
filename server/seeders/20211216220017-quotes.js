'use strict';
const dummyQuotes = require('../quotes/dummySource');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // console.log(`dummyQuotes=${Object.keys(dummyQuotes.dummyQuotes[0].name)}`)
    // console.log(`dummyQuotes=${dummyQuotes.dummyQuotes.length}`)

    // let datas = [];
    // for(let i = 0; i < 10; i++) {
    //   let obj = {
    //     content: dummyQuotes.dummyQuotes[i].content,
    //     name: dummyQuotes.dummyQuotes[i].name,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    //   for(let i = 0; i < 10; i++) {
    //     let obj = {
    //       content: `testContents${i}`,
    //       name: `testName${i}`,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     }
    //   datas.push(obj);
    // }

    return queryInterface.bulkInsert('quotes', dummyQuotes.dummyQuotes, {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('quotes', null, {});
  }
};
