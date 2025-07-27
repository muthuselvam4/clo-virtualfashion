import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContentList } from './action.js';

function ConnectContentList() {
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.connectContentList);

  // Fetch data on mount
  useEffect(() => {
    fetch('https://closet-recruiting-api.azurewebsites.net/api/data')
      .then((response) => response.json())
      .then((data) => dispatch(setContentList(data)))
      .catch((error) =>
        console.log('Something went wrong on our side', error)
      );
  }, [dispatch]);

  console.log('listItem', contentList);

  return (
    <div>
      {contentList.length > 0 ? (
        contentList.map((item, index) => (
          <div key={index}>{item?.id}</div>
        ))
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
}

export default ConnectContentList;