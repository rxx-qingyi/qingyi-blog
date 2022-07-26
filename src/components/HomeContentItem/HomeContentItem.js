import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tag ,Card} from 'antd';
import { useHistory } from 'react-router-dom';

import './HomeContentItem.less';
import { CATEGORY_COLORS } from '../../utils/constants';
import { UPDATE_MENU_KEY } from '../../store/types';

const HomeContentItem = ({ dispatch, ownProps }) => {
  const { Meta } = Card;
  const history = useHistory();
  const info = ownProps.info;
  console.log(info);
  const getTagColor = () => {
    const categoryColor = CATEGORY_COLORS.find(
      (item) => item.category === info.category,
    );
    return categoryColor && categoryColor.color;
  };
  const goArticleDetail = (id) => {
    dispatch({ type: UPDATE_MENU_KEY, data: 'article' });
    history.push(`/article/${id}`);
  };

  return (
    // info {id:id,title:标题,desc:描述,category:标签,createTime:创建时间}
    <div>
  {/* <div
    // className='home-content-item-container'
    onClick={() => goArticleDetail(info.id)}
  > */}
    <Card
    hoverable
    style={{ width: 240 }}
    onClick={() => goArticleDetail(info.id)}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title={info.title} description={info.desc} />
    </Card>
  {/* </div> */}




    {/* <div
      className='home-content-item-container'
      onClick={() => goArticleDetail(info.id)}
    >
      <h2 className='title'>{info.title}</h2>
      <div className='desc'>{info.desc}</div>
      <div className='category-container'>
        <Tag color={getTagColor()}>{info.category}</Tag>
        <span className='create-time'>{info.createTime}</span>
      </div>
    </div> */}

    </div>

  );
};

HomeContentItem.propTypes = {
  info: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    ownProps,
  };
};

export default connect(mapDispatchToProps)(HomeContentItem);
