document.addEventListener('DOMContentLoaded', () => {
    const html = document.getElementById('htmlImage');
    const css = document.getElementById('cssImage');
    const python = document.getElementById('pythonImage');
    const js = document.getElementById('jsImage');
    const java = document.getElementById('javaImage');

    if(html) {
        html.classList.add('fade-in-html');
    }

    if(css) {
        css.classList.add('fade-in-css');
    }

    if(python) {
        python.classList.add('fade-in-python');
    }

    if(js) {
        js.classList.add('fade-in-js');
    }

    if(java) {
        java.classList.add('fade-in-java');
    }
})


