import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';
import ReactPaginate from 'react-paginate';

class FundationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            offset: 0,
            perPage: 3,
            currentPage: 0,
        }
    };
    // limit - 3
    // offset - limit * page - perPage * currentPage

    loadFundationsFromServer (){
        fetch("http://localhost:3000/fundations")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    pageCount: Math.ceil(json.length / this.state.perPage)
                })
            });
    }
    componentDidMount() {
        this.loadFundationsFromServer();
    };

    handlePageClick = items => {
        let selected = items.selected;
        console.log(items)
        let offset = Math.ceil(selected * 3);
    
        this.setState({ 
            offset,
            currentPage: selected
        });
      };

    render() {
        // console.log(this.state.pageCount)
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Wczytywanie...</div>
        } else {
            console.log(items);
            return (
                
                <div>
                    {items.slice(this.state.offset, this.state.offset +3).map(item => (
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
                
                <ReactPaginate
                pageCount={this.state.pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                ></ReactPaginate>
                </div>
                
              

            )
        }
    }
}

export class OrganizationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }
    };

    componentDidMount() {

        fetch("http://localhost:3000/organizations")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    };

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
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

export class LocalList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }
    };

    componentDidMount() {

        fetch("http://localhost:3000/local")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    };

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
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
    constructor(props) {
        super(props);
        this.state = {
            show: 1
        }
        this.handleFundationsClick = this.handleFundationsClick.bind(this);
        this.handleOrganizationsClick = this.handleOrganizationsClick.bind(this);
        this.handleLocalClick = this.handleLocalClick.bind(this)

    }
    handleFundationsClick() {
        this.setState({
            show: 1
        })
    }

    handleOrganizationsClick() {
        this.setState({
            show: 2
        })
    }

    handleLocalClick() {
        this.setState({
            show: 3
        })
    }

    render() {
        let showList;

        if (this.state.show === 1) {
            showList = <FundationList />
        } if (this.state.show === 2) {
            showList = <OrganizationsList />
        } if (this.state.show === 3) {
            showList = <LocalList />
        }

        return (
            <div className="slider" id="organizations">
                <div className="container">
                    <div className="slider-title">
                        <p>Komu pomagamy?</p>
                        <img src={decoration} alt="" />
                    </div>
                    <div className="slider-nav">
                        <button className="slider-nav-btn" onClick={this.handleFundationsClick}>Fundacjom</button>
                        <button className="slider-nav-btn" onClick={this.handleOrganizationsClick}>Organizacjom<br></br>pozarządowym</button>
                        <button className="slider-nav-btn" onClick={this.handleLocalClick}>Lokalnym<br></br>zbiórkom</button>
                    </div>
                    <div className="slider-info">
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br></br>którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br></br>komu pomagają i czego potrzebują.</p>
                    </div>
                    <div className="slider-list">
                        <ul className="slider-list-elements" ref="list">
                            {showList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}