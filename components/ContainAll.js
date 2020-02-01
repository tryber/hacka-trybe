import React from 'react';
import ContainPost from './ContainPost';
export default class ContainAll extends React.Component {
    render(){
        return( <div>
        <Filtro />
        <ContainPost />
        </div>);
    }
}