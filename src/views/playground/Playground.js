import React, { Component } from 'react';
// Components
import Test from '../../components/test/Test';
import Button from '../../components/button/Button';
import InputElement from '../../components/input/InputElement';
class Playground extends Component {
    render() {
        return (
            <div id="playground" className="container">
                <h1>PlayGround</h1>
                
                <article id="test">
                    <h3>Test Component</h3>
                    <Test testProp="Soy una propiedad" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>testProp</li>
                    </ul>
                </article>

                <article id="button">
                    <h3>Button Component</h3>
                    <Button id="1" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>id</li>
                    </ul>
                </article>

                <article id="button">
                    <h3>Button Component</h3>
                    <InputElement label="busqueda" type="search" id="busqueda" placeholder="busqueda" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>label. Agrega un label que puede ir arriba o a la izquierda del componente</li>
                        <li>type. Para activar el buscador, deben colocar type="search"</li>
                        <li>id. Añade un identificar único al input</li>
                        <li>placeholder. Añade un placeholder</li>
                        <li>Description. Permite agregar una descripción abajo del input.</li>
                        <li>isLeft. Coloca el label a la izquierda del input</li>
                        <li>handleOnChange. Permite manipular el estado en los formularios.</li>
                    </ul>
                </article>
            </div>
        );
    }
}

export default Playground;