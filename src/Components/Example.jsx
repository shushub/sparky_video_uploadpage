const [selectedRows, setSelectedRows] = useState([]);
const [visibility, setVisibility] = useState({});
const [showEditDropdown, setShowEditDropdown] = useState(false); 
const [selectedEditRow, setSelectedEditRow] = useState(null); 
const [editedText, setEditedText] = useState('');
const [editInputVisible, setEditInputVisible] = useState(false); 
const [showGroupDropdown,  setShowGroupDropdown] = useState(false);
const [showDropdownContent, setShowDropdownContent] = useState(false); 
const [selectedGroupRow, setSelectedGroupRow] = useState(null); 
const [groupText, setGroupText] = useState('');
const [GroupInputVisible, setGroupInputVisible] = useState(false); 


  const handleButtonClick = (id) => {
    setShowGroupDropdown(!showGroupDropdown);
    setSelectedGroupRow(id);
    setGroupText('');
    setGroupInputVisible(ture);
  };

  showGroupDropdown && selectedGroupRow == item.id && (
    
  )
  

                      
  <div style={{ marginTop: '25px', marginLeft: '14px' }}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src="edit_24px.svg"
                        alt=" "
                        style={{ width: '24px', height: '24px' }}
                        onClick={() => handleEditClick(item.id)}
                      />
                      {showEditDropdown && selectedEditRow === item.id && (
                        <div
                          className="edit-dropdown"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            zIndex: 1,
                          }}
                        >
                          {showEditDropdown && selectedEditRow === item.id && (
                            <div className="edit-dropdown">
                              <button className='edit-direct'>바로 수정</button>
                              <div className="edit-text">
                              </div>
                              <button className='check-detail'>세부 정보 이동</button>
                            </div>
                          )}
                      </div>
                      )}
                    </div>
                  </div>


                    <div style={{ marginTop: '25px', marginLeft: '14px'}}>
                    <div style={{ position: 'relative' }}>
                    <img
                      src="Group 1411.svg"
                      alt=" "
                      style={{ width: '24px', height: '24px'}}
                      onClick={() => handleButtonClick(item.id)}
                    />
                    </div>
                  </div>
                  {showDropdownContent && (
                    <div style={{ marginTop: '25px', marginLeft: '14px' }}>
                      <div>
                        <button className='all-option' onClick={handleButtonClick(item.id)}>
                          <div>
                            <img src="edit_24px.svg" alt=" " style={{ width: '24px', height: '24px' }}/>
                              <span className='option-edit'>제목 및 설명 수정</span>
                          </div>
                          <div>
                            <img src="library_add_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                            <span className='option-game'>게임 구간 설정</span>
                          </div>
                          <div>
                            <img src="Group 1411.svg" alt=" " style={{ width: '24px', height: '24px'}} />
                            <span className='option-fix'>관절 위치 수정</span>
                          </div>
                          <div>
                            <img src="offline_bolt_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                            <span className='option-sparky'>스파키에서 보기</span>
                          </div>
                          <div>
                            <img src="Group.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                            <span className='option-link'>링크 복사</span>
                          </div>
                        </button>
                      </div>
                    </div>