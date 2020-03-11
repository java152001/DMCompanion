import React, { Component } from 'react';
import "./reference.css";
import ReferenceCard from "../../components/ReferenceCard";
import axios from 'axios';

export default class Reference extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue : '',
            searchOption : '',
            spellResponse : {},
            showCard : false
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

        // replaces spaces with hyphens as required by the api
        var valueClean =  this.state.searchValue.replace(/\s/g, '-')

        axios.get("https://api.open5e.com/" + this.state.searchOption + "/" + valueClean.toLowerCase() + "?limit=5").then(
            (res,err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(res.data)
                    var spellData = {
                        name : res.data.name,
                        desc : res.data.desc,
                        duration : res.data.duration,
                        level : res.data.level
                    };

                    this.setState({
                        spellResponse: spellData,
                        showCard: true
                    })
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
                            value = "spells"
                            name = "spells"
                            checked = { this.state.searchOption === 'spells' }
                            onChange = { this.setSearchOption }
                        /> Spell
                        <input
                            type = "radio"
                            value = "monsters"
                            name = "monsters"
                            checked = { this.state.searchOption === 'monsters' }
                            onChange = { this.setSearchOption }
                        /> Monster
                        <input
                            type = "radio"
                            value = "weapons"
                            name = "weapons"
                            checked = { this.state.searchOption === 'weapons' }
                            onChange = { this.setSearchOption }
                        /> Item
                    </form>
                </div>
                <div className="displayCard">
                    { this.state.showCard === true && <ReferenceCard referenceData = {this.state.spellResponse} />}
                </div>
            </div>
        )
    }
}