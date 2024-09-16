
// Add a new item to the existing list with id 'fruits-list'
const fruitsList = document.getElementById('fruits-list');
console.log(fruitsList);
const li = document.createElement('li');
li.innerText = 'Nashpoti';
fruitsList.appendChild(li);

// Create and append a new section to the body
const newSection = document.createElement('section');
newSection.innerHTML = `
  <h3>Hello This is some fruits</h3>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestiae natus dolor, eius enim fuga
    doloremque commodi quam iusto ipsam eligendi? Voluptatibus quidem voluptatum, doloribus aliquid
    repellendus iste maiores, distinctio ipsam obcaecati ullam totam aliquam magnam autem atque hic
    doloremque.</p>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    <li>Pineapple</li>
  </ul>
`;
document.body.appendChild(newSection);

// Apply styles to all <section> elements
const sections = document.querySelectorAll('section');
for (let section of sections) {
  section.style.border = '2px solid steelblue';
  section.style.marginBottom = '10px';  
  section.style.borderRadius = '15px';
  section.style.padding = '7px';
  section.style.backgroundColor = 'lightblue';
  section.style.boxShadow = '5px 5px 5px lightgrey';
}

