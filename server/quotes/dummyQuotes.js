// const getRandomNumber = (min, max) => {
//     return parseInt(Math.random() * (Number(max) - Number(min) + 2));
//   };

//   const getParsedDate = (createdAt) => {
//     return new Date(createdAt).toLocaleDateString('ko-KR');
//   }

const dummySource = [
  {
    id: '1',
    content: '일을 끝까지 못해도 좋다. 다만 처음부터 포기할 생각만은 하지 말라.',
    name: 'name1',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    content: '아침에 일찍 일어나는 새가 점심에 쉴 수 있다.',
    name: 'name2',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    content: '셰익스피어는 그의 작품 대부분을 빵과 버터와 생활 경비를 얻기 위해 썼다.',
    name: 'name3',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = { dummySource };
