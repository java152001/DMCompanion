import React, { Component } from 'react';
import "./reference.css";
import axios from 'axios';

export default class Reference extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue : '',
            searchOption : ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.setSearchOption = this.setSearchOption.bind(this);
    }

    handleSearchChange = (e) => {
        this.setState({
            searchValue : e.target.value
        })
    }

    setSearchOption = (e) => {
        this.setState({
            searchOption : e.target.value
        })
    }

    submitSearch = () => {
        console.log(this.state.searchValue)

        axios.get("https://api.open5e.com/spells/" + this.state.searchValue.toLowerCase()).then(
            (res,err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(res)
                }
            }
        )
    }

    render() {
        return (
            <div className="referencePage">
                <input
                    className = "searchText"
                    type = "text"
                    placeholder = "Search..."
                    onChange = { this.handleSearchChange }
                />
                <button
                    className = "searchSubmit"
                    onClick = { this.submitSearch }
                >
                    Search
                </button>
                <div 
                    className="searchOptions"
                >
                    <form>
                        <input
                            type = "radio"
                            value = "spell"
                            name = "spell"
                            checked = { this.state.searchOption === 'spell' }
                            onChange = { this.setSearchOption }
                        /> Spell
                        <input
                            type = "radio"
                            value = "monster"
                            name = "monster"
                            checked = { this.state.searchOption === 'monster' }
                            onChange = { this.setSearchOption }
                        /> Monster
                        <input
                            type = "radio"
                            value = "item"
                            name = "item"
                            checked = { this.state.searchOption === 'item' }
                            onChange = { this.setSearchOption }
                        /> Item
                    </form>
                </div>
            </div>
        )
    }
}