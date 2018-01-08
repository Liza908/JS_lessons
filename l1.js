const ol = document.getElementById('names')

const names = ['Vlad', 'Liza', 'Vasya']

for (const name of names) {
  const li = document.createElement('li')
  li.innerHTML = name
  ol.appendChild(li)
}
