import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';

class List extends Component {
    constructor(props) {
                super(props);
                this.state = {
                    items: [],
                    isLoaded: false,
                }
    };

    componentDidMount(){

        fetch("http://localhost:3000/fundations")
                .then(res => res.json())
                .then(json => {
                    this.setState ({
                        isLoaded: true,
                        items: json
                    })
                }); 
            }
    
    render() {

        var {isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Wczytywanie...</div>
        } else {

            return (

            <div>
                {items.map(item => (
                    <li className="list-el" key={item.id}>
                        <div className="list-el-about">
                            <p className="list-el-title">{item.name}</p>
                            <p className="list-el-goal">{item.goal}</p>
                        </div>
                        <div className="list-el-things">
                            <p>{item.things}</p>
                        </div>
                    </li>
                ))}
            </div>
            
            )
        }
    }
}

export class Slider extends Component {

render() {
    return (
        <div className="slider" id="organizations">
            <div className="container">
                <div className="slider-title">
                    <p>Komu pomagamy?</p>
                    <img src={decoration} alt="" />
                </div>
                <div className="slider-nav">
                    <button className="slider-nav-btn">Fundacjom</button>
                    <button className="slider-nav-btn">Organizacjom<br></br>pozarządowym</button>
                    <button className="slider-nav-btn">Lokalnym<br></br>zbiórkom</button>
                </div>
                <div className="slider-info">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br></br>którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br></br>komu pomagają i czego potrzebują.</p>
                </div>
                <div className="slider-list">
                    <ul className="slider-list-elements" ref="list">
                        <List/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
}