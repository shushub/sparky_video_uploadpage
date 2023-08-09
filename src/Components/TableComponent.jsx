import React, { useState } from 'react';

const TableComponent = ({ onSelectRows }) => {
  const data = [
    { id: 1, video: 'video1', participate: '0', cheering: '0', comment: '0', Date: '2020.02.21'},
    { id: 2, video: 'video2', participate: '80k', cheering: '80k', comment: '1000k', Date: '2020.02.21' },
    { id: 3, video: 'video3', participate: '0', cheering: '0', comment: '0', Date: '2020.02.21' },
    { id: 4, video: 'video4', participate: '0', cheering: '80k', comment: '1000k', Date: '2020.02.21' },
  ];
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibility, setVisibility] = useState({});
  const [showEditDropdown, setShowEditDropdown] = useState(false); 
  const [selectedEditRow, setSelectedEditRow] = useState(null); 
  const [editedText, setEditedText] = useState('');
  const [editInputVisible, setEditInputVisible] = useState(false); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDropdownRow, setSelectedDropdownRow] = useState(null);

  const handleGroupOptionsClick = (id) => {
    setSelectedDropdownRow(id);
    setShowDropdown(!showDropdown);
  };
  
  const toggleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const toggleAllRowSelection = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((item) => item.id));
    }
  };

  const toggleVisibility = (id) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const getVisibilityIcon = (id) => {
    return visibility[id] ? 'visibility_off.svg' : 'visibility.svg';
  };

  const handleEditClick = (id) => {
    setShowEditDropdown(!showEditDropdown);
    setSelectedEditRow(id);
    setEditedText('');
    setEditInputVisible(true);
  };

  return (
    <div>
      <table className="videoframe">
        <thead>
          <tr>
            <th >
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={toggleAllRowSelection}
              />
            </th>
            <th>동영상 및 수정</th>
            <th>공개 상태</th>
            <th>참여</th>
            <th>응원</th>
            <th>댓글</th>
            <th>날짜 ↓</th>
          </tr>
          </thead>
          <div  className="custom-line"></div>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="styled-row">
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => toggleRowSelection(item.id)}
                />
              </td>
              <td>
                <div className="custom-video-wrapper">
                  <video
                    src={`/videos/${item.id}.mp4`}
                    alt={item.profileTitle}
                    controls
                    className="profile-video"
                  />
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
                  <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                    <img src="library_add_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                  </div>
                    <div style={{ marginTop: '25px', marginLeft: '14px'}}>
                      <div style={{ position: 'relative' }}>
                        <img
                          src="Group 1411.svg"
                          alt=" "
                          style={{ width: '24px', height: '24px'}}
                          onClick={() => handleGroupOptionsClick(item.id)}
                        />
                      {showDropdown && selectedDropdownRow === item.id && (
                      <div
                        className="group-dropdown"
                        style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        zIndex: 1,
                      }}
                      > 
                      <button className="all-option" onClick={() => handleGroupOptionsClick(item.id)}>
                        <div className="dropdown-item">
                          <img src="edit_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} className="option-icon"/>
                          <span className="option-edit">제목 및 설명 수정</span>
                        </div>
                        <div className="dropdown-item">
                          <img src="library_add_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                          <span className="option-game">게임 구간 설정</span>
                        </div>
                        <div className="dropdown-item">
                          <img src="Group 1411.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                          <span className="option-fix">관절 위치 수정</span>
                        </div>
                        <div className="dropdown-item">
                          <img src="offline_bolt_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                          <span className="option-sparky">스파키에서 보기</span>
                        </div>
                        <div className="dropdown-item">
                          <img src="Group.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                          <span className="option-link">링크 복사</span>
                        </div>
                      </button>
                     </div>
                        )}
                      </div>
                    </div>
                  <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                  <img src="offline_bolt_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                  </div>
                  <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                  <img src="Group.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                </div>
                </div>
              </td>
              <td>
                <div className="visibility-icon-with-text">
                  <button
                    onClick={() => toggleVisibility(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    <img
                      src={getVisibilityIcon(item.id)}
                      alt=" "
                      style={{
                        width: '24px',
                        height: '24px',
                        border: '0',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </button>
                  <span
                    className={`visibility-text ${
                      visibility[item.id] ? 'private' : 'public'
                    }`}
                    style={{ marginLeft: '10px' }}
                  >
                    {visibility[item.id] ? '비공개' : '공개'}
                  </span>
                </div>
              </td>
              <td className="table-data-cell">{item.participate}</td>
              <td className="table-data-cell">{item.cheering}</td>
              <td className="table-data-cell">{item.comment}</td>
              <td>{item.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
