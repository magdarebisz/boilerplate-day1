/* create element function - wrapper for document.createElement function
  which allows us to assign other params like class, function as blueprint
*/
const createElement = (type, params = {}) => {
  const { content } = params;
  let elem;

  if (type === 'text') {
    elem = document.createTextNode(content);
  } else {
    elem = document.createElement(type);
  }

  Object.keys(params).forEach((key) => {
      elem[key] = params[key];
  });

  return elem;
};

// clear html function - invoked every time render function is invoked

/* people module - helps us hide internal variables, functions, implementation
  allow us to expose functions - add person, delete person
*/

const people = (() => {
  // array for holding names' people ['Przemek', 'Paweł']

  // variables for keeping in memory html elements for instance h1, span, div

  // add person function, taking as parameter person's name
  const addPerson = (name) => {

  };
  // delete person function, taking as parameter index of people array

  // add person bridge between DOM and add person function
  const addPersonHandler = () => {
    addPerson(input.value);
  };

  // delete person bridge between DOM and delete person function

  // event listeners, it is possible to listen many others events like keys, touches
  // add add person handler on button
  // add delete person handler on list element

  /* get person html item function for creating person label
  */
  const getPersonHtmlItem = (name) => {
      const li = createElement('li');
      const span = createElement('span');
      // create rest of the elements: text, icon, text

      li.appendChild(span);
      /* apend rest of the elements:
      content to span,
      closeBtn to li,
      closeIcon to closeBtn
      */

      return li;
  };

  /* defining render function, it should clear previous content of the list
    iterate over people array, creating (get) person html item and append it
    to the root of the list
  */

  // invoke render function as example with fake array


  /* returning functions from module allows us to interact with people module
    as you can see object is returned
  */
  return {
    addPerson,
    // add delete person function here
  }
})();
