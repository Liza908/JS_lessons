const ol = document.getElementById('persons')
const t = document.getElementById('t')
const tbdy = document.createElement('tbody')

const persons = [
{name: 'Vlad', sex: 'male'},
{name: 'Liza', sex: 'female'},
{name: 'Vasya', sex: 'male'}]

const tr2 = document.createElement('tr')

const th1 = document.createElement('th')
th1.innerText = 'Name'
tr2.appendChild(th1)
const th2 = document.createElement('th')
th2.innerText = 'Sex'
tr2.appendChild(th2)

tbdy.appendChild(tr2)

for (const person of persons) {
  const li = document.createElement('li')
  if (person.sex === 'male') {
    // li.classList.add('male')
    li.style.color = 'blue'
  } else {
    li.classList.add('female')
  }
  li.innerHTML = (person.sex === 'male') ? (person.name + ' bear') : (person.name + ' shrimp')
  ol.appendChild(li)

  const tr1 = document.createElement('tr')
  const td1 = document.createElement('td')
  td1.innerHTML = person.name
  tr1.appendChild(td1)
  const td2 = document.createElement('td')
  td2.innerHTML = person.sex
  tr1.appendChild(td2)
  tbdy.appendChild(tr1)
  t.appendChild(tbdy)
}
