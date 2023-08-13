const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


smallCups.forEach((cup , idx) => {
    cup.addEventListener('click', () => highlightsCups(idx))

    })

function highlightsCups(idx){
    smallCups.forEach((cup , idx2) => {

    })
}

