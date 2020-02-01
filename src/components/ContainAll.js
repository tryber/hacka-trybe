import React from 'react';
import ContainPost from './ContainPost';
import ListFilter from './ListFilter';

class ContainAll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            select: '',
        }
        this.changeSelect = this.changeSelect.bind(this);
    }

    changeSelect = (value) => {
        this.setState({ select: value })
    }

    render() {
        const { select } = this.state;
        return (
            <div>
                <div>
                    <ListFilter
                        changeSelectedFilter={(value) => this.changeSelect(value)}
                        select={select}
                    />
                </div>
                <div><ContainPost select={select} /></div>
            </div>
        );
    }
}
export default ContainAll;