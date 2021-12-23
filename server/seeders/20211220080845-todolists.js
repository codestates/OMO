'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todolists', [
      {
        id: '1',
        content: '12월말 회의 자료 작성',
        checkbox: false,
        endtime: '2021-12-16',
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '1',
        tags: '회의,작성'
      },
      {
        id: '2',
        content: '반도체 부족 사태에 따른 이슈 대응 방안 작성',
        checkbox: false,
        endtime: '2021-12-16',
        color: 'green',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '1',
        tags: '이슈,작성'
      },
      {
        id: '3',
        content: '마포지점 개소식 일정 수립',
        checkbox: false,
        endtime: '2021-12-16',
        color: 'yellow',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '1',
        tags: '일정수립'
      },
      {
        id: '4',
        content: '부모님 생신 축하 장소 물색',
        checkbox: true,
        endtime: '2021-12-16',
        color: 'yellow',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '2',
        tags: '가족,긴급'
      },
      {
        id: '5',
        content: '유치원 등록 신청',
        checkbox: true,
        endtime: '2021-12-16',
        color: 'yellow',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '3',
        tags: '원준,유치원,긴급'
      }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todolists', null, {});
  }
};
