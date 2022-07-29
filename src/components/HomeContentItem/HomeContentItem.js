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
  <div 
  className='home-content-item-container'
  >
    <Card
    hoverable
    onClick={() => goArticleDetail(info.id)}
    // type='inner'
  bodyStyle={{height:'150px'}}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    >
      <Meta title={info.title} description={info.desc} />
    </Card>
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
