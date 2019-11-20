import React, {Component} from 'react'
import Search from './SelectSearch/Search'
import Organize from './test/fakeOrg.js'
import Teacher from './test/fakeTeacher'

class teacherInput extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedOrganization : '',
            selectedTeacher :  ''
        }
        this.handleSelectOrganize = this.handleSelectOrganize.bind(this);
        this.handleSelectTeacher = this.handleSelectTeacher.bind(this);
    }
    handleSelectOrganize(Organize)
    {
        this.setState(state => ({selectedOrganization : Organize
                                ,selectedTeacher : ''}));
    }
    handleSelectTeacher(Teacher)
    {
        this.setState(state => ({
            selectedOrganization : state.selectedOrganization,
            selectedTeacher: Teacher
        }))
    }
    render()
    {
        return (<>
            <Search options={Organize} 
                    name="Organize" 
                    value={this.state.selectedOrganization}
                    placeholder="Choose your Organization" 
                    handleChange={this.handleSelectOrganize}
                    filter={undefined}/>

            <Search options={Teacher} 
                    name="Teacher" 
                    value={this.state.selectedTeacher}
                    placeholder="Select your Name" 
                    handleChange={this.handleSelectTeacher}
                    filter={this.state.selectedOrganization}/>
        </>)
    }
}

export default teacherInput