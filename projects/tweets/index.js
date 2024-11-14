const tweets = [
  {
    id: 1,
    content: 'Lorem ipsum',
    author: 'Ada',
    likes: 10
  },
  {
    id: 2,
    content: 'Dolor sit amet',
    author: 'Steve',
    likes: 8
  },
  {
    id: 3,
    content: 'Consectetur adipiscing elit',
    author: 'Grace',
    likes: 12
  },
  {
    id: 4,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: 'Alan',
    likes: 2
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    author: 'Ada',
    likes: 20
  }
];
const structure = ['content', 'likes', 'author'];

const createNewElement = (tag, classToAdd, parent = null) => {
  const element = document.createElement(tag);
  element.classList.add(classToAdd);

  if (parent instanceof Element)
  parent.appendChild(element);

  return element;
};

const ul = document.getElementById('tweets-list');

const generateTweet = tweet => {
  const li = createNewElement('li', 'tweet', ul);

  structure.forEach(key => {
    const p = createNewElement('p', key, li);
    p.textContent = tweet[key];
  });

  if (tweet['likes'] > 10)
  li.classList.add('favorite');
};

tweets.forEach(tweet => generateTweet(tweet));
