import SelectSearch from 'react-select-search'
import '../../../css/select-search-style.css'
import React,{Component} from 'react'
/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
 
function renderStyle(option)
{
    return (<span>{option.name}</span>)
}

/* Simple example */
class Search extends Component
{
    handleChange(value)
    {
        this.props.handleChange(value);
    }
    render()
    {
        const filteredOptions = this.props.options.filter(option => option.Organize === this.props.filter);
        // console.log(filteredOptions);
        return <SelectSearch  
                height={172} 
                value={this.props.value}
                options={filteredOptions} 
                name={this.props.name} 
                placeholder={this.props.placeholder} 
                renderOption={renderStyle}
                onChange={({value}) => this.handleChange(value)}/>
    }
}

export default Search