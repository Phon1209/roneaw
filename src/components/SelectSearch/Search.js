import SelectSearch from 'react-select-search'
import '../../css/select-search-style.css'
import React,{Component} from 'react'
/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
 
function renderStyle(option)
{
    return (<span>{option.name}</span>)
}

function filterOptions(Options,filter)
{
    return filter === undefined ? Options : Options.filter(option => Number(option.Organize)===Number(filter));
}
/* Simple example */
class Search extends Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e)
    {
        // this.props.handleChange();
    }
    render()
    {
        const filteredOptions =filterOptions(this.props.options,this.props.filter);
        return <SelectSearch  
                height={172} 
                options={filteredOptions} 
                name={this.props.name} 
                placeholder={this.props.placeholder} 
                renderOption={renderStyle}
                onChange={this.handleChange}/>
    }
}

export default Search