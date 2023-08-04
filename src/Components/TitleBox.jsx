import React from 'react';
import DropDown from './DropDown';
import Category from './Category';
import Search from './Search';
import TableComponent from './TableComponent';

const TitleBox = () => {
    return (
        <div className='frame'>
            <div className='titleframe'>
                <span className='titletext'>동영상 리스트</span>
                    <div className='buttonframe'>
                        <DropDown />
                        <Category /> 
                        <Search />
                    </div>
                        <TableComponent />
            </div>

        </div>

    );
};

export default TitleBox;