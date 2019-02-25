import React, { Component } from 'react'
import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category
    })
    let tempCategories = new Set(tempItems); //single instance of categories
    let categories = Array.from(tempCategories);
    categories = ['all', ...categories]; //add 'all' category
    return categories;
}

export default class Works extends Component {

    state = {
        items: this.props.items.edges,
        workItems: this.props.items.edges,
        categories: getCategories(this.props.items.edges)
    }

    handleItems = category => {
        let tempItems = [...this.state.items];
        if (category === "all") {
            // console.log(category);
            this.setState({
                workItems: tempItems
            })
        }
        else {
            // console.log(category);
            let items = tempItems.filter(({ node }) => node.category === category);
            this.setState({
                workItems: items
            })
        }
    }
    render() {
        // console.log(this.state.categories);
        if (this.state.items.length > 0) {
            return (
                <section className="section my-5">
                    <h2 className="text-center">My Works</h2>
                    <div className="container">

                        {/* categories */}
                        <div className="row mb-2 mx-auto">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className="btn btn-primary text-capitalize m-3"
                                            onClick={() => { this.handleItems(category) }}>
                                            {category}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* items */}
                        <div className="row">
                            {this.state.workItems.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-8 col-lg-4">
                                        <div  className="card mx-auto">
                                            <div className="card__side card__side--front">
                                                <Img fluid={node.image.fluid} />
                                            </div>
                                            <div className="card__side card__side--back">

                                                <div className="card-body py-5">
                                                    <div className="d-flex justify-content-between">
                                                        <h4 className="card-title mx-auto ">
                                                            {node.title}
                                                        </h4>
                                                    </div>
                                                    <p className="card-text">
                                                        <small> {node.description.description}</small>
                                                    </p>
                                                    <a href={node.link} className="btn btn-outline-light mt-1">View Online</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 col-sm6 mx-auto text-center text-capitalize">
                                <h5>No items to display</h5>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
