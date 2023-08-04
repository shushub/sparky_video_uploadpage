import React, { useState } from 'react';

const VideoTop = () => {
  const [tableData, setTableData] = useState([
    { id: 1, componentType: 'video' },
    { id: 2, componentType: 'svg' },
  ]);
  return (
    <div>
      <table>
        <thead>
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
        </thead>
        <tbody>
        <td>
                <input type="checkbox" />
              </td>
          {tableData.map((item) => (
            <tr key={item.id} className="custom-row">
              <td>
              </td>
                <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTop;

