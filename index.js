const form =  document.createElement('form')
const div = document.getElementById('id1')
const inputSum = document.createElement('input')

document.body.append(form)
form.append(inputSum)


inputSum.type = 'submit'

inputSum.addEventListener('click', async (e) => {
e.preventDefault()






const res = await fetch('https://api.chucknorris.io/jokes/random ')
const data= await res.json()

div.textContent = data.value


})