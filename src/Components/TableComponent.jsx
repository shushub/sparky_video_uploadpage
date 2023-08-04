import React, { useState } from 'react';

const TableComponent = () => {
  const data = [
    { id: 1, video: 'video1', participate: '0', cheering:'0',comment: '0',Date:'2020.02.21'},
    { id: 2, video: 'video2', participate: '80k', cheering:'80k',comment: '1000k',Date:'2020.02.21' },
    { id: 3, video: 'video3', participate: '0', cheering:'0',comment: '0',Date:'2020.02.21' },
    { id: 4, video: 'video4', participate: '0', cheering:'80k',comment: '1000k',Date:'2020.02.21' },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [visibility, setVisibility] = useState({});

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

  const handleVideoUpload = (id, event) => {
    const file = event.target.files[0];
    console.log(`Uploading video for ID ${id}:`, file);
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
  return (
    <div>
      <table className='videoframe'>
        <thread  className= "custom-line">
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
        </thread>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ marginBottom: '26px' }}>
      <td>
        <input
          type="checkbox"
          checked={selectedRows.includes(item.id)}
          onChange={() => toggleRowSelection(item.id)}
        />
      </td>
              <td>
                <input
                  type="file"
                  id={`videoInput-${item.id}`}
                  style={{ display: 'none' }}
                  onChange={(e) => handleVideoUpload(item.id, e)}
                />
                <label htmlFor={`videoInput-${item.id}`}>
                  <div className="custom-video-wrapper">
                    <video
                      src={`/videos/${item.id}.mp4`}
                      alt={item.profileTitle}
                      controls
                      className="profile-video"
                    />
                    <div className="custom-video-overlay"></div>
                      <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                        <img src="edit_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                      <img src="library_add_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                      <img src="Group 1411.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                    <img src="offline_bolt_24px.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div style={{ marginTop: '25px', marginLeft:'14px'}}>
                    <img src="Group.svg" alt=" " style={{ width: '24px', height: '24px' }} />
                    </div>
                  </div>
                </label>
              </td>
              <td>
              <div className="visibility-icon-with-text">
                <button
                    onClick={() => toggleVisibility(item.id)}
                    style={{ background: 'transparent', border: 'none', outline: 'none' }}
                  >
                    <img
                      src={getVisibilityIcon(item.id)}
                      alt=" "
                      style={{ width: '24px', height: '24px', border: '0',
                      backgroundColor: 'transparent' }}
                    />             
                  </button>
                    <span className={`visibility-text ${visibility[item.id] ? 'private' : 'public'}`}
                     style={{ marginLeft: '10px' }}>
                      {visibility[item.id] ? '비공개' : '공개'}
                    </span>
                </div>
              </td>
              <td className="table-data-cell" >{item.participate}</td>
              <td className="table-data-cell" >{item.cheering}</td>
              <td className="table-data-cell" >{item.comment}</td>
              <td className="table-data-cell" >{item.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableComponent;