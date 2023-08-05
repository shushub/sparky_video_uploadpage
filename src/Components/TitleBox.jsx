import DropDown from './DropDown';
import Category from './Category';
import Search from './Search';
import TableComponent from './TableComponent';

const TitleBox = () => {
  

    return (
        <div className='frame'>
            <div className='firstbox'>
                <span className='titletext'>동영상 리스트</span>
                <button type='button' className='delete-button'>
                    <span className='delete-text'>
                        삭제 
                    </span>
                </button>
                    <div className='buttonframe'>
                        <DropDown />
                        <Category /> 
                        <Search />
                    </div>
                    <TableComponent/>
            </div>
        </div>

    );
};

export default TitleBox;