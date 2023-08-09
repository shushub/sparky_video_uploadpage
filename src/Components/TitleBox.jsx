import DropDown from './DropDown';
import Category from './Category';
import Search from './Search';
import TableComponent from './TableComponent';
import PageMove from './PageMove';
import React, { useState } from 'react';

const TitleBox = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    
  const handleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

    return (
        <div className='frame'>
            <div className='firstbox'>
                <span className='titletext'>동영상 리스트</span>
                    <button type='button' className='delete-button'>
                            <span className='delete-text'>
                                삭제 
                            </span>
                    </button>
                    {selectedRows.length > 0 && (
          <p>{selectedRows.length} selected</p>
        )}
                    <div className='buttonframe'>
                        <DropDown />
                        <Category /> 
                        <Search />
                    </div>
                    <TableComponent onSelectRows={handleRowSelection} />
                    <PageMove />
            </div>
        </div>

    );
};

export default TitleBox;