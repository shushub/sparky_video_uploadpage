import React, { useState } from 'react';
import VideoList from './VideoList';

const VideoTop = () => {
  const [tableData, setTableData] = useState([
    { id: 1, isChecked: false },
    { id: 2, isChecked: true },
  ]);
  const handleCheckboxChange = (id) => {
    setTableData((prevTableData) =>
      prevTableData.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  return (
    <div>
      <table className='videoframe'>
        <thread>
          <tr>
            <th>
              <input type="checkbox" />
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
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTop;

