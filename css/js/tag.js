const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#fbc02d',
    ul: '#d81b60',
    ol: '#8e24aa',
    header: '#5e35b1',
    nav: '#512da8',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#43a047',
    body: '#e53935',
    padrao: '#f44336',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao;
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)
    if (!elemento.classList.contains('no-label')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})