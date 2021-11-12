// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)


// JSX devuelve un objeto

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX

// Este caso React no lo puede renderizar

// <h1 className="header">This is JSX</h1><p>This is a paragraph</p>

/////////////////////////////////////////////////////////////////////////////

// siempre tiene que estar contenido por algun elemento padre o un div

//<div>
//    <h1 className="header">This is JSX</h1>
//    <p>This is a paragraph</p>
//</div>


// podemos guardar colecciones de html en variables

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

// las tenemos que contener con parentesis

ReactDOM.render( page
    ,
    document.getElementById("root1")
)

// las podemos renderizar usando la variable

//ReactDOM.render(element, document.getElementById("root"))


//  RETO CREAR NAVBAR

const navbar = (
    <nav>
    <h1>Marca</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
)

ReactDOM.render(navbar , document.getElementById("root"))