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
/**
 * We will assume data is consistent but not necessarily composed of the exact elements we want
 * to print, therefore we will define the expected structure of our outputs below
 */
const structure = ['content', 'likes', 'author'];

/**
 * Avoids redundancy in creating an element, assigning classes and appending the newly created
 * element to a given parent
 * 
 * @param {String} tag
 * @param {String[]} classToAdd
 * @param {Element} parent Optional
 * @returns {Element} Newly created element
 */
const createNewElement = (tag, classToAdd, parent = null) => {
  const element = document.createElement(tag);
  element.classList.add(classToAdd);

  if (parent instanceof Element) // Avoid errors if parent is not a DOM Element (wether parent is defined or not)
  parent.appendChild(element);

  return element;
};

const ul = document.getElementById('tweets-list');

/**
 * Automatically creates and appends a tweet from the given data based on the expected structure
 * 
 * @param {Object} tweet Expected to be an object from the tweets data source
 */
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
