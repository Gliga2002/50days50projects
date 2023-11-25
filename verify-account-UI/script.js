const codes = document.querySelectorAll('.code')

// NE SVIDJA MI SE OVAJ PROJEKAT BAS JE GLUP I LOSE GA OBJASNIO

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
          console.log(code.value);
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10)
            console.log(code.value);
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})
