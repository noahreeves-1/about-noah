const brands = document.querySelectorAll('.brand');

brands.forEach((brand) => {
    brand.addEventListener('mouseover', e => {
        brand.classList.remove('grayscale');
    })

    brand.addEventListener('mouseout', e => {
        brand.classList.add('grayscale');
    })
})