var locationsClick = document.getElementById('locationsClick'),
    customersClick = document.getElementById('customersClick'),
    keysClick = document.getElementById('keysClick'),
    lLink = document.getElementById('lLink'),
    cLink = document.getElementById('cLink'),
    kLink = document.getElementById('kLink'),
    locations = document.getElementById('locations'),
    customers = document.getElementById('customers'),
    keys = document.getElementById('keys'),
    icon = document.getElementsByTagName('i'),
    cIcon = icon[0],
    kIcon = icon[1],
    rIcon = icon[2];

locationsClick.onclick = function() {
    cIcon.style.color = '#fff'
    kIcon.style.color = '#000'
    rIcon.style.color = '#000'

    locations.classList.add('d-block')
    customers.classList.remove('d-block')
    keys.classList.remove('d-block')

    locationsClick.style.background = '#0484D5'
    lLink.style.color = '#fff'
    customersClick.style.background = '#fff'
    cLink.style.color = '#000'
    keysClick.style.background = '#fff'
    kLink.style.color = '#000'
}
customersClick.onclick = function() {
    cIcon.style.color = '#000'
    kIcon.style.color = '#fff'
    rIcon.style.color = '#000'

    locations.classList.remove('d-block')
    locations.classList.add('d-none')
    customers.classList.add('d-block')
    keys.classList.remove('d-block')

    locationsClick.style.background = '#fff'
    lLink.style.color = '#000'
    customersClick.style.background = '#0484D5'
    cLink.style.color = '#fff'
    keysClick.style.background = '#fff'
    kLink.style.color = '#000'
}
keysClick.onclick = function() {
    cIcon.style.color = '#000'
    kIcon.style.color = '#000'
    rIcon.style.color = '#fff'

    locations.classList.remove('d-block')
    locations.classList.add('d-none')
    customers.classList.remove('d-block')
    keys.classList.add('d-block')

    locationsClick.style.background = '#fff'
    lLink.style.color = '#000'
    customersClick.style.background = '#fff'
    cLink.style.color = '#000'
    keysClick.style.background = '#0484D5'
    kLink.style.color = '#fff'
}
reportsClick.onclick = function() {
    locations.classList.remove('d-block')
    locations.classList.add('d-none')
    customers.classList.remove('d-block')
    keys.classList.remove('d-block')

    locationsClick.style.background = '#fff'
    lLink.style.color = '#000'
    customersClick.style.background = '#fff'
    cLink.style.color = '#000'
    keysClick.style.background = '#fff'
    kLink.style.color = '#000'
}